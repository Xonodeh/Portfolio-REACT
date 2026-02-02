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
    // top-2 sur mobile pour éviter la collision avec la barre d'état iOS
    <nav className="fixed top-2 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-2 md:px-6 transition-colors duration-500 font-sans">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between p-1.5 md:p-2 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-md transition-colors"
      >
        {/* LOGO - min-w forcé pour éviter qu'il ne disparaisse sur mobile */}
        <div className="flex items-center pl-1 md:pl-2 min-w-[32px] md:min-w-[40px] shrink-0">
          <Link to="/">
            <img 
              src="/imgProfilApple-removebg-preview.png" 
              alt="LogoNael"
              className="w-8 h-8 md:w-10 md:h-10 object-contain dark:opacity-90 opacity-100 transition-opacity"
            />
          </Link>
        </div>
          
        {/* NAVIGATION LINKS - Gap réduit à 0 sur mobile pour gagner de la place */}
        <div className="flex items-center gap-0 md:gap-1">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              isActive={location.pathname === item.path || (item.path === "/about" && location.pathname === "/")} 
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <button 
          onClick={toggleTheme}
          aria-label="Toggle theme"
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
    // text-[10px] indispensable pour que les 4 liens rentrent avec le logo sur iPhone
    className={`px-2 md:px-4 py-2 text-[10px] md:text-sm font-medium transition-all rounded-full ${
      isActive 
        ? "text-black dark:text-white bg-black/5 dark:bg-white/10 shadow-sm" 
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
    }`}
  >
    {children}
  </Link>
);