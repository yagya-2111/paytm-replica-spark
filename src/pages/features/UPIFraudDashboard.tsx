import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldAlert, TrendingUp, MapPin, Filter } from 'lucide-react';

const mockReversalData = [
  { category: "Wrong UPI ID", count: 45 },
  { category: "Scam", count: 30 },
  { category: "Duplicate Payment", count: 25 },
  { category: "Technical Error", count: 20 },
];

const mockRiskData = [
  { location: "MG Road", riskLevel: 0.8 },
  { location: "Koramangala", riskLevel: 0.6 },
  { location: "Indiranagar", riskLevel: 0.4 },
  { location: "Whitefield", riskLevel: 0.7 },
];

const UPIFraudDashboard: React.FC = () => {
  return (
    <div className="space-y-8 px-2 md:px-0 bg-neutral-50 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPI Cards */}
        <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6 flex flex-col items-center">
          <ShieldAlert className="w-8 h-8 text-blue-500 mb-2" />
          <CardTitle className="text-base font-semibold text-neutral-800">Reversal Rejection Rate</CardTitle>
          <p className="text-3xl font-extrabold text-blue-700 mt-2 mb-1">2%</p>
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">Low Risk</span>
        </div>
        <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6 flex flex-col items-center">
          <TrendingUp className="w-8 h-8 text-neutral-600 mb-2" />
          <CardTitle className="text-base font-semibold text-neutral-800">Total Reversal Requests</CardTitle>
          <p className="text-3xl font-extrabold text-neutral-800 mt-2 mb-1">120</p>
          <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Last 30 days</span>
        </div>
        <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6 flex flex-col items-center">
          <MapPin className="w-8 h-8 text-red-400 mb-2" />
          <CardTitle className="text-base font-semibold text-neutral-800">High Risk Areas</CardTitle>
          <p className="text-3xl font-extrabold text-red-500 mt-2 mb-1">4</p>
          <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-1 rounded">Requiring Attention</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart Card */}
        <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6">
          <CardHeader className="flex flex-row items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-lg font-bold text-neutral-800">Reversal Requests by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockReversalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" tick={{ fontWeight: 600, fill: '#334155' }} />
                  <YAxis tick={{ fontWeight: 600, fill: '#334155' }} />
                  <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', borderRadius: 12, boxShadow: '0 2px 8px #33415522' }} />
                  <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>
        {/* Risk Level Card */}
        <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6">
          <CardHeader className="flex flex-row items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-red-400" />
            <CardTitle className="text-lg font-bold text-neutral-800">Risk Level by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockRiskData.map((item) => (
                <div key={item.location} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-700 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-400" />
                      {item.location}
                    </span>
                    <span className="text-sm text-neutral-500 font-bold">
                      {Math.round(item.riskLevel * 100)}% Risk
                    </span>
                  </div>
                  <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-400 transition-all duration-500"
                      style={{ width: `${item.riskLevel * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-6">
        <CardHeader className="flex flex-row items-center gap-2 mb-4">
          <Filter className="w-6 h-6 text-neutral-500" />
          <CardTitle className="text-lg font-bold text-neutral-800">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-semibold text-neutral-700 mb-1 block">Date Range</label>
              <Input type="date" className="mt-1 rounded border border-neutral-200 focus:border-blue-400 px-4 py-2 bg-neutral-50 shadow-sm" />
            </div>
            <div>
              <label className="text-sm font-semibold text-neutral-700 mb-1 block">User</label>
              <Select>
                <SelectTrigger className="rounded border border-neutral-200 focus:border-blue-400 px-4 py-2 bg-neutral-50 shadow-sm">
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="user1">User 1</SelectItem>
                  <SelectItem value="user2">User 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-semibold text-neutral-700 mb-1 block">Reason</label>
              <Select>
                <SelectTrigger className="rounded border border-neutral-200 focus:border-blue-400 px-4 py-2 bg-neutral-50 shadow-sm">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reasons</SelectItem>
                  <SelectItem value="wrong_upi">Wrong UPI ID</SelectItem>
                  <SelectItem value="scam">Scam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default UPIFraudDashboard; 