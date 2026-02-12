
import React from 'react';
import { Settings, Shield, Globe, Bell, Mail, Users, Database, Zap } from 'lucide-react';

const Configuration: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header>
        <h1 className="text-4xl font-black text-gray-900 mb-2">System Configuration</h1>
        <p className="text-gray-500 font-medium text-lg">Manage platform settings, matching algorithms, and security</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: 'Company Profile', desc: 'Brand name, logo, website and descriptions' },
          { icon: Zap, title: 'Matching Algorithm', desc: 'Adjust global weights for skills and experience' },
          { icon: Database, title: 'Skills Management', desc: 'Master list of technical and soft skills' },
          { icon: Mail, title: 'Email Templates', desc: 'Customize automatic candidate responses' },
          { icon: Users, title: 'User Permissions', desc: 'Manage recruiter access levels and roles' },
          { icon: Shield, title: 'Privacy & Security', desc: 'Data retention policies and API settings' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-primary/5 rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
              <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-black text-gray-900 mb-8">System Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Uptime', val: '99.98%' },
            { label: 'Avg Latency', val: '42ms' },
            { label: 'Processing', val: '2k/min' },
            { label: 'API Status', val: 'Stable' },
          ].map(h => (
            <div key={h.label} className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{h.label}</p>
              <p className="text-2xl font-black text-emerald-600">{h.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
