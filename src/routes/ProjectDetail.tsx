import { useParams, Link } from "react-router-dom";
import { getProjectsBySlug} from "../lib/markdown";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectsBySlug(slug || "");

  if (!project) return <p>Katė nerasta.</p>;

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
        <div className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
      <p>
        <Link to="/projects">Back to all projects</Link>
      </p>
    </article>
  );
}
