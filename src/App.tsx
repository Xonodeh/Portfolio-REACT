import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx"; 
import { Education } from "./components/Education.tsx"; 
import { Projects } from "./components/projects.tsx";
import { Gear } from "./components/Gear.tsx";
import { Contact } from "./components/Contact.tsx";

// On sépare la page d'accueil (About) pour que le Router puisse l'afficher seule
const About = () => {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <TypeAnimation
            sequence={[
              "hello,  Nael here. :)",
              1500, 
              "",   
              500,  
              "hello,  Nael here. :)",
              1500,
            ]}
            wrapper="span" 
            speed={50} 
            repeat={Infinity} 
            className="text-black dark:text-white inline-block" 
            cursor={true} 
          />
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          your average CS student struggling with an infinite amount of unfinished projects.
        </p>
      </motion.section>

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {[
          { label: "Location", value: "Lille, France" },
          { label: "Education", value: "Engineering Student - IMT Nord Europe", special: true },
          { label: "Currently", value: "Software Engineer Apprentice - @Capgemini", special: true }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm text-left">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
            <p className={`text-sm ${item.special ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-black dark:text-white'}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
      
      <Education />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white selection:bg-blue-500/30 transition-colors duration-500 font-sans">
        <Navbar />
        
        {/* Conteneur principal qui change selon la route */}
        <div className="max-w-2xl mx-auto pt-40 pb-20 px-6">
          <Routes>
            {/* Route par défaut (About) */}
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            {/* Route pour la page Projects */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />
        </div>
      </main>
    </Router>
  );
}