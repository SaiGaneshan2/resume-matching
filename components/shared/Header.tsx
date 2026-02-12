
import React from 'react';
import { Bell, Search, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search jobs, skills..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 leading-none">{user?.name}</p>
            <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
          </div>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            {user?.name?.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
