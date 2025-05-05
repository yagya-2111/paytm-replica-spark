import React from 'react';
import { Search } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  return (
    <div className="bg-paytm-blue w-full py-3 px-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left Side: Paytm logo and search button */}
        <div className="flex items-center space-x-4">
          <div className="font-extrabold text-2xl text-white">paytm</div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-paytm-blue/80">
            <Search size={20} />
          </Button>
        </div>
        
        {/* Right Side: Notification and Avatar */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold text-white">
              3
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-paytm-blue/80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>

          {/* User Avatar */}
          <Avatar className="h-8 w-8 bg-white text-paytm-blue">
            <span className="text-xs font-semibold">SK</span>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
