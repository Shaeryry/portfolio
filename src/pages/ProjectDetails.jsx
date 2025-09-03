import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <p className="text-center p-8">Project not found.</p>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-6 w-full"
      />
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.longDescription || project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub →
        </a>
      )}
      <div className="mt-6">
        <Link to="/" className="text-gray-500 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
