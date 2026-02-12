
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ChevronRight, GraduationCap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const StudentLogin: React.FC = () => {
  const [email, setEmail] = useState('student@skillmatch.com');
  const [password, setPassword] = useState('student123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'student@skillmatch.com' && password === 'student123') {
      login(email, 'student');
      navigate('/student/dashboard');
    } else {
      setError('Invalid email or password. Please use student@skillmatch.com / student123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="w-full max-w-[500px] space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-sidebar rounded-[32px] shadow-2xl shadow-sidebar/20 mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Student Login</h1>
          <p className="text-gray-500 font-medium text-lg">Your next career milestone starts here</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white p-12 rounded-[48px] shadow-2xl shadow-primary/10 border border-gray-100 space-y-8">
          {error && (
            <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 animate-in shake duration-300">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
              <div className="relative group">
                <Mail className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-transparent rounded-[24px] focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-gray-700"
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Password</label>
              <div className="relative group">
                <Lock className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-transparent rounded-[24px] focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-gray-700"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-6 h-6 rounded-lg border-2 border-gray-200 group-hover:border-primary transition-all overflow-hidden flex items-center justify-center">
                <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" defaultChecked />
                <div className="w-3 h-3 bg-primary rounded-[2px] opacity-0 transition-opacity peer-checked:opacity-100"></div>
              </div>
              <span className="text-sm font-bold text-gray-500">Remember Me</span>
            </label>
            <a href="#" className="text-sm font-black text-primary hover:text-sidebar transition-colors">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-primary text-white rounded-[24px] font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            Sign In <ChevronRight className="w-6 h-6" />
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-gray-500 font-bold">
            Don't have an account? <Link to="/student/register" className="text-primary font-black">Join SkillMatch</Link>
          </p>
          <p className="text-gray-400 text-sm">
            Are you a recruiter? <Link to="/admin/login" className="text-sidebar font-black">Switch to Admin Portal</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
