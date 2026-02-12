
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserType } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, userType: UserType, name?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('skillmatch_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, userType: UserType, name: string = 'Alex Johnson') => {
    const newUser: User = {
      id: userType === 'student' ? 'STU001' : 'ADM001',
      name,
      email,
      userType
    };
    setUser(newUser);
    localStorage.setItem('skillmatch_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillmatch_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
