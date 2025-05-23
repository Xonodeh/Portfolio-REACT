import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MarieTeam - Site de réservation de trajets maritimes",
      description: "Construit avec PHP et JS",
      image: "/images/marieteam-site.png"
    },
    {
      id: 2,
      title: "MarieTeam - Application bureautique pour admins",
      description: "Gère les bateaux, génère des brochures PDF. En C#",
      image: "/images/marieteam-admin.png"
    },
    {
      id: 3,
      title: "Mon premier portfolio",
      description: "HTML, CSS, JS – Épreuve E5 du BTS SIO",
      image: "/images/portfolio.png",
      link: "https://nael-haddadi.vercel.app/"
    },
    {
      id: 4,
      title: "Planiftâches - Application web pour le CHU de Lille",
      description: "Application de planification de tâches à destination de l'équipe de la DRN",
      image: "/images/planiftaches-web.png",
      link: ""
    },
    {
      id: 5,
      title: "Planiftâches - Application C#",
      description: "Partie administrateur de Planiftâches",
      image: "/images/planiftaches-csharp.png",
      link: ""
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900">Mes Projets</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map(({ id, title, description, image, link }) => (
          <SwiperSlide key={id}>
            <div
              onClick={() => setSelectedProject({ id, title, description, image, link })}
              className="cursor-pointer rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 h-full flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modale animée */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl max-w-xl w-full p-6 shadow-2xl relative border border-white/50"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                aria-label="Fermer la modale"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl w-full mb-6 shadow-md"
                />
              )}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium underline hover:text-blue-800"
                >
                  Voir le projet en ligne
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
