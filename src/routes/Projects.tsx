import { Link } from "react-router-dom";
import { cats, ageString, formatDate } from "../lib/markdown";

export default function Projects() {
  return (
    <section>
      <h2>Projectes</h2>
      <div className="grid">
        {cats.map((c) => (
          <Link key={c.slug} to={`/projects/${c.slug}`} className="card">
            <img src={c.image} alt={c.name} />
            <div className="card-body">
              <h3>{c.name}</h3>
              <p>
                {c.breed} • {c.gender}
              </p>
              <p>
                Gimė {formatDate(c.birthdate)} • {ageString(c.birthdate)}
              </p>
              {c.litter && <p className="muted">Vada: {c.litter}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
