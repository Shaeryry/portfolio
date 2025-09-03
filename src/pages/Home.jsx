import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import projects from "../data/projects.json";
import skills from "../data/skills.json";

const showcaseImages = [
  "/showcase/code.gif",
  "/showcase/design.gif",
  "/showcase/roblox.gif"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Cycle through showcase images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {/* Rotating blurred background */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={showcaseImages[index]}
            alt="Showcase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full object-cover blur-lg"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Intro Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Hi, I'm Your Name 👋
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            I build interactive games, modern web apps, and backend services.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
