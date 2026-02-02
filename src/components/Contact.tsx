import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    value: "haddadi.nael@gmail.com", 
    href: "mailto:haddadi.nael@gmail.com",
    icon: <Mail size={18} />,
    label: "Send an email"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/naelhaddadi",
    href: "https://www.linkedin.com/in/nael-haddadi/",
    icon: <Linkedin size={18} />,
    label: "Let's connect"
  },
  {
    name: "GitHub",
    value: "github.com/Xonodeh",
    href: "https://github.com/Xonodeh",
    icon: <Github size={18} />,
    label: "Check my code"
  }
];

export const Contact = () => {
  return (
    <div className="space-y-20 text-left font-sans">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <TypeAnimation
            sequence={[
              "Contact",
              1500, 
              "",   
              500,  
              "Contact",
              1500,
            ]}
            wrapper="span" 
            speed={50} 
            repeat={Infinity} 
            className="text-black dark:text-white inline-block" 
            cursor={true} 
          />
        </h1>
        <FadeIn>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I'm currently looking for an apprenticeship starting in September 2026. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </FadeIn>
      </motion.section>
      

      <div className="grid grid-cols-1 gap-4">
        {socialLinks.map((link, idx) => (
          <FadeIn key={link.name} delay={idx * 0.1}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-4">
                {/* Icône avec fond stylisé Apple */}
                <div className="text-gray-400 group-hover:text-blue-500 transition-colors p-2.5 bg-black/5 dark:bg-white/5 rounded-xl">
                  {link.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">
                    {link.name}
                  </p>
                  {/* Mise en avant du Label comme demandé */}
                  <p className="text-sm font-semibold text-black dark:text-white leading-tight">
                    {link.label}
                  </p>
                </div>
              </div>
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors">
                <ExternalLink size={16} />
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="pt-10 border-t border-black/5 dark:border-white/5">
          <p className="text-xs text-gray-500 font-mono italic">
            Based in Lille, France. Currently seeking a short-term internship as a lead-in to a apprenticeship for september 2026.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};