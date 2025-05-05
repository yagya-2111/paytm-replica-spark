import React from 'react';
import { ChevronRight } from 'lucide-react';

// Promo banner carousel – UPI offers section
const PromoBanner = () => {
  return (
    <div className="p-4 bg-white">
      
      {/* Header row: title + "View All" link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-paytm-darkBlue">UPI Offers & More</h2>
        <div className="flex items-center text-paytm-blue text-sm cursor-pointer">
          <span>View All</span>
          <ChevronRight size={16} />
        </div>
      </div>
      
      {/* Horizontal scroll for offer cards */}
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="flex gap-3 pb-2">

          {/* Offer Card 1: Cashback Bonanza */}
          <div className="min-w-[250px] bg-paytm-gray rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-28 bg-gradient-to-r from-paytm-blue to-blue-500 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <div className="font-bold text-lg">Cashback Bonanza</div>
                <div className="text-sm">Win up to 100% on bill payments</div>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs text-gray-500">Valid till 31 May</div>
            </div>
          </div>

          {/* Offer Card 2: 50% Off */}
          <div className="min-w-[250px] bg-paytm-gray rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-28 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <div className="font-bold text-lg">50% Off</div>
                <div className="text-sm">On movie tickets for new users</div>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs text-gray-500">Valid till 15 May</div>
            </div>
          </div>

          {/* Offer Card 3: DTH Cashback */}
          <div className="min-w-[250px] bg-paytm-gray rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-28 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <div className="font-bold text-lg">Flat ₹75 Cashback</div>
                <div className="text-sm">On DTH recharges above ₹500</div>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs text-gray-500">Valid till 30 April</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

