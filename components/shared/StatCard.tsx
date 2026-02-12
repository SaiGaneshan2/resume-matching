
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, change, isPositive = true, icon, iconBg }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 text-emerald-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-xs font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
            {change}
          </span>
          <span className="text-xs text-gray-400">vs last month</span>
        </div>
      </div>
      <div className={`p-3 rounded-xl ${iconBg}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
