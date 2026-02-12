
import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  ChevronDown, 
  LayoutGrid, 
  List as ListIcon,
  Filter,
  CheckCircle2,
  // Added Briefcase to imports
  Briefcase
} from 'lucide-react';
import { JOBS, MATCHES } from '../../data/mockData';

const JobListings: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-black text-gray-900">Find Your Next Role</h1>
          <div className="relative group max-w-2xl">
            <Search className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search jobs by title, company, or skills..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-lg font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 flex">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-primary'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-primary'}`}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-600 shadow-sm hover:border-primary hover:text-primary transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Sorting / Quick Filter */}
      <div className="flex flex-wrap items-center gap-3">
        {['All Jobs', 'Remote', 'Full-time', 'Contract', 'Internship'].map(tag => (
          <button key={tag} className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:border-primary hover:text-primary transition-all shadow-sm">
            {tag}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
        {filteredJobs.map((job) => {
          const match = MATCHES.find(m => m.jobId === job.id);
          const score = match?.matchScore || 0;
          
          const scoreColor = score >= 90 ? 'bg-emerald-500' : score >= 70 ? 'bg-blue-500' : 'bg-amber-500';
          const scoreText = score >= 90 ? 'text-emerald-500' : score >= 70 ? 'text-blue-500' : 'text-amber-500';

          return (
            <div key={job.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
              <div className="p-8 flex-1 space-y-6">
                {/* Job Header */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-primary/20 transition-all">
                    <Briefcase className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className={`px-4 py-2 rounded-xl bg-gray-50 flex items-center gap-2 border border-gray-100`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${scoreColor} animate-pulse`}></div>
                    <span className={`text-sm font-black ${scoreText}`}>{score}% Match</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors mb-2">{job.title}</h3>
                  <p className="text-gray-500 font-bold flex items-center gap-2">
                    {job.company}
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="font-medium">{job.location}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <Clock className="w-3 h-3" /> {job.experience}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <DollarSign className="w-3 h-3" /> {job.salary}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.requiredSkills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg border border-primary/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Posted 2 days ago</span>
                <button className="px-6 py-2.5 bg-primary text-white text-sm font-black rounded-xl hover:bg-sidebar shadow-lg shadow-primary/20 transition-all">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobListings;