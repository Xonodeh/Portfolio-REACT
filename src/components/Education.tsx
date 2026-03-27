import { FadeIn } from "./FadeIn";
import { Code2, Server, Container, ShieldCheck } from "lucide-react";
export const Education = () => {
  return (
    <section className="max-w-2xl mx-auto pb-20 px-6 font-sans">
      
      {/* Professional Experience Section */}
      <FadeIn>
        <div className="mt-32">
          <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-12">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            
            {/* Nexor - Volunteering */}
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <a 
                  href="https://nexor-app.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-black dark:text-white group-hover:text-blue-500 transition-colors"
                >
                  Nexor App
                </a>
                <span className="text-[10px] font-mono text-gray-400">2025 — Present</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4 italic">
                Volunteer Software Developer
              </p>
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Development of a esport betting application using C# and .NET MAUI.
                </li>
              </ul>
            </div>

            {/* RIGA - Apprenticeship */}
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-sm font-bold text-black dark:text-white group-hover:text-blue-500 transition-colors">
                  RIGA
                </h3>
                <span className="text-[10px] font-mono text-gray-400">Sept. 2025 — Oct. 2025</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4 italic">
                Software Engineer Apprentice 
              </p>
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Software development and using IBM AS400 (RPG ILE 4).
                </li>
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Cybersecurity assistance, focusing on network monitoring and system integrity.
                </li>
              </ul>
            </div>

            {/* CHU de Lille */}
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-sm font-bold text-black dark:text-white group-hover:text-blue-500 transition-colors">
                  Lille University Hospital (CHU de Lille)
                </h3>
                <span className="text-[10px] font-mono text-gray-400">2023 — 2025</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4 italic">
                Apprentice Application Assistant & Fullstack Developer
              </p>
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Lead developer for two critical internal applications (Web & Desktop) for the DRN department.
                </li>
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Responsible for software testing, bug tracking, and incident management across hospital systems.
                </li>
              </ul>
            </div>

            {/* SNEF */}
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-sm font-bold text-black dark:text-white  group-hover:text-blue-500 transition-colors">
                  SNEF Cuincy
                </h3>
                <span className="text-[10px] font-mono text-gray-400">Nov. 2017</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4 italic">
                Observation Internship
              </p>
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex items-start gap-3 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  Assisted in the installation and maintenance of telecommunications equipment on-site.
                </li>
              </ul>
    
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Journey Timeline */}
<FadeIn>
  <div className="mt-32">
    <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-12">
      Timeline
    </h2>
    
    <div className="relative border-l border-black/5 dark:border-white/10 ml-3 space-y-12">
      {/* Education - Engineering Cycle / Bachelor */}
      <div className="relative pl-8">
        <div className="absolute -left-1.25 top-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold text-black dark:text-white">IMT Nord Europe or CESI</h3>
          <span className="text-[10px] font-mono text-gray-400">2026 — Present</span>
        </div>
        <p className="text-xs text-gray-500 font-medium italic">Engineering Cycle or Bachelor's Degree — Fullstack Development & DevOps</p>
      </div>

      {/* BTS SIO */}
    <div className="relative pl-8">
      <div className="absolute -left-1.25 top-1.5 w-2 h-2 rounded-full bg-emerald-500/80" />
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-sm font-bold text-black dark:text-white">Gaston Berger, Lille</h3>
        <span className="text-[10px] font-mono text-gray-400">2023 — 2025</span>
      </div>
      <p className="text-xs text-gray-500 font-medium italic mb-2">
        Associate's Degree in Software Development (BTS SIO SLAM) — Graduate Valedictorian
      </p>
      <p className="text-[11px] text-gray-400 leading-relaxed max-w-lg">
        Specialized in Fullstack development and Database administration. Mastered OOP principles, 
        software design patterns, and secure application development through 2 years of apprenticeship in Lille's Hospital IT Team.
      </p>
</div>
    </div>
  </div>
</FadeIn>

      {/* Tech Stack Section */}
      <FadeIn>
        <div className="mt-40">
          <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-12">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
            {/* Front-End */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={14} className="text-gray-400" />
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Front-End</p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500" /> React
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400" /> TypeScript
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-500" /> Tailwind CSS
                </li>
              </ul>
            </div>

            {/* Back-end */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server size={14} className="text-gray-400" />
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Back-end</p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-purple-500" /> C# .NET
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-600" /> PHP
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500" /> MySQL / Firebase
                </li>
              </ul>
            </div>

            {/* DevOps */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Container size={14} className="text-gray-400" />
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">DevOps</p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500" /> Docker
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-500" /> Git / GitHub
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-500" /> CI/CD
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={14} className="text-gray-400" />
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Security</p>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]" /> Pentesting basis
                </li>
                <li className="text-sm font-medium text-black dark:text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400" /> Network Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};