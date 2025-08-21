import { Link } from "react-router-dom";
import { reports } from "../lib/markdown-running";
import { formatDate } from "../lib/markdownlib";

export default function Interests() {
  return (
    <section>
      <h2>Interests</h2>
      <p>You'll find me running.</p>

      <h3>Running race reports</h3>
      <div className="grid">
        {reports.map((r) => (
          <Link key={r.slug} to={`/interests/${r.slug}`} className="card">
            <img src={r.image} alt={r.name} />
            <div className="card-body">
              <h3>{r.name}</h3>
              <p>{r.distance}</p>
              <p>Date: {formatDate(r.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// for the future: write race reports here, same as with projects
