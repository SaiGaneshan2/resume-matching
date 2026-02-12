
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ChevronRight, Briefcase } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('admin@skillmatch.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@skillmatch.com' && password === 'admin123') {
      login(email, 'admin', 'System Admin');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials. Use admin@skillmatch.com / admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sidebar p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="w-full max-w-[500px] space-y-10 relative z-10 animate-in zoom-in duration-500">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-2xl mb-6">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Recruiter Portal</h1>
          <p className="text-white/60 font-medium text-lg">Hire top-tier talent with AI precision</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white p-12 rounded-[48px] shadow-2xl space-y-8">
          {error && (
            <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Recruiter ID / Email</label>
              <div className="relative group">
                <Mail className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-transparent rounded-[24px] focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-bold text-gray-700"
                  placeholder="admin@skillmatch.com"
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

          <button 
            type="submit" 
            className="w-full py-5 bg-sidebar text-white rounded-[24px] font-black text-lg shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3"
          >
            Admin Sign In <ChevronRight className="w-6 h-6" />
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-white/60 font-bold">
            New Organization? <Link to="/admin/register" className="text-white font-black underline decoration-primary underline-offset-4">Register Company</Link>
          </p>
          <p className="text-white/40 text-sm">
            Not a recruiter? <Link to="/student/login" className="text-primary font-black">Back to Student Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
