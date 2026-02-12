
import React from 'react';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  TrendingUp, 
  Search,
  ChevronRight,
  Filter,
  MoreVertical,
  Check,
  X
} from 'lucide-react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';
import StatCard from '../shared/StatCard';

const jobDemandData = [
  { skill: 'React', demand: 145 },
  { skill: 'Python', demand: 130 },
  { skill: 'AWS', demand: 98 },
  { skill: 'Node.js', demand: 86 },
  { skill: 'Docker', demand: 75 },
  { skill: 'TypeScript', demand: 65 },
];

const qualityData = [
  { range: '90-100', value: 7, color: '#4C3BCF' },
  { range: '80-89', value: 19, color: '#10B981' },
  { range: '70-79', value: 31, color: '#6366F1' },
  { range: '60-69', value: 24, color: '#F59E0B' },
  { range: '50-59', value: 13, color: '#F97316' },
  { range: 'Below 50', value: 6, color: '#EF4444' },
];

const missingSkillsData = [
  { name: 'Docker', count: 460 },
  { name: 'AWS', count: 395 },
  { name: 'Kubernetes', count: 340 },
  { name: 'GraphQL', count: 285 },
  { name: 'CI/CD', count: 220 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-500 font-medium text-lg">System-wide overview of jobs, candidates, and market trends</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-600 shadow-sm hover:border-primary transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="px-8 py-3 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            Post New Job
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Jobs Posted" 
          value="156" 
          change="+15%" 
          icon={<Briefcase className="w-6 h-6 text-primary" />} 
          iconBg="bg-primary/5"
        />
        <StatCard 
          label="Resumes Analyzed" 
          value="1243" 
          change="+23%" 
          icon={<Users className="w-6 h-6 text-emerald-500" />} 
          iconBg="bg-emerald-50"
        />
        <StatCard 
          label="Average Match Score" 
          value="68%" 
          change="+4%" 
          icon={<TrendingUp className="w-6 h-6 text-indigo-500" />} 
          iconBg="bg-indigo-50"
        />
        <StatCard 
          label="Active Students" 
          value="892" 
          change="+18%" 
          icon={<UserCheck className="w-6 h-6 text-amber-500" />} 
          iconBg="bg-amber-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Job Demand Chart */}
        <div className="lg:col-span-7 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
          <h3 className="text-xl font-black text-gray-900 mb-8">Job Demand by Skill</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={jobDemandData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis 
                  dataKey="skill" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fontWeight: 700, fill: '#94a3b8'}} 
                />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#94a3b8'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc', radius: 10}}
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="demand" 
                  fill="#4C3BCF" 
                  radius={[12, 12, 0, 0]} 
                  barSize={60}
                >
                  {jobDemandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#4C3BCF' : index === 1 ? '#10B981' : index === 2 ? '#6366F1' : '#F59E0B'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quality Distribution Pie */}
        <div className="lg:col-span-5 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-black text-gray-900 mb-8">Resume Quality Distribution</h3>
          <div className="flex-1 min-h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={qualityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {qualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-black text-gray-900 block">Avg</span>
              <span className="text-lg font-bold text-gray-400">72%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {qualityData.slice(0, 4).map(item => (
              <div key={item.range} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{item.range}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Bar: Missing Skills */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
        <h3 className="text-xl font-black text-gray-900 mb-8">Most Common Missing Skills</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={missingSkillsData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                tick={{fontSize: 12, fontWeight: 700, fill: '#64748b'}}
                width={100}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="count" fill="#EF4444" radius={[0, 10, 10, 0]} barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Applications Table */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-black text-gray-900">Recent Candidate Applications</h3>
          <button className="text-sm font-black text-primary flex items-center gap-1 hover:gap-2 transition-all">
            View Full Pool <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Candidate</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Job Position</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Match %</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Michael Chen', role: 'Full Stack Engineer', score: 94, status: 'Shortlisted', university: 'MIT' },
                { name: 'Sarah Miller', role: 'Senior Frontend Dev', score: 88, status: 'Pending', university: 'Stanford' },
                { name: 'David Wilson', role: 'Data Analyst', score: 72, status: 'Reviewed', university: 'UC Berkeley' },
                { name: 'Jessica Lee', role: 'DevOps Engineer', score: 91, status: 'Shortlisted', university: 'Georgia Tech' },
                { name: 'Kevin Park', role: 'Backend Developer', score: 65, status: 'Rejected', university: 'UT Austin' },
              ].map((app, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center font-black text-primary">
                        {app.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{app.name}</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{app.university}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-700">{app.role}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${app.score >= 90 ? 'bg-emerald-500' : 'bg-primary'}`} style={{width: `${app.score}%`}}></div>
                      </div>
                      <span className="font-black text-gray-900">{app.score}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      app.status === 'Shortlisted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      app.status === 'Pending' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      app.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' :
                      'bg-gray-50 text-gray-600 border-gray-100'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-all"><Check className="w-4 h-4" /></button>
                      <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all"><X className="w-4 h-4" /></button>
                      <button className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-200 transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
