
import React from 'react';
import { User, Shield, Key, Bell, CreditCard, ChevronRight } from 'lucide-react';

const AdminProfile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-sidebar rounded-[40px] p-12 text-white flex items-center gap-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-32 h-32 bg-white/10 rounded-[40px] flex items-center justify-center font-black text-4xl border border-white/20">SA</div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black mb-2">System Admin</h1>
          <p className="text-white/60 font-bold text-lg">admin@skillmatch.com • Enterprise Access</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: User, label: 'Profile Settings', desc: 'Name, email, and preferences' },
          { icon: Shield, label: 'Security', desc: '2FA, activity logs, and sessions' },
          { icon: Key, label: 'Password', desc: 'Last changed 3 months ago' },
          { icon: Bell, label: 'Notifications', desc: 'Daily digests and alerts' },
          { icon: CreditCard, label: 'Billing', desc: 'Current plan: Enterprise' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm font-medium text-gray-500">{item.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProfile;
