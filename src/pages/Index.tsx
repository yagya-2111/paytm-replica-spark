<<<<<<< HEAD

import React from 'react';
import NavBar from '@/components/navbar/NavBar';
import BottomNav from '@/components/navbar/BottomNav';
import BalanceCard from '@/components/dashboard/BalanceCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RechargeAndBills from '@/components/dashboard/RechargeAndBills';
import PromoBanner from '@/components/dashboard/PromoBanner';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <NavBar />
      
      <div className="p-4">
        <BalanceCard />
      </div>
      
      <div className="bg-white rounded-t-lg shadow-sm">
        <QuickActions />
      </div>
      
      <div className="mt-2">
        <RechargeAndBills />
      </div>
      
      <div className="mt-2">
        <PromoBanner />
      </div>
      
      <RecentTransactions />
      
      <BottomNav />
      <Toaster />
=======
// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
    </div>
  );
};

export default Index;
