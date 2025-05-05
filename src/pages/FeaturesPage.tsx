import React from 'react';
import SpendingLimit from './features/SpendingLimit';
import UPIFraudDashboard from './features/UPIFraudDashboard';
import SmartBillSplit from './features/SmartBillSplit';
import RecurringPaymentReminder from './features/RecurringPaymentReminder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Paytm Features</h1>
      
      <Tabs defaultValue="spending" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="spending">Spending Limit</TabsTrigger>
          <TabsTrigger value="fraud">Fraud Dashboard</TabsTrigger>
          <TabsTrigger value="bill">Bill Split</TabsTrigger>
          <TabsTrigger value="reminder">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="spending">
          <SpendingLimit />
        </TabsContent>

        <TabsContent value="fraud">
          <UPIFraudDashboard />
        </TabsContent>

        <TabsContent value="bill">
          <SmartBillSplit />
        </TabsContent>

        <TabsContent value="reminder">
          <RecurringPaymentReminder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturesPage; 