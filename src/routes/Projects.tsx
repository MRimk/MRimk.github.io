import { Link } from "react-router-dom";
import { projects } from "../lib/markdown-projects";

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl p-6 font-sans">
      <header className="mb-8">
        <div>
          {/* <h2 className="text-xl font-semibold space-y-4 mb-8">Projects</h2> */}
          <h1 className="text-3xl font-bold space-y-4">Projects</h1>
        </div>
      </header>
      <section>
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
    </main>
  );
}
