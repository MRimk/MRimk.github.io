import { useParams, Link } from "react-router-dom";
import { getReportsBySlug } from "../lib/markdown-running";
import { formatDate } from "../lib/markdownlib";

export default function RunningReport() {
  const { slug } = useParams();
  const report = getReportsBySlug(slug || "");

  if (!report) return <p>Report not found.</p>;

  return (
    <article className="detail">
      <img className="hero" src={report.image} alt={report.name} />
      <div>
        <h2>{report.name}</h2>
        <p>
          <strong>Distance:</strong> {report.distance} in{" "}
          <strong>{report.time}</strong>
        </p>
        {report.elevation && (
          <p>
            <strong>Elevation:</strong> {report.elevation}
          </p>
        )}

        {report.place && (
          <p>
            <strong>Stadings place:</strong> {report.place}
          </p>
        )}
        <p>
          <strong>Date:</strong> {formatDate(report.date)}
        </p>

        {report.location && (
          <p>
            <strong>Location:</strong> {report.location}
          </p>
        )}
        <p>
          <strong>Type:</strong> {report.type}
        </p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: report.html }}
        />
      </div>
      {/* Action buttons */}
      <div className="flex gap-4">
        {report.results && (
          <a
            href={report.results}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            📄 Race results
          </a>
        )}
      </div>
      <p>
        <Link to="/interests">Back to all interests</Link>
      </p>
    </article>
  );
}
