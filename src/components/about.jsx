// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  const cursus = [
    {
      year: "2018-2021",
      title: "Baccalauréat Général - Mathématiques, Physique-Chimie",
      school: "Lycée Emile Zola, Wattrelos", 
      description:
        "Baccalauréat général au lycée Emile Zola à Wattrelos, spécialités Mathématiques, Physique-Chimie option mathématiques expertes.",
    },
    {
      year: "2021-2023",
      title: "Licence MIASHS - Option Sciences Cognitives",
      school: "Université de Lille",
      description:
        "Licence Mathématiques et informatique appliqués aux sciences humaines et sociales, option sciences cognitives.",

    },
    {
      year: "2023 - 2025",
      title: "BTS SIO - SLAM",
      school: "Lycée Gaston Berger, Lille",
      description:
        "Développement web, applications, base de données, API REST, cybersécurité, projets en PHP, C# (Programmation orientée objet).",
    },
    {
      year: "2026",
      title: "Bachelor développement fullstack & devOps en 3ème année",
      school: "IPSSI Lille",
      description:
        "Licence en développement fullstack & devOps, en alternance.",
    },
  ];

  const experiences = [
    {
      year: "2017",
      title: "Stage d'observation",
      company: "SNEF Cuincy",
      description:
        "Stage d'observation en classe de 3ème, installation d'antennes 4G, commandes de chantiers etc..",
    },
    {
      year: "2023-2025",
      title: "Alternant Assistant applicatif & Développeur",
      company: "CHU de Lille - Direction des ressources numériques",
      description:
        "En tant qu'assistant applicatif, j'avais pour mission les recettes de deux applications critiques du CHU, et également la gestion des incidents. Ensuite, sur la partie développeur, j'avais pour mission le développement de deux applications (web & logiciel) à destination de la DRN.",
    },
    {
      year: "Septembre 2025 - Octobre 2025",
      title: "Ingénieur logiciel en alternance", 
      company: "RIGA S.A.S - Roncq",
      description:
      "Programmation en RPG ILE sur serveur AS400, assistance réseau et cybersécurité en parallèle."
    },
  ];

  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 text-center snap-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-10 text-gray-900 dark:text-white">
        🙋 À propos de moi
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
        Diplômé d'un BTS SIO option SLAM (Développement logiciel fullstack) en étant major de promo, passionné par la cybersécurité et le développement logiciel,
         je recherche une alternance pour m'accompagner durant mon bachelor developpement fullstack & DevOps à <strong>l'IPSSI</strong>
      
      </p>
      <h2 className="text-4xl font-semibold mb-10 text-gray-900 dark:text-white py-12">💼 Expériences professionnelles</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-1">{exp.company}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</span>
            <p className="text-gray-700 dark:text-gray-300 mt-3">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-4xl font-semibold mb-10 text-gray-900 dark:text-white py-12">🎓 Mon cursus scolaire</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cursus.map((step, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-1">{step.school}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{step.year}</span>
            <p className="text-gray-700 dark:text-gray-300 mt-3">{step.description}</p>
          </motion.div>
        ))}
      </div>

      
    </motion.section>
  );
}
