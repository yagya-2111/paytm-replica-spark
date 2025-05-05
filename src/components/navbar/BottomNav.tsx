import React from 'react';
import { Home, Tag, CreditCard, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center text-paytm-blue">
          <Home size={20} strokeWidth={2} />
          <span className="text-xs mt-1 font-medium">Home</span>
        </Link>

        <div className="flex flex-col items-center text-paytm-darkGray">
          <Tag size={20} strokeWidth={2} />
          <span className="text-xs mt-1">Cashback</span>
        </div>

        <div className="flex flex-col items-center text-paytm-darkGray">
          <CreditCard size={20} strokeWidth={2} />
          <span className="text-xs mt-1">Banking</span>
        </div>

        <Link to="/features" className="flex flex-col items-center text-paytm-darkGray">
          <Settings size={20} strokeWidth={2} />
          <span className="text-xs mt-1">Features</span>
        </Link>

        <div className="flex flex-col items-center text-paytm-darkGray">
          <User size={20} strokeWidth={2} />
          <span className="text-xs mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
