
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Award, 
  FileText, 
  Plus, 
  Edit2, 
  Trash2,
  Download,
  CheckCircle,
  ExternalLink,
  // Added Briefcase and Upload to imports
  Briefcase,
  Upload
} from 'lucide-react';

const StudentProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const TabButton = ({ id, label, icon: Icon }: any) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
        activeTab === id 
        ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
        : 'text-gray-400 hover:text-primary hover:bg-primary/5'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
        <div className="relative">
          <div className="w-40 h-40 bg-gray-100 rounded-[48px] overflow-hidden border-4 border-white shadow-lg">
            <img src="https://picsum.photos/seed/alex/400/400" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-2 right-2 p-3 bg-primary text-white rounded-2xl shadow-lg border-4 border-white hover:scale-110 transition-transform">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-4xl font-black text-gray-900">Alex Johnson</h1>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
              <CheckCircle className="w-3 h-3" /> Profile Verified
            </span>
          </div>
          <p className="text-lg font-bold text-gray-500 mb-6">B.Tech Senior @ Stanford University • Class of 2024</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-sidebar transition-colors shadow-lg shadow-primary/10">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
        <TabButton id="personal" label="Personal" icon={User} />
        <TabButton id="education" label="Education" icon={GraduationCap} />
        <TabButton id="experience" label="Experience" icon={Briefcase} />
        <TabButton id="skills" label="Skills" icon={Award} />
        <TabButton id="resumes" label="Resumes" icon={FileText} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          {activeTab === 'personal' && (
            <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Full Name', value: 'Alex Johnson', icon: User },
                  { label: 'Email Address', value: 'alex.johnson@email.com', icon: Mail, readonly: true },
                  { label: 'Phone Number', value: '+1-555-0123', icon: Phone },
                  { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
                ].map((field, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">{field.label}</label>
                    <div className="relative group">
                      <field.icon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <input 
                        type="text" 
                        defaultValue={field.value} 
                        readOnly={field.readonly}
                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 outline-none font-bold text-gray-700 transition-all ${field.readonly ? 'bg-gray-50' : 'focus:ring-4 focus:ring-primary/5 focus:border-primary group-hover:border-primary/30'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {[
                { title: "University/Bachelor's", school: 'Stanford University', degree: 'B.Tech Computer Science', spec: 'AI & Machine Learning', year: '2024', gpa: '8.5 CGPA' },
                { title: '12th Grade / Diploma', school: 'Lincoln Academy', degree: 'Higher Secondary', spec: 'Science Stream', year: '2020', gpa: '92%' },
                { title: '10th Grade', school: 'Saint Peters High', degree: 'High School', spec: 'General Studies', year: '2018', gpa: '9.4 CGPA' },
              ].map((edu, i) => (
                <div key={i} className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm flex items-start justify-between group">
                  <div className="flex gap-8">
                    <div className="w-20 h-20 bg-primary/5 rounded-[32px] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{edu.title}</h4>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{edu.school}</h3>
                      <p className="text-lg font-bold text-gray-600 mb-2">{edu.degree} • {edu.spec}</p>
                      <div className="flex gap-6">
                        <span className="text-sm font-black text-primary px-3 py-1 bg-primary/5 rounded-lg">Class of {edu.year}</span>
                        <span className="text-sm font-black text-emerald-600 px-3 py-1 bg-emerald-50 rounded-lg">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all opacity-0 group-hover:opacity-100">
                    <Edit2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button className="w-full py-6 border-4 border-dashed border-gray-100 rounded-[40px] flex items-center justify-center gap-3 text-gray-400 font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all">
                <Plus className="w-6 h-6" /> Add Education Level
              </button>
            </div>
          )}

          {activeTab === 'resumes' && (
            <div className="space-y-6">
              <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary mb-2">Upload a New Resume</h3>
                  <p className="font-bold text-primary/60">Help the AI understand your career path better</p>
                </div>
                <button className="px-8 py-4 bg-primary text-white font-black rounded-[20px] shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
                  <Upload className="w-5 h-5" /> Upload Now
                </button>
              </div>

              {[
                { name: 'Alex_Johnson_Resume_2024.pdf', size: '245 KB', date: 'Jan 15, 2024', primary: true },
                { name: 'Alex_Johnson_Resume_Old.pdf', size: '198 KB', date: 'Oct 10, 2023', primary: false },
              ].map((resume, i) => (
                <div key={i} className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-black text-gray-900">{resume.name}</h4>
                        {resume.primary && (
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Primary</span>
                        )}
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{resume.size} • Uploaded {resume.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {!resume.primary && (
                      <button className="px-5 py-2.5 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-all">Set as Primary</button>
                    )}
                    <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-primary/5 hover:text-primary transition-all">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Stats / Quick Access */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm text-center">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Profile Completion</h3>
            <div className="relative w-32 h-32 mx-auto mb-8">
              <svg className="w-full h-full -rotate-90">
                <circle cx="64" cy="64" r="58" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                <circle cx="64" cy="64" r="58" fill="none" stroke="#4C3BCF" strokeWidth="12" strokeDasharray={2 * Math.PI * 58} strokeDashoffset={(2 * Math.PI * 58) * (1 - 0.92)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-gray-900">92%</span>
              </div>
            </div>
            <p className="font-bold text-gray-700 leading-relaxed mb-6">Your profile is almost complete! Add a summary to reach 100%.</p>
            <button className="w-full py-4 bg-gray-50 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all">Complete Profile</button>
          </div>

          <div className="bg-sidebar p-10 rounded-[40px] text-white space-y-8 shadow-xl">
            <h3 className="text-xl font-black mb-6">Quick Settings</h3>
            {[
              { label: 'Public Profile', enabled: true },
              { label: 'Available for Hire', enabled: true },
              { label: 'Remote Only', enabled: false },
              { label: 'Email Notifications', enabled: true },
            ].map((setting, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="font-bold opacity-80">{setting.label}</span>
                <button className={`w-12 h-6 rounded-full relative transition-colors ${setting.enabled ? 'bg-primary' : 'bg-white/20'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${setting.enabled ? 'right-1' : 'left-1'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;