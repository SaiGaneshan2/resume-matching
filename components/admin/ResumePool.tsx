
import React, { useState } from 'react';
import { Search, Filter, MoreVertical, ExternalLink, Download, Check, X, Users, MapPin, GraduationCap } from 'lucide-react';

const ResumePool: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Resume Pool</h1>
          <p className="text-gray-500 font-medium text-lg">Search and filter through all analyzed candidate profiles</p>
        </div>
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
          <button className="px-6 py-3 bg-primary text-white font-black rounded-xl">All Candidates</button>
          <button className="px-6 py-3 text-gray-400 font-bold hover:text-primary transition-colors">Shortlisted</button>
        </div>
      </header>

      <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, skills, or university..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-[20px] focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold"
            />
          </div>
          <button className="px-8 py-4 bg-gray-50 text-gray-600 rounded-[20px] font-black hover:bg-gray-100 transition-all flex items-center gap-2">
            <Filter className="w-5 h-5" /> More Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Alex Johnson', university: 'Stanford University', skills: ['React', 'TS', 'Python'], score: 92, exp: 'Intern' },
            { name: 'Sarah Connor', university: 'MIT', skills: ['C++', 'Rust', 'DevOps'], score: 95, exp: '3 Years' },
            { name: 'John Wick', university: 'Harvard', skills: ['Security', 'Cloud', 'Java'], score: 84, exp: '10 Years' },
            { name: 'Bruce Wayne', university: 'Gotham Tech', skills: ['AI', 'Robotics', 'Ethical Hacking'], score: 91, exp: '5 Years' },
            { name: 'Diana Prince', university: 'Themiscyra College', skills: ['Strategy', 'Leadership', 'Management'], score: 76, exp: '8 Years' },
            { name: 'Barry Allen', university: 'Central City Uni', skills: ['FastAPI', 'Node.js', 'Go'], score: 88, exp: '1 Year' },
          ].map((candidate, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] flex items-center justify-center transition-colors group-hover:bg-primary/10">
                <span className="font-black text-primary text-xl translate-x-1 -translate-y-1">{candidate.score}%</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/${candidate.name}/200/200`} alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">{candidate.name}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" /> {candidate.university}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-bold text-gray-600">San Francisco, CA</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-1 py-3 bg-primary text-white font-black rounded-xl hover:bg-sidebar transition-all flex items-center justify-center gap-2">
                  View Profile <ExternalLink className="w-4 h-4" />
                </button>
                <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-emerald-50 hover:text-emerald-500 transition-all">
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePool;
