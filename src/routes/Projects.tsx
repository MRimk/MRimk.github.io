import { Link } from "react-router-dom";
import { projects } from "../lib/markdown";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <h3>{p.name}</h3>
              <p>{p.type}</p>
              <p>Year: {p.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
