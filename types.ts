
// Add React import for ReactNode type
import React from 'react';

export type UserType = 'student' | 'admin' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  university?: string;
  company?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requiredSkills: string[];
  niceToHaveSkills: string[];
  postedDate: string;
  deadline: string;
  applicationsCount: number;
  status: 'Active' | 'Closed';
}

export interface Match {
  studentId: string;
  jobId: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  experienceMatch: boolean;
  educationMatch: boolean;
}

export interface StatItem {
  label: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  color?: string;
}