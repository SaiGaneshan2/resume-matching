
import React from 'react';
import { 
  Briefcase, 
  Target, 
  Trophy, 
  AlertCircle, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import StatCard from '../shared/StatCard';
import { useAuth } from '../../context/AuthContext';
import { MATCHES, JOBS } from '../../data/mockData';

const skillMatchData = [
  { name: 'Matched', value: 75, color: '#10B981' },
  { name: 'Missing', value: 25, color: '#F59E0B' },
];

const jobRoleData = [
  { role: 'Frontend Dev', score: 95, color: '#10B981' },
  { role: 'Full Stack', score: 80, color: '#4C3BCF' },
  { role: 'Backend Dev', score: 75, color: '#6366F1' },
  { role: 'DevOps', score: 60, color: '#F59E0B' },
  { role: 'Data Analyst', score: 65, color: '#F97316' },
];

const growthData = [
  { month: 'Jan', skills: 2 },
  { month: 'Feb', skills: 4 },
  { month: 'Mar', skills: 5 },
  { month: 'Apr', skills: 7 },
  { month: 'May', skills: 9 },
  { month: 'Jun', skills: 12 },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-primary rounded-3xl p-10 text-white shadow-xl">
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <p className="text-primary-100 font-medium mb-2 opacity-90">Good evening</p>
            <h1 className="text-4xl font-bold mb-3">Hello, {firstName}</h1>
            <p className="text-lg opacity-80">You have 8 new job matches today. Your skills are in demand!</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
            <p className="text-sm font-medium mb-1 uppercase tracking-wider opacity-70">Resume Score</p>
            <div className="text-4xl font-black">78%</div>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Jobs Available" 
          value="156" 
          change="+12%" 
          icon={<Briefcase className="w-6 h-6 text-primary" />} 
          iconBg="bg-primary/10"
        />
        <StatCard 
          label="Jobs Matched" 
          value="42" 
          change="+8%" 
          icon={<Target className="w-6 h-6 text-emerald-500" />} 
          iconBg="bg-emerald-50"
        />
        <StatCard 
          label="Average Match Score" 
          value="74%" 
          change="+5%" 
          icon={<Trophy className="w-6 h-6 text-indigo-500" />} 
          iconBg="bg-indigo-50"
        />
        <StatCard 
          label="Missing Skills" 
          value="8" 
          change="-2" 
          isPositive={false}
          icon={<AlertCircle className="w-6 h-6 text-amber-500" />} 
          iconBg="bg-amber-50"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Match Overview */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Skill Match Overview</h3>
          <div className="flex-1 min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillMatchData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {skillMatchData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold block">75%</span>
              <span className="text-xs text-gray-500 font-medium">Match Rate</span>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-gray-600">Matched</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-sm font-medium text-gray-600">Missing</span>
            </div>
          </div>
        </div>

        {/* Match Score by Job Role */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Match Score by Job Role</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={jobRoleData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="role" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  width={100}
                  tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b' }}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="score" 
                  radius={[0, 4, 4, 0]} 
                  barSize={20}
                >
                  {jobRoleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-gray-900">Skill Growth Over Time</h3>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Last 6 Months</span>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4C3BCF" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4C3BCF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                />
                <YAxis hide />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="skills" 
                  stroke="#4C3BCF" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorGrowth)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Your Skills</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-widest">Matched Skills</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-widest">Skills to Learn</p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Jobs Preview */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900">Top Matched Jobs</h3>
          <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {JOBS.slice(0, 3).map((job, idx) => {
            const match = MATCHES.find(m => m.jobId === job.id);
            return (
              <div key={job.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100 group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                    <Briefcase className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{job.company} • {job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="hidden md:flex flex-wrap gap-2 max-w-[300px] justify-end">
                    {job.requiredSkills.slice(0, 3).map(skill => (
                      <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-black ${
                      (match?.matchScore || 0) >= 90 ? 'text-emerald-500' : 
                      (match?.matchScore || 0) >= 70 ? 'text-blue-500' : 'text-amber-500'
                    }`}>
                      {match?.matchScore}%
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Match</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
