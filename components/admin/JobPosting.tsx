
import React from 'react';
import { Plus, Save, Send, Trash2, Layout, X } from 'lucide-react';

const JobPosting: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Create New Job</h1>
          <p className="text-gray-500 font-medium text-lg">Define requirements and AI matching weights</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl shadow-sm hover:border-primary transition-all flex items-center gap-2">
            <Save className="w-5 h-5" /> Save Draft
          </button>
          <button className="px-8 py-3 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
            <Send className="w-5 h-5" /> Publish Job
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Job Title</label>
                <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-lg" placeholder="e.g. Senior Frontend Developer" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Location</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder="San Francisco, CA or Remote" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Job Type</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Job Description</label>
                <textarea rows={8} className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold resize-none" placeholder="Enter full job description..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
            <h3 className="text-xl font-black text-gray-900">Skills & Requirements</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Required Skills (High Weight)</label>
                <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 min-h-[100px]">
                  {['React', 'TypeScript', 'Tailwind CSS'].map(s => (
                    <span key={s} className="px-4 py-2 bg-primary text-white text-sm font-black rounded-xl flex items-center gap-2">
                      {s} <X className="w-4 h-4 cursor-pointer" />
                    </span>
                  ))}
                  <button className="px-4 py-2 bg-white text-primary text-sm font-black rounded-xl border border-primary/20 hover:bg-primary/5 transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-sidebar p-10 rounded-[40px] text-white shadow-xl">
            <h3 className="text-xl font-black mb-8 flex items-center gap-2"><Layout className="w-6 h-6" /> Match Settings</h3>
            <div className="space-y-10">
              {[
                { label: 'Skill Match Weight', val: 50 },
                { label: 'Experience Match', val: 30 },
                { label: 'Education Match', val: 20 },
              ].map(w => (
                <div key={w.label} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white/70 uppercase tracking-widest text-xs">{w.label}</span>
                    <span className="font-black text-primary">{w.val}%</span>
                  </div>
                  <input type="range" className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-primary cursor-pointer" />
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-sm font-medium leading-relaxed opacity-70 italic">
                These weights determine how the AI calculates candidate match scores for this specific role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;