import { useState } from 'react';
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
      description: "Site vitrine avec réservation maritime",
      images: ["/images/marieteam-site.png", "/images/marieteam-site-2.png"],
      techs: ["html", "css", "php", "js", "mysql"]
    },
    {
      id: 2,
      title: "MarieTeam - App Bureautique",
      description: "App C# pour gérer les bateaux",
      images: ["/images/marieteam-admin.png"],
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
      images: ["/images/planiftaches-web.png"],
      techs: ["php", "js", "html", "css", "mysql"]
    },
    {
      id: 5,
      title: "Planiftâches - Desktop",
      description: "App admin en C# avec PDF",
      images: ["/images/planiftaches-csharp.png"],
      techs: ["csharp", "mysql"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-12 text-gray-900">Mes projets</h2>

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
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="overflow-visible">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5 h-full max-w-[320px] mx-auto flex flex-col justify-between"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Icônes technos */}
                  <div className="flex justify-center gap-3 mt-auto">
                    {project.techs?.map((tech, idx) => (
                      <img
                        key={idx}
                        src={getIcon(tech)}
                        alt={tech}
                        className="w-6 h-6"
                        title={tech.toUpperCase()}
                      />
                    ))}
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
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative overflow-y-auto max-h-[90vh]"
          >
            {/* Bouton croix stylé */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl transition"
              aria-label="Fermer la modale"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-6">{selectedProject.description}</p>

            {/* Swiper dans la modale */}
            <Swiper
              spaceBetween={12}
              pagination={{ clickable: true }}
              className="mb-6"
            >
              {selectedProject.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${selectedProject.title} capture ${i + 1}`}
                    className="rounded-xl w-full shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 transition"
              >
                Voir le projet en ligne
              </a>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
