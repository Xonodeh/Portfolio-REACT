import { motion } from "framer-motion";

export default function About() {
  const cursus = [
    {
      year: "2018-2021",
      title: "Baccalauréat Général - Mathématiques, Physique-Chimie",
      school: "Lycée Emile Zola, Wattrelos", 
      description:
      "Baccalauréat général au lycée Emile Zola à Wattrelos, spécialités Mathématiques, Physique-Chimie option mathématiques expertes."
    },
    {
      year: "2021-2023",
      title: "Licence MIASHS - Option Sciences Cognitives",
      school: "Université de Lille",
      description: "Licence Mathématiques et informatique appliqués aux sciences humaines et sociales, option sciences cognitives. J'ai arrêté cette formation pour un BTS SIO SLAM en alternance, cherchant plus de professionalisation."
    },
    {
      year: "2023 - 2025",
      title: "BTS SIO - SLAM",
      school: "Lycée Gaston Berger, Lille",
      description:
        "Développement web, applications, base de données, API REST, cybersécurité, projets en PHP, C# (Programmation orientée objet).",
    },
    {
      year: "2025-2028",
      title: "Cycle Ingénieur Numérique (alternance)",
      school: "Junia ISEN, Lille (admis, attente d'une alternance)",
      description:
        "Cycle d'ingénieur du numérique, approfondissement du développement logiciel et de la cybersécurité dans un cadre professionnalisant.",
    },
  ];
 const experiences = [
    {
      year: "2017",
      title: "Stage d'observation",
      company: "SNEF Cuincy",
      description: "Stage d'observation en classe de 3ème, installation d'antennes 4G, commandes de chantiers etc.."
    }, 

   {
    year: "2023-2025",
    title: "Alternant Assistant applicatif & Développeur",
    company: "CHU de Lille - Direction des ressources numériques",
    description: ""
   } 
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
      <h2 className="text-4xl font-semibold mb-10 text-gray-900">
      🙋 À propos de moi
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
        En fin de BTS SIO SLAM, passionné par la cybersécurité et le développement logiciel, je recherche une alternance de 3 ans pour intégrer le cycle ingénieur du numérique à <strong>Junia ISEN</strong>.
        Je suis également admissible en <strong>3e année de Bachelor Concepteur d’Applications au CESI Lille</strong>, et en recherche d’alternance pour cette voie.
      </p>

      <h2 className="text-4xl font-semibold mb-10 text-gray-900">🎓 Mon cursus scolaire</h2>

      <div className="space-y-8 relative border-l border-gray-300 pl-6 text-left">
        {cursus.map((step, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-[-20px] top-2 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 italic mb-1">{step.school}</p>
              <span className="text-sm text-gray-500">{step.year}</span>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
