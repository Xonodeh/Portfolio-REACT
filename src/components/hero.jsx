import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
  className="flex flex-col items-center justify-center min-h-screen pt-16 text-center px-6 bg-white dark:bg-gray-900"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <img
        src="../img/favicon.png"
        width={150}
        height={150}
        alt="Photo de profil"
        className="rounded-full shadow-lg mb-4"
      />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-gray-900 dark:text-white">
        Nael Haddadi
      </h1>

      <h2 className="text-lg md:text-xl max-w-xl mb-4 text-gray-700 dark:text-gray-300">
        Développeur web & logiciel passionné par la cybersécurité. 😄
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6">
        Actuellement en fin de 2ème année de BTS SIO option SLAM, je recherche une alternance en programmation pour m'accompagner dans la suite de mon cursus et de mon avenir professionnel. 🧑‍💻
      </p>

      {/* Icônes sociales */}
      <div className="flex gap-6 mb-6">
        <a href="https://github.com/Xonodeh" target="_blank" rel="noopener noreferrer">
        <img
          src="../img/github-142-svgrepo-com.svg"
          width={40}
          height={40}
          alt="GitHub"
          className="hover:scale-110 transition-transform duration-300 dark:invert"
        />

        </a>
        <a href="https://www.linkedin.com/in/nael-haddadi/" target="_blank" rel="noopener noreferrer">
        <img
          src="../img/linkedin-svgrepo-com.svg"
          width={40}
          height={40}
          alt="LinkedIn"
          className="hover:scale-110 transition-transform duration-300 dark:invert"
        />

        </a>
      </div>

      {/* Boutons stylés Apple */}
      <div className="flex">
        <a
          href="#projects"
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Voir mes projets 
        </a>

        <a
          href="../img/CV-ISEN.pdf"
          download
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Télécharger mon CV
        </a>
      </div>
    </motion.section>
  );
}
