
import { Job, Match } from '../types';

export const STUDENTS = [
  {
    id: "STU001",
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1-555-0123",
    location: "San Francisco, CA",
    university: "Stanford University",
    degree: "B.Tech Computer Science",
    graduationYear: 2024,
    cgpa: 8.5,
    skills: ["React", "TypeScript", "Node.js", "Python", "SQL", "Git"],
    certifications: ["AWS Certified Developer", "React Advanced"],
    resumeScore: 78,
    profileViews: 156,
    applicationsSent: 24,
    shortlisted: 7
  }
];

export const JOBS: Job[] = [
  {
    id: "JOB001",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$120k - $150k",
    description: "Build modern web applications using React and TypeScript...",
    requiredSkills: ["React", "TypeScript", "CSS", "GraphQL"],
    niceToHaveSkills: ["Docker", "AWS"],
    postedDate: "2024-02-10",
    deadline: "2024-03-10",
    applicationsCount: 42,
    status: "Active"
  },
  {
    id: "JOB002",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$100k - $130k",
    description: "Join our fast-paced startup building AI tools...",
    requiredSkills: ["Node.js", "React", "PostgreSQL", "Docker"],
    niceToHaveSkills: ["Python", "AWS"],
    postedDate: "2024-02-12",
    deadline: "2024-03-15",
    applicationsCount: 15,
    status: "Active"
  },
  {
    id: "JOB003",
    title: "Backend Developer",
    company: "DataFlow Systems",
    location: "New York, NY",
    type: "Contract",
    experience: "5+ years",
    salary: "$140k - $160k",
    description: "Architecting high-performance data processing pipelines...",
    requiredSkills: ["Python", "Go", "Kubernetes", "Redis"],
    niceToHaveSkills: ["NoSQL", "GCP"],
    postedDate: "2024-02-15",
    deadline: "2024-03-20",
    applicationsCount: 28,
    status: "Active"
  },
  {
    id: "JOB004",
    title: "Junior React Developer",
    company: "WebAgency Co.",
    location: "Austin, TX",
    type: "Full-time",
    experience: "0-1 years",
    salary: "$70k - $90k",
    description: "Great entry level role for a React enthusiast...",
    requiredSkills: ["React", "JavaScript", "HTML/CSS", "Git"],
    niceToHaveSkills: ["Sass", "Jest"],
    postedDate: "2024-02-18",
    deadline: "2024-03-25",
    applicationsCount: 56,
    status: "Active"
  },
  {
    id: "JOB005",
    title: "DevOps Engineer",
    company: "CloudNative Ltd.",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$130k - $170k",
    description: "Manage our cloud infrastructure and CI/CD pipelines...",
    requiredSkills: ["AWS", "Terraform", "Docker", "Jenkins"],
    niceToHaveSkills: ["Python", "Linux"],
    postedDate: "2024-02-20",
    deadline: "2024-03-30",
    applicationsCount: 12,
    status: "Active"
  }
];

export const MATCHES: Match[] = [
  {
    studentId: "STU001",
    jobId: "JOB001",
    matchScore: 92,
    matchedSkills: ["React", "TypeScript", "Git"],
    missingSkills: ["GraphQL"],
    experienceMatch: true,
    educationMatch: true
  },
  {
    studentId: "STU001",
    jobId: "JOB002",
    matchScore: 78,
    matchedSkills: ["React", "Node.js"],
    missingSkills: ["PostgreSQL", "Docker"],
    experienceMatch: true,
    educationMatch: true
  },
  {
    studentId: "STU001",
    jobId: "JOB003",
    matchScore: 65,
    matchedSkills: ["Python"],
    missingSkills: ["Go", "Kubernetes", "Redis"],
    experienceMatch: false,
    educationMatch: true
  },
  {
    studentId: "STU001",
    jobId: "JOB004",
    matchScore: 95,
    matchedSkills: ["React", "JavaScript", "Git"],
    missingSkills: [],
    experienceMatch: true,
    educationMatch: true
  },
  {
    studentId: "STU001",
    jobId: "JOB005",
    matchScore: 46,
    matchedSkills: [],
    missingSkills: ["AWS", "Terraform", "Docker", "Jenkins"],
    experienceMatch: true,
    educationMatch: true
  }
];
