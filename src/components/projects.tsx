import { projects } from "./projects"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ProjectCard } from "./ProjectCards";
import { FadeIn } from "./FadeIn";

export const Projects = () => {
  return (
    <div className="space-y-20">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <TypeAnimation
            sequence={[
              "Projects",
              1500, 
              "",   
              500,  
              "Projects",
              1500,
            ]}
            wrapper="span" 
            speed={50} 
            repeat={Infinity} 
            className="text-black dark:text-white inline-block" 
            cursor={true} 
          />
        </h1>
        <FadeIn>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A selection of my personal and collaborative projects, showcasing my skills in software development and problem-solving.
        </p>
      </FadeIn>
      </motion.section>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <ProjectCard 
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};