import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MarieTeam - Site de réservation",
      description: "Projet de cours de réservation de trajets maritimes",
      images: ["../img/mariteam-web/inscr.png", "../img/mariteam-web/conn.png", "../img/mariteam-web/accueil1.png", "../img/mariteam-web/accueil2.png", "../img/mariteam-web/traversees.png", "../img/mariteam-web/test.png", "../img/mariteam-web/confirm.png"],
      link: "https://github.com/Xonodeh/MarieTeam",
      techs: ["html", "css", "php", "js", "mysql"]
    },
    {
      id: 2,
      title: "MarieTeam - App Bureautique",
      description: "App. C# pour les gestionnaires, afin de gérer les bateaux, et générer des brochures en PDF",
      link: "https://github.com/Xonodeh/BrochuresMarieTeam",
      images: ["../img/mariteam-csharp/menu.png", "../img/mariteam-csharp/ajoutEquip.png", "../img/mariteam-csharp/pdfgenere.png", "../img/mariteam-csharp/brochure.png"],
      techs: ["csharp", "mysql"]
    },
    {
      id: 3,
      title: "Mon premier portfolio",
      description: "HTML/CSS pour l’épreuve E5 BTS",
      images: ["/images/portfolio.png"],
      link: "https://nael-haddadi.vercel.app/",
      techs: ["js", "css", "html"]
    },
    {
      id: 4,
      title: "Planiftâches - Web",
      description: "App de planif. au CHU de Lille",
      images: ["../img/planiftaches/accueil-planiftaches.png", "../img/planiftaches/ajout_charge-planiftaches.png", "../img/planiftaches/calendrier-planiftahes.png"],
      techs: ["php", "js", "html", "css", "mysql"]
    },
    {
      id: 5,
      title: "Planiftâches - Desktop",
      description: "App admin en C# avec dashboards et statistiques",
      images: ["/images/planiftaches-csharp.png"],
      techs: ["csharp", "mysql"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [selectedProject]);

  const getIcon = (tech) => {
    const icons = {
      php: "../img/php.svg",
      js: "../img/js.svg",
      html: "../img/html.svg",
      css: "../img/css.svg",
      csharp: "../img/csharp.svg",
      mysql: "../img/mysql.svg",
      react: "../img/react.svg"
    };
    return icons[tech];
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-semibold mb-12 text-gray-900 dark:text-gray-100">🖥️ Mes projets</h2>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="p-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="overflow-visible">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-black hover:shadow-xl transition-all duration-300 p-5 h-full max-w-[320px] mx-auto flex flex-col justify-between"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Icônes technos */}
                  <div className="flex justify-center gap-3 mt-auto mb-3">
                    {project.techs?.map((tech, idx) => {
                      const iconSrc = getIcon(tech);
                      const title = tech.toUpperCase();

                      if (tech === "mysql") {
                        return (
                            <img
                              src={iconSrc}
                              alt={tech}
                              className={tech === "mysql" ? "w-6 h-6 dark:invert transition-colors duration-300" : "w-6 h-6"}
                              title={title}
                            />
                        );
                      }

                      return (
                        <img
                          key={idx}
                          src={iconSrc}
                          alt={tech}
                          className="w-6 h-6"
                          title={title}
                        />
                      );
                    })}
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modale projet */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl dark:shadow-black relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl transition"
              aria-label="Fermer la modale"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{selectedProject.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>

            <div className="flex flex-col gap-4 mb-6">
              {selectedProject.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProject.title} capture ${i + 1}`}
                  className="rounded-xl w-full shadow-md dark:shadow-black"
                />
              ))}
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 transition dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Voir le repo GitHub
                <img src="../img/github-142-svgrepo-com.svg" alt="GitHub" className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
