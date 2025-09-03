import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow rounded-2xl overflow-hidden p-4 flex flex-col"
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl h-40 object-cover"
      />
      <h3 className="text-xl font-bold mt-3">{project.title}</h3>
      <p className="text-gray-600 flex-grow">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2"
      >
        View Project →
      </a>
    </motion.div>
  );
}