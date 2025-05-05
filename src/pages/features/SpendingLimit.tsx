import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap } from 'lucide-react';

const SpendingLimit: React.FC = () => {
  const [dailyLimit, setDailyLimit] = useState<number>(1000);
  const [currentSpending, setCurrentSpending] = useState<number>(900);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDailyLimit(Number(e.target.value));
  };

  const progressPercentage = (currentSpending / dailyLimit) * 100;
  const isWarning = progressPercentage >= 80;

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-neutral-50">
      <div className="bg-white border border-neutral-200 shadow-lg rounded-2xl p-8 max-w-md w-full transition-all duration-300">
        <CardHeader className="flex flex-row items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center bg-neutral-100 text-neutral-700 rounded-full p-3 shadow">
            <ShieldCheck className="w-7 h-7" />
          </span>
          <CardTitle className="text-xl font-bold text-neutral-800 tracking-tight">
            Spending Limit Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="dailyLimit" className="text-base font-medium text-neutral-700 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              Set your daily limit:
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-blue-700">₹</span>
              <Input
                id="dailyLimit"
                type="number"
                value={dailyLimit}
                onChange={handleLimitChange}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-blue-400 rounded-lg px-4 py-2 text-base font-medium shadow-sm transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-neutral-700">Current Spending</span>
              <span className="text-blue-800">₹{currentSpending} / <span className="font-bold text-neutral-800">₹{dailyLimit}</span></span>
            </div>
            <div className="relative h-3 rounded-full overflow-hidden bg-neutral-200">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${isWarning ? 'bg-yellow-400' : 'bg-blue-500'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            {isWarning && (
              <p className="text-yellow-700 text-xs font-semibold flex items-center gap-1 mt-1">
                ⚠️ You've used ₹{currentSpending} of your ₹{dailyLimit} daily limit.
              </p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            {[1000, 5000, 10000].map((amt) => (
              <Button
                key={amt}
                variant="outline"
                className="rounded-lg font-semibold border border-neutral-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm"
                onClick={() => setDailyLimit(amt)}
              >
                ₹{amt}
              </Button>
            ))}
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default SpendingLimit; 