import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ApprovalUIProps {
  isOpen: boolean;
  onClose: () => void;
  transactionDetails: {
    id: string;
    senderName: string;
    amount: string;
    date: string;
    reason: string;
  };
}

const ReceiverApprovalUI: React.FC<ApprovalUIProps> = ({
  isOpen,
  onClose,
  transactionDetails
}) => {
  const [decision, setDecision] = useState<'approve' | 'reject' | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleSubmit = () => {
    setShowConfirmation(true);
  };
  
  const rejectionReasons = [
    { id: 'valid-transaction', label: 'This was a valid transaction' },
    { id: 'already-delivered', label: 'Product/service was already delivered' },
    { id: 'wrong-request', label: 'This is an incorrect request' },
    { id: 'other', label: 'Other reason' },
  ];
  
  // Confirmation View
  if (showConfirmation) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {decision === 'approve' ? 'Refund Approved' : 'Request Rejected'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            {decision === 'approve' ? (
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500 mb-4" />
            )}
            
            <p className="text-lg font-medium text-center">
              {decision === 'approve' 
                ? 'You have approved the refund request' 
                : 'You have rejected the refund request'}
            </p>
            
            <div className="mt-4 text-sm text-gray-600 text-center">
              {decision === 'approve' ? (
                <p>The amount of ₹{transactionDetails.amount} will be reversed from your account. This may take 1-2 business days to process.</p>
              ) : (
                <p>The sender has been notified that you've rejected their refund request.</p>
              )}
            </div>
          </div>
          
          <Button className="w-full mt-2" onClick={onClose}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  // Approval Decision View
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-purple-700">
            Reversal Request Received
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Alert Message */}
          <Alert className="bg-purple-50 border-purple-100">
            <AlertDescription>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <p className="text-sm text-purple-700">
                  Please review and respond within 24 hours. After that, the request may be escalated to the bank for review.
                </p>
              </div>
            </AlertDescription>
          </Alert>
          
          {/* Transaction Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Transaction Details</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">From:</span>
                <span className="font-medium">{transactionDetails.senderName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">₹{transactionDetails.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{transactionDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-medium">{transactionDetails.id}</span>
              </div>
              <div className="pt-2 border-t mt-2">
                <span className="text-gray-600">Reason for reversal:</span>
                <p className="font-medium mt-1">{transactionDetails.reason}</p>
              </div>
            </div>
          </div>
          
          {/* Decision Buttons */}
          <div>
            <h3 className="font-medium mb-3">Your Decision</h3>
            <div className="flex gap-3 mb-4">
              <Button
                variant={decision === 'approve' ? 'default' : 'outline'}
                className={`flex-1 ${decision === 'approve' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                onClick={() => setDecision('approve')}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Approve Refund
              </Button>
              <Button
                variant={decision === 'reject' ? 'default' : 'outline'}
                className={`flex-1 ${decision === 'reject' ? 'bg-red-600 hover:bg-red-700' : ''}`}
                onClick={() => setDecision('reject')}
              >
                <XCircle className="mr-2 h-4 w-4" />
                Reject Request
              </Button>
            </div>
            
            {/* Rejection Reason */}
            {decision === 'reject' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Select reason for rejection:
                </label>
                <RadioGroup value={rejectionReason} onValueChange={setRejectionReason} className="space-y-2">
                  {rejectionReasons.map((reason) => (
                    <div key={reason.id} className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value={reason.id} id={reason.id} />
                      <label htmlFor={reason.id} className="text-sm leading-none cursor-pointer">
                        {reason.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
          
          {/* Contact & Submit */}
          <div className="flex items-center justify-between pt-4">
            <Button 
              variant="outline" 
              className="flex items-center"
              onClick={() => {}}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Sender
            </Button>
            <Button 
              disabled={!decision || (decision === 'reject' && !rejectionReason)} 
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Submit Response
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiverApprovalUI;
