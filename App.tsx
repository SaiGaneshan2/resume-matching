
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Shared
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';

// Auth
import StudentLogin from './components/auth/StudentLogin';
import AdminLogin from './components/auth/AdminLogin';
import Register from './components/auth/Register';

// Student Portal
import StudentDashboard from './components/student/Dashboard';
import JobListings from './components/student/JobListings';
import ResumeAnalyzer from './components/student/ResumeAnalyzer';
import JobMatching from './components/student/JobMatching';
import Analytics from './components/student/Analytics';
import StudentProfile from './components/student/StudentProfile';

// Admin Portal
import AdminDashboard from './components/admin/AdminDashboard';
import JobPosting from './components/admin/JobPosting';
import ResumePool from './components/admin/ResumePool';
import Configuration from './components/admin/Configuration';
import AdminProfile from './components/admin/AdminProfile';

const ProtectedRoute: React.FC<{ children: React.ReactNode, allowedType: 'student' | 'admin' }> = ({ children, allowedType }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to={`/${allowedType}/login`} replace />;
  }
  
  if (user?.userType !== allowedType) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType={allowedType} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Routes>
            {/* Landing */}
            <Route path="/" element={<Navigate to="/student/login" replace />} />
            
            {/* Auth */}
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/register" element={<Register type="student" />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<Register type="admin" />} />

            {/* Student Routes */}
            <Route path="/student/dashboard" element={<ProtectedRoute allowedType="student"><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/jobs" element={<ProtectedRoute allowedType="student"><JobListings /></ProtectedRoute>} />
            <Route path="/student/resume-analyzer" element={<ProtectedRoute allowedType="student"><ResumeAnalyzer /></ProtectedRoute>} />
            <Route path="/student/job-matching" element={<ProtectedRoute allowedType="student"><JobMatching /></ProtectedRoute>} />
            <Route path="/student/analytics" element={<ProtectedRoute allowedType="student"><Analytics /></ProtectedRoute>} />
            <Route path="/student/profile" element={<ProtectedRoute allowedType="student"><StudentProfile /></ProtectedRoute>} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute allowedType="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/job-posting" element={<ProtectedRoute allowedType="admin"><JobPosting /></ProtectedRoute>} />
            <Route path="/admin/resume-pool" element={<ProtectedRoute allowedType="admin"><ResumePool /></ProtectedRoute>} />
            <Route path="/admin/configuration" element={<ProtectedRoute allowedType="admin"><Configuration /></ProtectedRoute>} />
            <Route path="/admin/profile" element={<ProtectedRoute allowedType="admin"><AdminProfile /></ProtectedRoute>} />

            {/* Catch All */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
