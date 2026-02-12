
import React from 'react';
import { 
  Send, 
  Calendar, 
  Eye, 
  Award,
  ChevronRight,
  Briefcase,
  UserCheck
} from 'lucide-react';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';

const applicationStatusData = [
  { name: 'Pending', value: 12, color: '#6366F1' },
  { name: 'Shortlisted', value: 7, color: '#10B981' },
  { name: 'Rejected', value: 3, color: '#EF4444' },
  { name: 'Interview', value: 2, color: '#F59E0B' },
];

const trendData = [
  { month: 'Jan', count: 4 },
  { month: 'Feb', count: 8 },
  { month: 'Mar', count: 12 },
  { month: 'Apr', count: 18 },
  { month: 'May', count: 15 },
  { month: 'Jun', count: 24 },
];

const skillDemandData = [
  { subject: 'React', demand: 95, yours: 95 },
  { subject: 'Node.js', demand: 85, yours: 80 },
  { subject: 'AWS', demand: 80, yours: 40 },
  { subject: 'Python', demand: 70, yours: 85 },
  { subject: 'SQL', demand: 75, yours: 82 },
  { subject: 'Docker', demand: 90, yours: 30 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Your Career Analytics</h1>
        <p className="text-gray-500 font-medium text-lg">Detailed visualization of your job search progress and skill metrics</p>
      </header>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Applications Sent', value: '24', icon: Send, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Interview Invites', value: '7', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Profile Views', value: '156', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Skill Endorsements', value: '42', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center gap-6">
            <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Charts */}
        <div className="lg:col-span-8 space-y-8">
          {/* Trend Line */}
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-8">Monthly Application Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#94a3b8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line type="monotone" dataKey="count" stroke="#4C3BCF" strokeWidth={5} dot={{ r: 6, fill: '#4C3BCF', strokeWidth: 4, stroke: '#fff' }} activeDot={{ r: 10 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Status Pie */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col items-center">
              <h3 className="text-xl font-black text-gray-900 mb-8 self-start">Application Status</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={applicationStatusData} innerRadius={60} outerRadius={90} paddingAngle={10} dataKey="value">
                      {applicationStatusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                {applicationStatusData.map(item => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Radar */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-8">Skill Demand vs Yours</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillDemandData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
                    <Radar name="Market Demand" dataKey="demand" stroke="#CBD5E1" fill="#CBD5E1" fillOpacity={0.3} />
                    <Radar name="Your Profile" dataKey="yours" stroke="#4C3BCF" fill="#4C3BCF" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase">Market</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase">You</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="lg:col-span-4 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-black text-gray-900 mb-8">Recent Activity</h3>
          <div className="space-y-8 flex-1">
            {[
              { type: 'application', text: 'Applied to Senior Frontend Developer at TechCorp', date: '2 days ago', icon: Briefcase, color: 'bg-indigo-50 text-indigo-600' },
              { type: 'view', text: 'Your profile was viewed by StartupXYZ recruiter', date: '3 days ago', icon: Eye, color: 'bg-blue-50 text-blue-600' },
              { type: 'certification', text: 'Earned AWS Certified Developer Associate', date: '1 week ago', icon: Award, color: 'bg-amber-50 text-amber-600' },
              { type: 'application', text: 'Applied to Backend Engineer at DataFlow', date: '10 days ago', icon: Briefcase, color: 'bg-indigo-50 text-indigo-600' },
              { type: 'profile', text: 'Updated your technical skills section', date: '2 weeks ago', icon: UserCheck, color: 'bg-emerald-50 text-emerald-600' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== 4 && <div className="absolute left-6 top-14 bottom-0 w-px bg-gray-100 -mb-8"></div>}
                <div className={`w-12 h-12 shrink-0 ${activity.color} rounded-2xl flex items-center justify-center z-10 shadow-sm border border-white`}>
                  <activity.icon className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <p className="text-sm font-bold text-gray-800 leading-tight mb-1">{activity.text}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-4 bg-gray-50 text-gray-600 rounded-[20px] font-black hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            View Full Log <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
