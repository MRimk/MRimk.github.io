import s from "./About.module.css";

type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type University = {
  name: string;
  degree: string;
  period: string;
  GPA: string;
  description: string;
};

const jobs: Job[] = [
  {
    role: "Master Thesis Internship",
    company: "Oracle Labs",
    period: "2025 - Present",
    bullets: [
      "Building a virtualized network socket interface for the GraalOS project",
    ],
  },

  {
    role: "Summer Internship",
    company: "EPFL",
    period: "2025 Jul - Aug",
    bullets: [
      "Tested, fixed and deployed first stages of an extension to network neutrality measurement tool WeHe",
    ],
  },

  {
    role: "Teaching Assistant",
    company: "EPFL",
    period: "2024 - 2025",
    bullets: [
      "Taught practical course material for Computer Systems and Theory of Computation courses",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "EPFL Spacecraft Team",
    period: "2025 Feb - Jul",
    bullets: [
      "Built a backend tool for GPredict to control and rotate in-house built X-band ground station antenna",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Flyability",
    period: "2024 - 2025",
    bullets: [
      "Implemented 3D user interactions with mesh and point cloud data from drone scans on Android",
      "Created a dedicated Android library for 3D objects display using JNI",
      "Built proof of concepts for easier drone mission planning and piloting",
    ],
  },
  {
    role: "Software Developer",
    company: "VU Amsterdam",
    period: "2022 - 2023",
    bullets: [
      "Built full-stack web app for Software Testing teaching purposes at DBugIT team",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "VU Amsterdam",
    period: "2021 - 2023",
    bullets: [
      "Designed exercises for programming and computer networks courses",
      "Lead lab sessions and office hours",
    ],
  },
];

const universities: University[] = [
  {
    name: "EPFL",
    degree: "MSc in Computer Science",
    period: "2023 - Present",
    GPA: "5.39/6.0",
    description:
      "Focusing on computer networks, computer systems, and decentralized systems. Currently working on a thesis on virtualizing network sockets.",
  },
  {
    name: "VU Amsterdam",
    degree: "BSc in Computer Science",
    period: "2020 - 2023",
    GPA: "8.9/10.0",
    description:
      "Focused on operating systems and deeper understanding of programming and concurrency. Bachelor's thesis on verifying a toy compiler in Lean 3.",
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-3xl p-6 font-sans">
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className={s.avatar}>
          <img
            src="/images/martynas_rimkevicius.jpg"
            alt="Martynas Rimkevičius"
            className={s.img}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Martynas Rimkevičius</h1>
          <p className="text-sm opacity-80">
            Master's Computer Science Student •
            martynas.rimkevicius2001@gmail.com •{" "}
            <a href="https://www.linkedin.com/in/martynas-rimkevicius/">
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">About</h2>
        <p>
          I am mostly interested in computer networks, operating systems, and
          decentralized systems.
        </p>
        <p>I like to make things work and make them fast.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Education</h2>
        {universities.map(({ name, degree, period, GPA, description }) => (
          <article key={name + degree} className="border rounded-2xl p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium">
                {name} • {degree}
              </h3>
              <span className="text-sm opacity-80">{period}</span>
            </div>
            <p className="text-sm opacity-80">GPA: {GPA}</p>
            <p className="mt-2">{description}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Experience</h2>
        {jobs.map(({ role, company, period, bullets }) => (
          <article key={role + company} className="border rounded-2xl p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium">
                {role} • {company}
              </h3>
              <span className="text-sm opacity-80">{period}</span>
            </div>
            <ul className="list-disc ps-6 mt-2 space-y-1">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Skills</h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="align-top">
              <th className="w-32 text-right pr-4 font-semibold">Coding</th>
              <td>C, C++, Python, Go, Kotlin, Java, Coq, Typescript</td>
            </tr>
            <tr className="align-top">
              <th className="w-32 text-right pr-4 font-semibold">Systems</th>
              <td>
                TCP/IP network stack, Linux OS, distributed systems, databases
                and query-based systems
              </td>
            </tr>
            <tr className="align-top">
              <th className="w-32 text-right pr-4 font-semibold">
                Teamworking
              </th>
              <td>Git, CI/CD management, Docker, Agile</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
