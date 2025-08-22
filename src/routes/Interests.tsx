import { Link } from "react-router-dom";
import { reports } from "../lib/markdown-running";
import { formatDate } from "../lib/markdownlib";

export default function Interests() {
  return (
    <main className="mx-auto max-w-3xl p-6 font-sans">
      <header className="mb-8">
        <div>
          <h1 className="text-3xl font-bold space-y-4">Interests</h1>
        </div>
      </header>
      <section>
        <p>
          You will find me running. I have been training since 2019, and have
          reached quite high personal bests. I am definitely not a pro runner,
          but just a high-level amateur. Recently I've got myself into trail
          running by being accepted to Lithuanian national team to respresent
          Lithuania at World Mountain and Trail Running Championships 2025 in
          Pyrennes, Spain. You can find me on{" "}
          <a href="https://www.strava.com/athletes/47745544">Strava</a>.
        </p>
      </section>
      <section className="mt-8">
        <h3 className="text-xl font-semibold space-y-4 mb-4">
          Running race reports
        </h3>
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
    </main>
  );
}

// for the future: write race reports here, same as with projects
