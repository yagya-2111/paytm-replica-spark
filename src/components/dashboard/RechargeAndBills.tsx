import React from 'react';

interface ServiceItemProps {
  icon: React.ReactNode;
  label: string;
  bgColor?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, label, bgColor = 'bg-paytm-lightBlue' }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-xs text-paytm-darkGray font-medium">{label}</span>
    </div>
  );
};

const RechargeAndBills = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-bold text-paytm-darkBlue mb-4">Recharge & Pay Bills</h2>
      
      {/* First Row of Service Items */}
      <div className="grid grid-cols-4 gap-4">
        <ServiceItem
          label="Mobile"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18H12.01" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="Electricity"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="DTH"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16L22 16" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 16V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V16" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3L17 8L12 13L7 8L12 3Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="Broadband"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.34315 17.6569C7.84344 19.1571 9.87827 20.0001 12 20.0001C14.1217 20.0001 16.1566 19.1571 17.6569 17.6569" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.51472 14.8284C5.64297 16.9567 8.54343 18.1213 11.5607 18.1213C14.5779 18.1213 17.4784 16.9567 19.6066 14.8284" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.29297 12C3.8577 14.565 7.45262 15.9998 11.1982 15.9998C14.9437 15.9998 18.5386 14.565 21.1034 12" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9H12.01" stroke="#00BAF2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>

      {/* Second Row of Service Items */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <ServiceItem
          label="Water"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.69L17.66 8.35C18.7793 9.46961 19.4836 10.9482 19.6636 12.5268C19.8436 14.1054 19.4894 15.7003 18.6641 17.0478C17.8388 18.3953 16.5934 19.4161 15.1201 19.9586C13.6468 20.5011 12.0316 20.5356 10.5348 20.0566C9.03799 19.5776 7.75472 18.6122 6.87956 17.2985C6.0044 15.9849 5.58653 14.4039 5.69897 12.8244C5.81141 11.2449 6.45016 9.75351 7.5 8.61L12 2.69Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="Gas"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 19.5H19.5" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 19.5V7.5C5.5 6.39543 6.39543 5.5 7.5 5.5H16.5C17.6046 5.5 18.5 6.39543 18.5 7.5V19.5" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 5.5V3.5C8 2.94772 8.44772 2.5 9 2.5H15C15.5523 2.5 16 2.94772 16 3.5V5.5" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 19.5V15C8.5 14.4477 8.94772 14 9.5 14H14.5C15.0523 14 15.5 14.4477 15.5 15V19.5" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="Credit Card"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 10H23" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        <ServiceItem
          label="All Services"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default RechargeAndBills;
