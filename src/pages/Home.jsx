import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import projects from "../data/projects.json";
import skills from "../data/skills.json";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Your Name 👋</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          I’m a developer passionate about building cool projects and learning
          new technologies.
        </p>
      </section>

      <section id="skills" className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
