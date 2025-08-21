import s from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto p-6">
      {/* Portrait photo */}
      <div className={s.portrait}>
        <img
          src="/images/portrait.jpg"
          alt="Martynas Rimkevičius"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight">Hi there 👋</h2>

        <p className="text-lg leading-relaxed max-w-2xl">
          I'm <span className="font-semibold">Martynas</span>, a Computer
          Science master's student at{" "}
          <span className="font-semibold">EPFL, Switzerland</span>. I'm
          passionate about <span className="italic">computer networks</span> and{" "}
          <span className="italic">operating systems</span>.
        </p>

        <p className="text-lg leading-relaxed max-w-xl">
          On this site you'll find my CV, a showcase of my projects, and a
          glimpse into some of my interests.
        </p>

        <p className="text-lg leading-relaxed max-w-xl">
          Feel free to reach out if you'd like to discuss work opportunities or
          just want to chat about{" "}
          <span className="font-medium">running 🏃‍♂️</span>!
        </p>

        <div className="pt-4">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
