import { useParams, Link } from "react-router-dom";
import { getCatBySlug, formatDate, ageString } from "../lib/markdown";

export default function ProjectDetail() {
  const { slug } = useParams();
  const cat = getCatBySlug(slug || "");

  if (!cat) return <p>Katė nerasta.</p>;

  return (
    <article className="detail">
      <img className="hero" src={cat.image} alt={cat.name} />
      <div>
        <h2>{cat.name}</h2>
        <p>
          <strong>Veislė:</strong> {cat.breed}
        </p>
        <p>
          <strong>Lytis:</strong> {cat.gender}
        </p>
        <p>
          <strong>Gimimo data:</strong> {formatDate(cat.birthdate)} (
          {ageString(cat.birthdate)})
        </p>
        {cat.litter && (
          <p>
            <strong>Vada:</strong>{" "}
            <Link to={`/litters/${cat.litter}`}>{cat.litter}</Link>
          </p>
        )}
        {cat.mother && (
          <p>
            <strong>Motina:</strong> {cat.mother}
          </p>
        )}
        {cat.father && (
          <p>
            <strong>Tėvas:</strong> {cat.father}
          </p>
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: cat.html }} />
      </div>
      <p>
        <Link to="/cats">← Atgal į kačių sąrašą</Link>
      </p>
    </article>
  );
}
