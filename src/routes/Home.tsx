export default function Home() {
  return(
    <section className="space-y-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight">Hi there 👋</h2>

      <p className="text-lg leading-relaxed max-w-2xl mx-auto">
        I'm <span className="font-semibold">Martynas</span>, a Computer Science
        master's student at <span className="font-semibold">EPFL, Switzerland</span>.
        I’m passionate about <span className="italic">computer networks</span> and{" "}
        <span className="italic">operating systems</span>.
      </p>

      <p className="text-lg leading-relaxed max-w-xl mx-auto">
        On this site you’ll find my CV, a showcase of my projects, and a glimpse
        into some of my interests.
      </p>

      <p className="text-lg leading-relaxed max-w-xl mx-auto">
        Feel free to reach out if you'd like to discuss work opportunities or
        just want to chat about <span className="font-medium">running 🏃‍♂️</span>!
      </p>

      <div className="pt-6">
        <a
          href="/projects"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
