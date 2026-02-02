import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gear", path: "/gear" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6 transition-colors duration-500">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between p-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-colors"
      >
        {/* LOGO */}
        <div className="flex items-center pl-2">
          <Link to="/">
            <img 
              src="/imgProfilApple-removebg-preview.png" 
              width={40}
              alt="LogoNael"
              className="dark:opacity-90 opacity-100 transition-opacity"
            />
          </Link>
        </div>
          
        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              // Gère l'état actif selon l'URL (si on est sur /about ou à la racine)
              isActive={location.pathname === item.path || (item.path === "/about" && location.pathname === "/")} 
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all active:scale-90 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </button>
      </motion.div>
    </nav>
  );
};

// Composant NavLink utilisant Link de react-router-dom
const NavLink = ({ 
  to, 
  children, 
  isActive
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => (
  <Link 
    to={to}
    className={`px-4 py-2 text-xs md:text-sm font-medium transition-all rounded-full ${
      isActive 
        ? "text-black dark:text-white bg-black/5 dark:bg-white/10 shadow-sm" 
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
    }`}
  >
    {children}
  </Link>
);