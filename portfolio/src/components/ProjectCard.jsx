import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({ project, index = 0 }) => {
  // Combine the specific exit animation requirement with the imported fadeIn variant
  const cardVariants = {
    ...fadeIn('up', 'spring', index * 0.1, 0.75),
    exit: { opacity: 0, scale: 0.9 }, // Required for popLayout AnimatePresence
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      exit="exit"
      whileHover={{ y: -8 }}
      className="card overflow-hidden p-0 group flex flex-col h-full"
    >
      {/* Image wrapper */}
      <div className="relative aspect-video sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-textMain mb-2">{project.title}</h3>
        <p className="text-textSecondary text-sm mb-6 flex-grow">{project.description}</p>
        
        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium focus-ring rounded-sm"
          >
            <FiGithub size={18} /> Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium focus-ring rounded-sm"
            >
              <FiExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
