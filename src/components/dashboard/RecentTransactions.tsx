import React, { useState } from 'react';
import { 
  ChevronRight, 
  RotateCcw, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';


interface TransactionProps {
  id: string;
  name: string;
  date: string;
  amount: string;
  isCredit?: boolean;
  timestamp?: number;
  isTrustedMerchant?: boolean;
  location?: string;
}

const REVERSAL_TIME_LIMIT = 30 * 60 * 1000; // 30 minutes in milliseconds

const Transaction: React.FC<TransactionProps> = ({ 
  id, 
  name, 
  date, 
  amount, 
  isCredit = false, 
  timestamp = Date.now() - Math.random() * 60 * 60 * 1000, // Random time within last hour for demo
  isTrustedMerchant = false,
  location = "MG Road, Bangalore" // Default location
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const elapsed = Date.now() - timestamp;
    return Math.max(0, REVERSAL_TIME_LIMIT - elapsed);
  });

  const [isExpanded, setIsExpanded] = useState(false);
  
  // Update time left every second
  React.useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTimeLeft = Math.max(0, prev - 1000);
        return newTimeLeft;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format time left as mm:ss
  const formatTimeLeft = () => {
    if (timeLeft <= 0) return "00:00";
    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const canReverse = timeLeft > 0 && !isCredit;
  const percentTimeLeft = (timeLeft / REVERSAL_TIME_LIMIT) * 100;
  
  return (
    <div className="py-3 border-b border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className={`h-10 w-10 ${isTrustedMerchant ? 'bg-indigo-100 text-indigo-600' : 'bg-paytm-lightBlue text-paytm-blue'}`}>
            <span className="text-xs font-semibold">{name.substring(0, 2).toUpperCase()}</span>
            {isTrustedMerchant && <ShieldCheck className="absolute -bottom-1 -right-1 h-4 w-4 text-indigo-600" />}
          </Avatar>
          <div>
            <div className="font-medium text-sm">
              {name}
              {isTrustedMerchant && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                  Trusted
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">{date}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          </div>
        </div>
        <div className={`text-sm font-medium ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
          {isCredit ? '+' : '-'} ₹{amount}
        </div>
      </div>
      
      {!isCredit && (
        <div className="mt-2 flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 text-xs py-1" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Details
          </Button>
          
          {canReverse && (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`flex items-center gap-1 text-xs py-1 border-purple-400 text-purple-700 hover:bg-purple-50 ${!canReverse && 'opacity-50 cursor-not-allowed'}`} 
                  disabled={!canReverse}
                >
                  <RotateCcw size={14} />
                  Reverse Transaction
                  <span className="ml-1 flex items-center text-amber-600">
                    <Clock size={14} className="mr-1" />
                    {formatTimeLeft()}
                  </span>
                </Button>
              </SheetTrigger>
              <ReversalRequestSheet 
                transactionId={id} 
                name={name} 
                amount={amount} 
                isTrustedMerchant={isTrustedMerchant}
              />
            </Sheet>
          )}
          
          {!canReverse && !isCredit && (
            <span className="text-xs text-gray-500">Reversal window closed</span>
          )}
        </div>
      )}
      
      {isExpanded && !isCredit && (
        <div className="mt-3 bg-gray-50 p-3 rounded-md text-xs">
          <div className="flex justify-between mb-1">
            <span>Transaction ID:</span>
            <span className="font-medium">{id}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Time:</span>
            <span className="font-medium">{new Date(timestamp).toLocaleTimeString()}</span>
          </div>
          {canReverse && (
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span>Reversal time window:</span>
                <span className="font-medium text-amber-600">{formatTimeLeft()}</span>
              </div>
              <Progress value={percentTimeLeft} className="h-1" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ReversalRequestSheet: React.FC<{
  transactionId: string;
  name: string;
  amount: string;
  isTrustedMerchant?: boolean;
}> = ({ transactionId, name, amount, isTrustedMerchant = false }) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [reversalSubmitted, setReversalSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  
  const handleSubmit = () => {
    // Random check for weekly quota warning for demo
    const exceedingQuota = Math.random() > 0.7;
    
    if (exceedingQuota) {
      setShowWarning(true);
    } else {
      setReversalSubmitted(true);
    }
  };
  
  const reasons = [
    { id: 'wrong-upi', label: 'Incorrect UPI ID' },
    { id: 'wrong-amount', label: 'Wrong amount transferred' },
    { id: 'suspected-fraud', label: 'Suspected fraud/scam' },
    { id: 'service-not-received', label: 'Service/product not received' },
    { id: 'duplicate', label: 'Duplicate payment' }
  ];
  
  if (reversalSubmitted) {
    return (
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="text-center mb-4">
          <SheetTitle className="text-xl text-purple-700">Request Submitted</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col items-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <p className="text-lg font-medium">Your reversal request has been sent</p>
          <p className="text-sm text-gray-500 mt-1">Transaction ID: {transactionId}</p>
        </div>
        
        <RefundStatusTracker isTrustedMerchant={isTrustedMerchant} />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">We'll notify you when there's an update</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Track Status
          </Button>
          
          <p className="mt-6 text-xs text-gray-500">
            Need help? Contact customer support or use our Smart Dispute Chatbot
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-2 w-full">
                Open Dispute Chatbot
              </Button>
            </DialogTrigger>
            <DisputeChatbotDialog />
          </Dialog>
        </div>
      </SheetContent>
    );
  }
  
  if (showWarning) {
    return (
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="text-center mb-4">
          <SheetTitle className="text-xl text-amber-600">Weekly Reversal Limit</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col items-center mb-6">
          <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
          <p className="text-lg font-medium">Reversal Quota Warning</p>
          <p className="text-sm text-gray-500 mt-1 text-center">
            You've already used your weekly reversal quota. Additional requests may require enhanced verification.
          </p>
        </div>
        
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Weekly limit:</span>
            <span className="text-sm font-medium">3 transactions</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Used this week:</span>
            <span className="text-sm font-medium">3 transactions</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Fraud risk score:</span>
            <span className="text-sm font-medium text-amber-600">Medium</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={() => setShowWarning(false)}>
            Cancel
          </Button>
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={() => setReversalSubmitted(true)}>
            Continue Anyway
          </Button>
        </div>
      </SheetContent>
    );
  }
  
  return (
    <SheetContent className="w-full sm:max-w-md">
      <SheetHeader>
        <SheetTitle className="text-xl text-purple-700">Request Transaction Reversal</SheetTitle>
      </SheetHeader>
      
      <div className="py-4">
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Recipient:</span>
            <span className="text-sm font-medium">{name}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Amount:</span>
            <span className="text-sm font-medium">₹{amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Transaction ID:</span>
            <span className="text-sm font-medium">{transactionId}</span>
          </div>
        </div>
        
        {isTrustedMerchant && (
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4">
            <div className="flex items-start">
              <ShieldCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-700">Trusted Merchant Transaction</p>
                <p className="text-xs text-blue-600 mt-1">
                  Reversal requests for trusted merchants go through formal verification and may take 1-3 business days.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select reason for reversal:
          </label>
          <RadioGroup value={selectedReason} onValueChange={setSelectedReason} className="space-y-2">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value={reason.id} id={reason.id} />
                <label htmlFor={reason.id} className="text-sm font-medium leading-none cursor-pointer">
                  {reason.label}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedReason} 
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300"
        >
          Submit Reversal Request
        </Button>
      </div>
    </SheetContent>
  );
};

const RefundStatusTracker: React.FC<{isTrustedMerchant?: boolean}> = ({isTrustedMerchant = false}) => {
  // Fix the type issue by making currentState a number that can be 0, 1, 2, or 3
  const [currentState, setCurrentState] = React.useState(0); // 0: Request Sent, 1: Receiver Response, 2: Bank Processing, 3: Complete

  // Optionally, you can update currentState based on some logic or props
  // For demo, let's increment state every 2 seconds up to 3
  React.useEffect(() => {
    if (currentState < 3) {
      const timer = setTimeout(() => setCurrentState(currentState + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentState]);

  return (
    <div className="mt-4 mb-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="h-0.5 w-full bg-gray-200"></div>
        </div>
        <div className="relative flex justify-between">
          {/* Step 1: Request Sent */}
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${currentState >= 0 ? 'bg-purple-600' : 'bg-gray-300'}`}>
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <div className="text-xs mt-1">Request Sent</div>
          </div>
          {/* Step 2: Receiver Response */}
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${currentState >= 1 ? 'bg-purple-600' : 'bg-gray-300'}`}>
              {currentState >= 1 ? (
                <CheckCircle className="h-4 w-4 text-white" />
              ) : (
                <span className="text-xs text-white">2</span>
              )}
            </div>
            <div className="text-xs mt-1">Receiver Response</div>
          </div>
          {/* Step 3: Bank Processing */}
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${currentState >= 2 ? 'bg-purple-600' : 'bg-gray-300'}`}>
              {currentState >= 2 ? (
                <CheckCircle className="h-4 w-4 text-white" />
              ) : (
                <span className="text-xs text-white">3</span>
              )}
            </div>
            <div className="text-xs mt-1">Bank Processing</div>
          </div>
          {/* Step 4: Complete */}
          <div className="flex flex-col items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${currentState >= 3 ? 'bg-green-600' : 'bg-gray-300'}`}>
              {currentState >= 3 ? (
                <CheckCircle className="h-4 w-4 text-white" />
              ) : (
                <span className="text-xs text-white">4</span>
              )}
            </div>
            <div className="text-xs mt-1">Complete</div>
          </div>
        </div>
      </div>
      {/* Current status message */}
      <div className="mt-4 p-3 bg-purple-50 rounded-lg text-sm">
        <p className="font-medium text-purple-700">
          {currentState === 0 && "Your reversal request has been submitted and sent to the recipient."}
          {currentState === 1 && (isTrustedMerchant
            ? "Request is under review by the merchant. This may take 1-3 business days."
            : "Recipient has been notified. Waiting for their response.")}
          {currentState === 2 && "Recipient approved. Transaction is being processed by the bank."}
          {currentState === 3 && "Money has been refunded to your account."}
        </p>
        {currentState === 1 && !isTrustedMerchant && (
          <p className="text-xs text-gray-500 mt-1">
            If the recipient doesn't respond within 24 hours, the request will be automatically escalated to your bank.
          </p>
        )}
      </div>
    </div>
  );
};

const DisputeChatbotDialog = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm your Smart Dispute Assistant. How can I help you with your transaction issue today?", 
      isBot: true 
    }
  ]);
  const [inputText, setInputText] = useState("");
  
  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: inputText, isBot: false }]);
    
    // Clear input
    setInputText("");
    
    // Simulate bot response after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "I understand you're concerned about your transaction. I can see your reversal request is in progress. The recipient has been notified and has 24 hours to respond. Is there anything specific you'd like to know?", 
        isBot: true 
      }]);
    }, 1000);
  };
  
  return (
    <DialogContent className="w-full max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-xl text-purple-700">Smart Dispute Assistant</DialogTitle>
      </DialogHeader>
      
      <div className="h-96 overflow-y-auto p-2 border rounded-md mb-4">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`mb-2 p-2 rounded-lg max-w-[80%] ${
              msg.isBot 
                ? 'bg-purple-100 text-purple-800 mr-auto' 
                : 'bg-blue-100 text-blue-800 ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-md"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </DialogContent>
  );
};

// Create transaction data with varied timestamps
const transactions = [
  { 
    id: "TX123456789", 
    name: "Pizza Hut", 
    date: "Today, 10:24 AM", 
    amount: "1200.00", 
    isCredit: false,
    timestamp: Date.now() - 15 * 60 * 1000, // 15 minutes ago
    location: "Pizza Hut, MG Road, Bangalore"
  },
  { 
    id: "TX123456790", 
    name: "Big Bazaar", 
    date: "Today, 9:35 AM", 
    amount: "4500.00",
    timestamp: Date.now() - 25 * 60 * 1000, // 25 minutes ago
    location: "Big Bazaar, Koramangala, Bangalore"
  },
  { 
    id: "TX123456791", 
    name: "Starbucks", 
    date: "Today, 8:15 AM", 
    amount: "750.00",
    timestamp: Date.now() - 40 * 60 * 1000, // 40 minutes ago
    isTrustedMerchant: true,
    location: "Starbucks, Indiranagar, Bangalore"
  },
  { 
    id: "TX123456792", 
    name: "Reliance Fresh", 
    date: "Yesterday, 5:20 PM", 
    amount: "3200.00", 
    isCredit: false,
    timestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
    location: "Reliance Fresh, HSR Layout, Bangalore"
  }
];

// Make sure all transactions in the extended list have isCredit property
interface ExtendedTransaction extends TransactionProps {
  id: string;
  name: string;
  date: string;
  amount: string;
  isCredit?: boolean;
}

// Define additional transactions with the proper type
const additionalTransactions: ExtendedTransaction[] = [
  { 
    id: "TX123456793", 
    name: "McDonald's", 
    date: "Apr 15, 2025", 
    amount: "450.00", 
    isCredit: false,
    location: "McDonald's, Bellandur, Bangalore"
  },
  { 
    id: "TX123456794", 
    name: "DMart", 
    date: "Apr 12, 2025", 
    amount: "2800.00", 
    isCredit: false,
    location: "DMart, Electronic City, Bangalore"
  },
  { 
    id: "TX123456795", 
    name: "Swiggy", 
    date: "Apr 10, 2025", 
    amount: "650.00", 
    isCredit: false,
    location: "Swiggy Delivery, Marathahalli, Bangalore"
  }
];

const mockTransactions: ExtendedTransaction[] = [
  {
    id: "1",
    name: "Pizza Hut",
    date: "Today, 7:30 PM",
    amount: "1200",
    isCredit: false,
    timestamp: Date.now() - 30 * 60 * 1000,
    isTrustedMerchant: true,
    location: "Pizza Hut, MG Road, Bangalore"
  },
  {
    id: "2",
    name: "Big Bazaar",
    date: "Today, 6:15 PM",
    amount: "4500",
    isCredit: false,
    timestamp: Date.now() - 60 * 60 * 1000,
    location: "Big Bazaar, Koramangala, Bangalore"
  },
  {
    id: "3",
    name: "Starbucks",
    date: "Today, 5:45 PM",
    amount: "750",
    isCredit: false,
    timestamp: Date.now() - 90 * 60 * 1000,
    location: "Starbucks, Indiranagar, Bangalore"
  },
  {
    id: "4",
    name: "Zomato",
    date: "Today, 2:30 PM",
    amount: "850",
    isCredit: false,
    timestamp: Date.now() - 120 * 60 * 1000,
    location: "Zomato Delivery, Whitefield, Bangalore"
  },
  {
    id: "5",
    name: "Reliance Fresh",
    date: "Today, 1:15 PM",
    amount: "3200",
    isCredit: false,
    timestamp: Date.now() - 150 * 60 * 1000,
    location: "Reliance Fresh, HSR Layout, Bangalore"
  },
  {
    id: "6",
    name: "Swiggy",
    date: "Today, 12:00 PM",
    amount: "650",
    isCredit: false,
    timestamp: Date.now() - 180 * 60 * 1000,
    location: "Swiggy Delivery, Marathahalli, Bangalore"
  },
  {
    id: "7",
    name: "McDonald's",
    date: "Today, 11:30 AM",
    amount: "450",
    isCredit: false,
    timestamp: Date.now() - 210 * 60 * 1000,
    location: "McDonald's, Bellandur, Bangalore"
  },
  {
    id: "8",
    name: "DMart",
    date: "Today, 10:00 AM",
    amount: "2800",
    isCredit: false,
    timestamp: Date.now() - 240 * 60 * 1000,
    location: "DMart, Electronic City, Bangalore"
  }
];

const RecentTransactions = () => {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  
  return (
    <div className="p-4 bg-white mt-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-paytm-darkBlue">Recent Transactions</h2>
        <div 
          className="flex items-center text-paytm-blue text-sm cursor-pointer"
          onClick={() => setShowTransactionHistory(!showTransactionHistory)}
        >
          <span>View All</span>
          <ChevronRight size={16} />
        </div>
      </div>
      
      {transactions.map(transaction => (
        <Transaction 
          key={transaction.id}
          id={transaction.id}
          name={transaction.name}
          date={transaction.date}
          amount={transaction.amount}
          isCredit={transaction.isCredit}
          timestamp={transaction.timestamp}
          isTrustedMerchant={transaction.isTrustedMerchant}
          location={transaction.location}
        />
      ))}
      
      {showTransactionHistory && (
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
            >
              View Transaction History & Analytics
            </Button>
          </SheetTrigger>
          <TransactionHistorySheet />
        </Sheet>
      )}
    </div>
  );
};

const TransactionHistorySheet = () => {
  // Combine the original transactions with additional ones
  const allTransactions = [...transactions, ...additionalTransactions];
  
  return (
    <SheetContent className="w-full max-w-md overflow-y-auto">
      <SheetHeader className="text-center mb-4">
        <SheetTitle className="text-xl text-purple-700">Transaction History & Analytics</SheetTitle>
      </SheetHeader>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-purple-700">Reversal History</h3>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="border-b pb-2 mb-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Transaction to Flipkart</span>
              <span className="text-sm text-green-600">Refunded</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1,250.00</span>
              <span>Apr 15, 2025</span>
            </div>
          </div>
          
          <div className="border-b pb-2 mb-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Transaction to Amazon</span>
              <span className="text-sm text-red-600">Rejected</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹899.00</span>
              <span>Apr 10, 2025</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Transaction to Mobile Recharge</span>
              <span className="text-sm text-amber-600">Pending</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹199.00</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-3 text-purple-700">Reversal Limits & Statistics</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Weekly Quota Used</span>
              <span>2/3</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Fraud Risk Score</span>
              <span className="text-green-600">Low</span>
            </div>
            <Progress value={20} className="h-2 bg-gray-200 [&>div]:bg-green-500" />
          </div>
          
          <div className="pt-2 border-t border-purple-100">
            <div className="flex justify-between text-sm">
              <span>Successful Reversals</span>
              <span>4/5 (80%)</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm">
              <span>Typical Response Time</span>
              <span>2.5 hours</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="font-medium mb-2 text-purple-700">All Transactions</h3>
      <div className="space-y-2">
        {allTransactions.map(transaction => (
          <div key={transaction.id} className="p-3 border rounded-lg">
            <div className="flex justify-between">
              <span className="font-medium">{transaction.name}</span>
              <span className={transaction.isCredit ? "text-green-600" : "text-red-600"}>
                {transaction.isCredit ? '+' : '-'} ₹{transaction.amount}
              </span>
            </div>
            <div className="text-xs text-gray-500">{transaction.date}</div>
          </div>
        ))}
      </div>
    </SheetContent>
  );
};

export default RecentTransactions;
