// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, idx, onOpen }) {
  // Wrapper: if onOpen is provided, behave like a button; otherwise, fall back to Link
  const Wrapper = ({ children }) =>
    onOpen ? (
      <button
        type="button"
        onClick={() => onOpen(project, idx)}
        aria-label={`Open details for ${project.title}`}
        className="block w-full text-left relative group focus:outline-none"
      >
        {children}
      </button>
    ) : (
      <Link to={`/projects/${idx}`} className="block relative group">
        {children}
      </Link>
    );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl cursor-pointer"
    >
      <Wrapper>
        {/* Project image with gradient overlay */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          {/* Title over image */}
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </Wrapper>

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
      </div>
    </motion.div>
  );
}
