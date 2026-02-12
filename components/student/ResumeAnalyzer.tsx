
import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  X,
  FileDown,
  Info
} from 'lucide-react';

const ResumeAnalyzer: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{name: string, size: string} | null>({
    name: "Alex_Johnson_Resume_2024.pdf",
    size: "245 KB"
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIsUploading(true);
      setTimeout(() => {
        setUploadedFile({
          name: file.name,
          size: `${Math.round(file.size / 1024)} KB`
        });
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <header>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Analyze Your Resume</h1>
        <p className="text-gray-500 font-medium text-lg">Upload your resume to get AI-powered insights and recommendations</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Upload Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border-4 border-dashed border-gray-100 shadow-sm text-center hover:border-primary/50 transition-all group relative overflow-hidden">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer z-10" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            
            {isUploading ? (
              <div className="py-12 flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="font-bold text-gray-600">Analyzing your resume...</p>
              </div>
            ) : (
              <div className="py-8">
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drag and drop resume</h3>
                <p className="text-gray-400 font-medium mb-6">Support: PDF, DOCX (Max 10MB)</p>
                <div className="inline-flex px-8 py-3 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/20">
                  Browse Files
                </div>
              </div>
            )}
          </div>

          {uploadedFile && (
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between group animate-in slide-in-from-left duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm truncate max-w-[150px]">{uploadedFile.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{uploadedFile.size}</p>
                </div>
              </div>
              <button 
                onClick={() => setUploadedFile(null)}
                className="p-2 hover:bg-red-50 hover:text-red-500 text-gray-400 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-primary">Pro Tip</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              ATS-friendly resumes often rank higher. Use clean layouts and standard headings like "Experience" and "Skills".
            </p>
          </div>
        </div>

        {/* Right: Analysis Results */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Score Wheel */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <svg className="w-48 h-48 -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth="16"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    fill="none"
                    stroke="#4C3BCF"
                    strokeWidth="16"
                    strokeDasharray={2 * Math.PI * 84}
                    strokeDashoffset={(2 * Math.PI * 84) * (1 - 0.78)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-gray-900">78</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Out of 100</span>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">Overall Score</p>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-6 flex flex-col justify-center">
              {[
                { label: 'Skills Alignment', score: 85, icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
                { label: 'Experience Depth', score: 70, icon: <AlertTriangle className="w-5 h-5 text-amber-500" /> },
                { label: 'Education Quality', score: 90, icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
                { label: 'Formatting', score: 75, icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
              ].map(metric => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {metric.icon}
                      <span className="font-bold text-gray-700">{metric.label}</span>
                    </div>
                    <span className="text-sm font-black text-primary">{metric.score}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${metric.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extracted Skills */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 space-y-8">
            <section>
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                Extracted Skills <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-xs rounded">8</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'React', level: '95%' },
                  { name: 'TypeScript', level: '90%' },
                  { name: 'Node.js', level: '88%' },
                  { name: 'Python', level: '85%' },
                  { name: 'SQL', level: '82%' },
                  { name: 'Git', level: '95%' },
                  { name: 'REST APIs', level: '78%' },
                  { name: 'Agile', level: '70%' },
                ].map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/30 transition-all">
                    <span className="font-bold text-gray-700">{skill.name}</span>
                    <span className="w-px h-4 bg-gray-200"></span>
                    <span className="font-black text-primary text-sm">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-black text-gray-900 mb-6">Skills to Improve</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Docker', priority: 'High', color: 'bg-red-50 text-red-600 border-red-100' },
                  { name: 'AWS', priority: 'High', color: 'bg-red-50 text-red-600 border-red-100' },
                  { name: 'GraphQL', priority: 'Medium', color: 'bg-amber-50 text-amber-600 border-amber-100' },
                  { name: 'Kubernetes', priority: 'Medium', color: 'bg-amber-50 text-amber-600 border-amber-100' },
                  { name: 'CI/CD', priority: 'Low', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                ].map(skill => (
                  <div key={skill.name} className={`flex items-center gap-3 px-5 py-3 rounded-2xl border font-bold ${skill.color}`}>
                    {skill.name}
                    <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 bg-white/50 rounded">{skill.priority}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-gray-900 mb-8">AI Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Add more quantifiable achievements to your experience section (e.g., 'Reduced load time by 30%').",
                "Consider adding Docker and AWS certifications to validate your backend infrastructure skills.",
                "Include links to GitHub projects showcasing your work with TypeScript and SQL.",
                "Ensure your contact details are prominently displayed at the top of the first page.",
                "The 'About Me' section is slightly long. Try condensing it to 3 punchy sentences.",
              ].map((rec, i) => (
                <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Lightbulb className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
