
import React, { useState } from 'react';
import { Network, Filter, Search, ChevronRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { JOBS, MATCHES } from '../../data/mockData';

const JobMatching: React.FC = () => {
  const [minMatch, setMinMatch] = useState(60);

  const matchedJobs = JOBS.map(job => {
    const match = MATCHES.find(m => m.jobId === job.id);
    return { ...job, match };
  })
  .filter(j => (j.match?.matchScore || 0) >= minMatch)
  .sort((a, b) => (b.match?.matchScore || 0) - (a.match?.matchScore || 0));

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Smart Job Matching</h1>
          <p className="text-gray-500 font-medium text-lg">Detailed analysis of how your skills align with top industry roles</p>
        </div>
        <div className="bg-white px-8 py-6 rounded-3xl border border-gray-100 shadow-sm min-w-[300px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Min Match Score</span>
            <span className="px-3 py-1 bg-primary/10 text-primary font-black rounded-lg">{minMatch}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={minMatch} 
            onChange={(e) => setMinMatch(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Global Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-8">Overall Alignment</h3>
            <div className="h-64 relative mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Matched', value: 75, color: '#10B981' },
                      { name: 'Missing', value: 25, color: '#F59E0B' },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    <Cell fill="#10B981" />
                    <Cell fill="#F59E0B" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-gray-900">75%</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Average Match</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Top Match</p>
                <p className="text-xl font-black text-emerald-700">95%</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-2xl">
                <p className="text-xs font-bold text-indigo-600 uppercase mb-1">Jobs Found</p>
                <p className="text-xl font-black text-indigo-700">{matchedJobs.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Improve Your Match</h3>
              <p className="opacity-80 text-sm leading-relaxed mb-6 font-medium">
                Learning just 2 skills (Docker & AWS) could increase your visibility for 65% more jobs in your area.
              </p>
              <button className="w-full py-3 bg-white text-primary rounded-xl font-black hover:bg-gray-100 transition-colors">
                Explore Learning Paths
              </button>
            </div>
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Right: Detailed Match List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="text-xl font-black text-gray-900">Top Matched Jobs</h3>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
              Sort by: <span className="text-primary">Best Match</span>
            </div>
          </div>

          {matchedJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden hover:border-primary/30 transition-all animate-in fade-in duration-500">
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Network className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 mb-1">{job.title}</h4>
                      <p className="font-bold text-gray-500">{job.company} • {job.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-primary">{job.match?.matchScore}%</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Match Score</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gray-50/50 rounded-3xl border border-gray-100">
                  {/* Matched Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Matched Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.match?.matchedSkills.map(s => (
                        <span key={s} className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg uppercase">{s}</span>
                      )) || <span className="text-xs text-gray-400 italic">None</span>}
                    </div>
                  </div>

                  {/* Partial Match */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Partial Match</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg uppercase">System Design</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg uppercase">API Docs</span>
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Missing Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.match?.missingSkills.map(s => (
                        <span key={s} className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black rounded-lg uppercase">{s}</span>
                      )) || <span className="text-xs text-gray-400 italic">None</span>}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${job.match?.experienceMatch ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs font-bold text-gray-600">Experience Match</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${job.match?.educationMatch ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs font-bold text-gray-600">Education Match</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    Apply Now <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMatching;
