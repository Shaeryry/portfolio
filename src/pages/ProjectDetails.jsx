import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <p className="text-center p-8">Project not found.</p>;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      {project.background ? (
        project.background.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover blur-lg"
          >
            <source src={project.background} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.background}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover blur-lg"
          />
        )
      ) : null}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-xl">
        {/* Main image */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-6 w-full"
        />

        {/* Title & Description */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        )}

        {/* GitHub link */}
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

        {/* Back link */}
        <div className="mt-6">
          <Link to="/" className="text-gray-500 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
