import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MarieTeam - Site de réservation de trajets maritimes",
      description: "Construit avec PHP et JS",
      images: ["/images/marieteam-site.png", "/images/marieteam-site-2.png"]
    },
    {
      id: 2,
      title: "MarieTeam - Application bureautique pour admins",
      description: "Gère les bateaux, génère des brochures PDF. En C#",
      images: ["/images/marieteam-admin.png"]
    },
    {
      id: 3,
      title: "Mon premier portfolio",
      description: "HTML, CSS, JS – Épreuve E5 du BTS SIO",
      images: ["/images/portfolio.png"],
      link: "https://nael-haddadi.vercel.app/"
    },
    {
      id: 4,
      title: "Planiftâches - Application web pour le CHU de Lille",
      description: "Application de planification de tâches à destination de l'équipe de la DRN",
      images: ["/images/planiftaches-web.png"],
      link: ""
    },
    {
      id: 5,
      title: "Planiftâches - Application C#",
      description: "Partie administrateur de Planiftâches",
      images: ["/images/planiftaches-csharp.png"],
      link: ""
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log("Clic sur :", project.title);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="container">
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
        {projects.map(({ id, title, description, images, link }) => (
          <SwiperSlide key={id}>
            <div
              onClick={() => handleProjectClick({ id, title, description, images, link })}
              className="cursor-pointer rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 h-full flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modale simplifiée */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl custom-button"
              aria-label="Fermer la modale"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-6">{selectedProject.description}</p>

            {/* Affiche toutes les images */}
            {selectedProject.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${selectedProject.title} capture ${i + 1}`}
                className="rounded-xl w-full mb-4 shadow-md"
              />
            ))}

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
          </div>
        </div>
      )}
    </section>
  );
}
