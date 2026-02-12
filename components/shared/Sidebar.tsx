
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileSearch, 
  Network, 
  BarChart3, 
  User, 
  Settings, 
  LogOut,
  ChevronLeft,
  Users,
  PlusSquare,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  userType: 'student' | 'admin';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const studentLinks = [
    { to: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/student/jobs', icon: Briefcase, label: 'Jobs' },
    { to: '/student/resume-analyzer', icon: FileSearch, label: 'Resume Analyzer' },
    { to: '/student/job-matching', icon: Network, label: 'Job Matching' },
    { to: '/student/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/student/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/job-posting', icon: PlusSquare, label: 'Add Jobs' },
    { to: '/admin/resume-pool', icon: Users, label: 'Resume Pool' },
    { to: '/admin/configuration', icon: Settings, label: 'Configuration' },
    { to: '/admin/profile', icon: User, label: 'Profile' },
  ];

  const links = userType === 'student' ? studentLinks : adminLinks;

  const handleLogout = () => {
    logout();
    navigate(`/${userType}/login`);
  };

  return (
    <aside className="w-64 bg-sidebar text-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            {userType === 'student' ? 'SkillMatch' : 'Admin Portal'}
          </span>
        </div>
        <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              ${isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
            `}
          >
            <link.icon className="w-5 h-5" />
            <span className="font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <button
          onClick={() => navigate(userType === 'student' ? '/admin/login' : '/student/login')}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
        >
          <Network className="w-5 h-5" />
          <span>{userType === 'student' ? 'Admin Portal' : 'Student Portal'}</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
