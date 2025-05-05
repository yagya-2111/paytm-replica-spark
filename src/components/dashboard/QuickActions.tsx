import React from 'react';

// Define the type for props in ActionItem component
interface ActionItemProps {
  icon: React.ReactNode; // Icon for the action item
  label: string; // Label for the action item
  bgColor?: string; // Optional background color
}

// ActionItem component: A single action item with an icon and label
const ActionItem: React.FC<ActionItemProps> = ({ icon, label, bgColor = 'bg-paytm-lightBlue' }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-xs text-paytm-darkGray font-medium">{label}</span>
    </div>
  );
};

// QuickActions component: Displays multiple action items for money transfers
const QuickActions = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-paytm-darkBlue mb-4">Money Transfers</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* ActionItem for mobile transfers */}
        <ActionItem
          label="To Mobile"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18H12.01" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        {/* ActionItem for bank transfers */}
        <ActionItem
          label="To Bank"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        {/* ActionItem for UPI transfers */}
        <ActionItem
          label="To UPI"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 7H20" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 17H20" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H8" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 12H20" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        {/* ActionItem for checking balance */}
        <ActionItem
          label="Check Balance"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1V23" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#00BAF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default QuickActions;
