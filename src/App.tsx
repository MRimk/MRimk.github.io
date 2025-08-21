import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Interests from "./routes/Interests";
import ProjectDetail from "./routes/ProjectDetail";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </main>
    </Layout>
  );
}

// import { useMemo } from "react";

// type Job = {
//   role: string;
//   company: string;
//   period: string;
//   bullets: string[];
// };

// const jobs: Job[] = [
//   {
//     role: "Frontend Engineer",
//     company: "ACME Corp",
//     period: "2022 — Present",
//     bullets: [
//       "Built accessible design system in React + TypeScript",
//       "Improved Lighthouse Perf from 63 → 97",
//       "Led migration to Vite and PNPM workspaces",
//     ],
//   },
//   {
//     role: "Research Assistant",
//     company: "EPFL",
//     period: "2020 — 2022",
//     bullets: [
//       "Prototyped data viz tools with D3 and React",
//       "Co-authored paper on visualization pipelines",
//     ],
//   },
// ];

// export default function App() {
//   const yearsExp = useMemo(() => {
//     const start = new Date("2020-01-01");
//     return new Date().getFullYear() - start.getFullYear();
//   }, []);

//   return (
//     <main className="mx-auto max-w-3xl p-6 font-sans">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">Your Name</h1>
//         <p className="text-sm opacity-80">
//           Frontend Engineer • {yearsExp}+ yrs • your.email@example.com •
//           linkedin.com/in/you
//         </p>
//       </header>

//       <section className="space-y-3 mb-8">
//         <h2 className="text-xl font-semibold">About</h2>
//         <p>
//           I craft fast, accessible web apps with React, TypeScript, and Vite.
//           Passionate about developer experience and clean design systems.
//         </p>
//       </section>

//       <section className="space-y-4 mb-8">
//         <h2 className="text-xl font-semibold">Experience</h2>
//         {jobs.map(({ role, company, period, bullets }) => (
//           <article key={role + company} className="border rounded-2xl p-4">
//             <div className="flex flex-wrap items-baseline justify-between gap-2">
//               <h3 className="text-lg font-medium">
//                 {role} • {company}
//               </h3>
//               <span className="text-sm opacity-80">{period}</span>
//             </div>
//             <ul className="list-disc ps-6 mt-2 space-y-1">
//               {bullets.map((b, i) => (
//                 <li key={i}>{b}</li>
//               ))}
//             </ul>
//           </article>
//         ))}
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold">Skills</h2>
//         <p>
//           React, TypeScript, Vite, React Router, Node, Testing Library,
//           Playwright
//         </p>
//       </section>

//       <footer className="mt-10 text-xs opacity-70">
//         © {new Date().getFullYear()} Your Name
//       </footer>
//     </main>
//   );
// }
