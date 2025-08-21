import { useParams, Link } from "react-router-dom";
import { getProjectsBySlug } from "../lib/markdown-projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectsBySlug(slug || "");

  if (!project) return <p>Project not found.</p>;

  return (
    <article className="detail">
      <img className="hero" src={project.image} alt={project.name} />
      <div>
        <h2>{project.name}</h2>
        <p>
          <strong>Type:</strong> {project.type}
        </p>
        <p>
          <strong>Finished:</strong> {project.year}
        </p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
      {/* Action buttons */}
      <div className="flex gap-4">
        {project.pdf && (
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            📄 Download PDF
          </a>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            🔗 Visit Project
          </a>
        )}
      </div>
      <p>
        <Link
          to="/projects"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Back to all projects
        </Link>
      </p>
    </article>
  );
}
