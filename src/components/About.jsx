import Section from "./Section";
import { PERSON } from "../data/cv";

const STATS = [
  { value: "3+", label: "years building & experimenting" },
  { value: "2", label: "open-source codebases explored" },
  { value: "10+", label: "projects shipped / in progress" },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      subtitle="A quick look at who I am and what I care about."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-ink/80 dark:text-ink-light/80 leading-relaxed">
          <p>
            Hi, I&apos;m <span className="text-accent dark:text-accent-dark">Hasnain</span> —
            a self-taught developer based in {PERSON.location}. My journey started
            in game environments: scripting gameplay systems in{" "}
            <span className="font-mono text-sm">Luau</span> on Roblox and automating
            worlds with command blocks in Minecraft. That playground taught me the
            fundamentals of logic, state and systems design before I ever touched a
            formal IDE.
          </p>
          <p>
            Today I focus on the modern frontend —{" "}
            <span className="font-mono text-sm">React</span>,{" "}
            <span className="font-mono text-sm">Tailwind CSS</span> and{" "}
            <span className="font-mono text-sm">Vite</span> — turning ideas into
            responsive, interactive interfaces. I also like reading open-source
            codebases like QGroundControl to understand how real, large-scale
            applications are structured.
          </p>
          <p>
            I&apos;m currently looking for a{" "}
            <span className="text-accent dark:text-accent-dark">Software Development
            Internship</span> where I can learn fast, contribute real work, and level
            up alongside a strong team.
          </p>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-xl p-6">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-dark">
              // current focus
            </h3>
            <ul className="space-y-2 text-sm text-ink/80 dark:text-ink-light/80">
              {PERSON.funFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-accent dark:text-accent-dark text-glow">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-ink/60 dark:text-ink-light/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
