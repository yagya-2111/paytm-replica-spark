import React from 'react';
import { ChevronRight } from 'lucide-react';

// Simple balance card UI – shows Paytm Wallet info
const BalanceCard = () => {
  return (
    <div className="bg-paytm-darkBlue text-white p-4 rounded-md">
      {/* Top: Wallet icon + label + View Statement */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            {/* Basic wallet SVG icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 10H23" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm">Paytm Wallet</span>
        </div>

        <div className="flex items-center text-xs">
          <span className="mr-1">View Statement</span>
          <ChevronRight size={14} />
        </div>
      </div>
      
      {/* Middle: Balance display */}
      <div className="my-4">
        <div className="text-xs opacity-80">Balance</div>
        <div className="flex items-center">
          <span className="text-xl font-semibold mr-2">₹2,432.25</span>
          <div className="bg-green-500/20 text-green-400 text-xs rounded-full px-2 py-0.5">
            Active
          </div>
        </div>
      </div>

      {/* Bottom: Action buttons */}
      <div className="flex gap-3">
        <button className="bg-paytm-blue py-2 px-3 rounded-full text-xs font-medium flex-1">
          Add Money
        </button>
        <button className="border border-white/30 py-2 px-3 rounded-full text-xs font-medium flex-1">
          Passbook
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
