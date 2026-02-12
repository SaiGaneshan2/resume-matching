
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Building, GraduationCap, ChevronRight } from 'lucide-react';

interface RegisterProps {
  type: 'student' | 'admin';
}

const Register: React.FC<RegisterProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    extra: '' // University for student, Company for admin
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    alert('Registration simulated! Redirecting to login...');
    navigate(`/${type}/login`);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 relative overflow-hidden ${type === 'admin' ? 'bg-sidebar' : 'bg-[#F8FAFC]'}`}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="w-full max-w-[600px] space-y-8 relative z-10 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className={`inline-flex p-4 rounded-[32px] shadow-xl ${type === 'admin' ? 'bg-white text-sidebar' : 'bg-sidebar text-white'}`}>
            {type === 'admin' ? <Building className="w-10 h-10" /> : <GraduationCap className="w-10 h-10" />}
          </div>
          <h1 className={`text-4xl font-black ${type === 'admin' ? 'text-white' : 'text-gray-900'}`}>
            {type === 'admin' ? 'Company Registration' : 'Join SkillMatch'}
          </h1>
          <p className={`${type === 'admin' ? 'text-white/60' : 'text-gray-500'} font-medium`}>Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
              <div className="relative group">
                <User className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary" />
                <input required type="text" className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder="John Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Email</label>
              <div className="relative group">
                <Mail className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary" />
                <input required type="email" className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder="john@example.com" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">{type === 'admin' ? 'Company Name' : 'University'}</label>
            <div className="relative group">
              {type === 'admin' ? <Building className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" /> : <GraduationCap className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />}
              <input required type="text" className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder={type === 'admin' ? 'Google' : 'Stanford'} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Password</label>
              <div className="relative group">
                <Lock className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input required type="password" className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder="••••••••" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Confirm</label>
              <div className="relative group">
                <Lock className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input required type="password" className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold" placeholder="••••••••" />
              </div>
            </div>
          </div>

          <button type="submit" className={`w-full py-5 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-3 ${type === 'admin' ? 'bg-sidebar text-white hover:bg-black' : 'bg-primary text-white hover:scale-105'}`}>
            Register Account <ChevronRight className="w-6 h-6" />
          </button>
        </form>

        <p className={`text-center font-bold ${type === 'admin' ? 'text-white/60' : 'text-gray-500'}`}>
          Already have an account? <Link to={`/${type}/login`} className={`font-black underline ${type === 'admin' ? 'text-white' : 'text-primary'}`}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
