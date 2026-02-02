import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  Laptop, 
  Headphones, 
  Code2, 
  GitBranch, 
  Globe, 
  Container, 
  Box 
} from "lucide-react"; // Import des icônes

const gearItems = [
  {
    category: "Hardware",
    items: [
      { 
        name: "MacBook Air 15\" M3 (2024)", 
        description: "My main machine for development, selected for its battery life and the power of the M3 chip.",
        icon: <Laptop size={20} />
      },
      { 
        name: "AirPods Pro 3", 
        description: "Essential for staying focused while coding in public spaces or at school.",
        icon: <Headphones size={20} />
      }
    ]
  },
  {
    category: "Software & Tools",
    items: [
      { 
        name: "VSCode & Visual Studio 2026", 
        description: "The core of my workflow, customized for C#, React, and Swift development.",
        icon: <Code2 size={20} />
      },
      { 
        name: "Git & GitHub", 
        description: "Version control and collaboration tools that are indispensable for any developer.",
        icon: <GitBranch size={20} />
      },
      { 
        name: "Postman", 
        description: "Used for testing and debugging APIs during development.",
        icon: <Globe size={20} />
      },
      { 
        name: "Docker", 
        description: "Used for containerizing applications and managing development environments.",
        icon: <Container size={20} />
      },
      { 
        name: "Kubernetes", 
        description: "Used for orchestrating containerized applications in production environments.",
        icon: <Box size={20} />
      }
    ]
  }
];

export const Gear = () => {
  return (
    <div className="space-y-20 font-sans text-left">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <TypeAnimation
            sequence={["Gear", 1500, "", 500, "Gear", 1500]}
            wrapper="span" 
            speed={50} 
            repeat={Infinity} 
            className="text-black dark:text-white inline-block" 
            cursor={true} 
          />
        </h1>
        <FadeIn>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A detailed look at the hardware and software tools that make up my development environment.
          </p>
        </FadeIn>
      </motion.section>

      <div className="space-y-16">
        {gearItems.map((section, idx) => (
          <FadeIn key={section.category} delay={idx * 0.1}>
            <section>
              <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-8">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item) => (
                  <div 
                    key={item.name}
                    className="group flex items-start gap-5 p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all"
                  >
                    {/* Icône en Noir et Blanc avec survol bleu discret */}
                    <div className="mt-1 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-black dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};