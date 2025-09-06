// src/pages/Home.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import projects from "../data/projects.json";
import skills from "../data/skills.json";
import SkillBadge from "../components/SkillBadge";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  // Esc closes modal
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  return (
    <div className="font-sans bg-[#0d0d0d] text-white">
      {/* Hero */}
            <section
              id="hero"
              className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 -z-10 bg-[#0d0d0d]" />

              {/* Floating geometric shapes */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => {
                  const rows = 3;
                  const cols = 4;
                  const row = Math.floor(i / cols);
                  const col = i % cols;

                  // Grid base positions
                  const baseTop = (row + 0.5) * (100 / rows);
                  const baseLeft = (col + 0.5) * (100 / cols);

                  // Random offsets, size, orientation
                  const top = `calc(${baseTop}% + ${Math.random() * 30 - 15}px)`;
                  const left = `calc(${baseLeft}% + ${Math.random() * 30 - 15}px)`;
                  const size = 50 + Math.random() * 300; // 40–100px
                  const rotation = Math.random() * 360;

                  // Colors + shape types
                  const colors = ["#f8bbd0", "#bbdefb", "#fff9c4"]; // pink, blue, yellow
                  const color = colors[i % colors.length];
                  const types = ["circle", "square", "squiggle"];
                  const type = types[i % types.length];

                  if (type === "circle") {
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border-2 opacity-40 pointer-events-none"
                        style={{
                          width: size,
                          height: size,
                          top,
                          left,
                          borderColor: color,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          y: [0, -20, 0],
                          rotate: [rotation, rotation + 30, rotation - 30, rotation],
                        }}
                        transition={{
                          duration: 8 + Math.random() * 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  }

                  if (type === "square") {
                    return (
                      <motion.div
                        key={i}
                        className="absolute border-2 opacity-40 pointer-events-none"
                        style={{
                          width: size,
                          height: size,
                          top,
                          left,
                          borderColor: color,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          y: [0, -25, 0],
                          x: [0, 15, 0],
                          rotate: [rotation, rotation + 45, rotation - 45, rotation],
                        }}
                        transition={{
                          duration: 10 + Math.random() * 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  }

                  if (type === "squiggle") {
                    return (
                      <motion.svg
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                          width: size * 2,
                          height: size,
                          top,
                          left,
                          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        }}
                        viewBox="0 0 200 100"
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeOpacity="0.6"
                      >
                        <motion.path
                          d="M10 50 Q 52.5 10, 95 50 T 180 50"
                          animate={{ pathLength: [0.6, 1, 0.6] }}
                          transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.svg>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Hero Content */}
              <div className="relative z-10">
                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Hi, I’m <span className="text-[#f8bbd0]">Rity Kipula</span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  I design & build interactive, high-quality web experiences.
                </motion.p>

                {/* CTA Buttons */}
                <div className="mt-10 flex gap-4 justify-center">
                  <ScrollLink to="projects" smooth duration={600} offset={-72}>
                    <motion.button
                      className="px-6 py-3 rounded-lg border border-[#f8bbd0]/60 text-[#f8bbd0] hover:bg-[#f8bbd0]/10 transition"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      View Projects
                    </motion.button>
                  </ScrollLink>
                  <ScrollLink to="contact" smooth duration={600} offset={-72}>
                    <motion.button
                      className="px-6 py-3 rounded-lg border border-white/25 text-white/90 hover:bg-white/5 transition"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Contact Me
                    </motion.button>
                  </ScrollLink>
                </div>
              </div>
            </section>


            {/* Skills */}
            <section id="skills" className="py-18 md:py-20 bg-[#121212] px-6">
              <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#bbdefb] mb-3">
                  Skills
                </h2>
                <p className="text-white/70">
                  Placeholder
                </p>
              </div>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-lg bg-white/0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <SkillBadge skill={skill} size="lg" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-18 md:py-20 bg-[#0d0d0d] px-6">
              <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#f8bbd0] mb-3">
                  Projects
                </h2>
                <p className="text-white/70">
                  Placeholder
                </p>
              </div>

              <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, idx) => (
                  <motion.article
                    key={idx}
                    className="rounded-xl overflow-hidden border border-white/10 bg-[#141414] shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_60px_-20px_rgba(248,187,208,0.15)] transition-shadow cursor-pointer group"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.06, duration: 0.5 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* GIF */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.cardCover}
                        alt={project.title}
                        className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Darken so bright GIFs don't feel like light blocks */}
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                      {/* Subtle top gradient */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg md:text-xl font-bold text-[#f8bbd0]">
                        {project.title}
                      </h3>
                      {project.short && (
                        <p className="mt-2 text-sm text-white/70">{project.short}</p>
                      )}
                      {Array.isArray(project.tech) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-[11px] tracking-wide rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-white/75"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#141414] p-6"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/5"
                aria-label="Close"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#bbdefb]">
                {selectedProject.title}
              </h3>
              <p className="text-white/80 mb-5 whitespace-pre-line">{selectedProject.description}</p>

              {/* Personal Contribution */}
              {selectedProject.contribution && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#f8bbd0] mb-2">
                    Personal Contribution
                  </h4>
                  <p className="text-white/75 whitespace-pre-line">
                    {selectedProject.contribution}
                  </p>
                </div>
              )}

               {/* Media Grid (cover image, images, local videos, YouTube) */}
              {(selectedProject.image ||
                Array.isArray(selectedProject.images) ||
                Array.isArray(selectedProject.videos) ||
                Array.isArray(selectedProject.youtube)) && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Cover spans full width */}
                  {selectedProject.image && (
                    <div className="col-span-1 sm:col-span-2">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} cover`}
                        className="rounded-lg border border-white/10 w-full object-cover cursor-zoom-in hover:opacity-90 transition"
                        onClick={() => setZoomImage(selectedProject.image)}
                      />
                    </div>
                  )}

                  {/* Local videos */}
                  {Array.isArray(selectedProject.videos) &&
                    selectedProject.videos.map((vid, i) => (
                      <div
                        key={i}
                        className="col-span-1 sm:col-span-2 relative w-full aspect-video rounded-lg overflow-hidden border border-[#f8bbd0]/40 bg-black/40 shadow-lg"
                      >
                        <video
                          src={vid}
                          controls
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    ))}

                  {/* YouTube embeds (span full width like cover) */}
                  {Array.isArray(selectedProject.youtube) &&
                    selectedProject.youtube.map((yt, i) => (
                      <div
                        key={i}
                        className="col-span-1 sm:col-span-2 relative w-full aspect-video rounded-lg overflow-hidden border border-[#bbdefb]/40 bg-black/40 shadow-lg"
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${yt}`}
                          title={`YouTube video ${i + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                        />
                      </div>
                    ))}

                    
                  {/* Additional images */}
                  {Array.isArray(selectedProject.images) &&
                    selectedProject.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                        className="rounded-lg border border-white/10 w-full object-cover cursor-zoom-in hover:opacity-90 transition"
                        onClick={() => setZoomImage(img)}
                      />
                    ))}
                </div>
              )}


              {/* Tech */}
              {Array.isArray(selectedProject.tech) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs rounded-full border border-white/15 bg-black/20 px-3 py-1 text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {(selectedProject.github || selectedProject.itch) && (
                <div className="mt-7 flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#f8bbd0]/60 px-5 py-2.5 text-[#f8bbd0] hover:bg-[#f8bbd0]/10"
                    >
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.itch && (
                    <a
                      href={selectedProject.itch}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#bbdefb]/60 px-5 py-2.5 text-[#bbdefb] hover:bg-[#bbdefb]/10"
                    >
                      Play on Itch.io
                    </a>
                  )}
                </div>
              )}
                            
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Overlay */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-zoom-out"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="py-18 md:py-20 bg-[#121212] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#fff9c4] mb-3">
            Let’s Connect
          </h2>
          <p className="text-white/75 mb-8">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="rounded-lg border border-[#bbdefb]/60 px-6 py-3 text-[#bbdefb] hover:bg-[#bbdefb]/10"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#f8bbd0]/60 px-6 py-3 text-[#f8bbd0] hover:bg-[#f8bbd0]/10"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="rounded-lg border border-white/25 px-6 py-3 text-white/90 hover:bg-white/5"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
