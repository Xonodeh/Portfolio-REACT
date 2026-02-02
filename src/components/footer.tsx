import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";
export const Footer = () => {
  return (
    <FadeIn>
    <footer className="max-w-2xl mx-auto px-6 py-12 border-t border-white/5 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info & Status */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-medium text-white">Nael Haddadi.</p>
          <p className="text-xs text-gray-500">
            Available for an apprenticeship in Sept 2026.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/Xonodeh" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nael-haddadi/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto: haddadi.nael@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

      </div>
      
      {/* Copyright discret */}
      <div className="mt-30 text-center md:text-center">
        <p className="text-[10px] font-mono text-white-600 uppercase tracking-widest">
        © 2026 Nael HADDADI. All rights reserved.

        </p>
      </div>
    </footer>
    </FadeIn>
  );
};