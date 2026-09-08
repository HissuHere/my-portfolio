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
      subtitle="The short version of who I am and what I'm about."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 leading-relaxed text-ink/80 dark:text-ink-light/80">
          <p>
            I got into code by making games, scripting gameplay in{" "}
            <span className="font-mono text-sm">Luau</span> on Roblox and messing
            with command blocks in Minecraft. One project led to another, and now
            I build for the web.
          </p>
          <p>
            These days I&apos;m interning at{" "}
            <a
              href={PERSON.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-accent-dark hover:underline"
            >
              {PERSON.company}
            </a>
            , where I&apos;m getting real experience on real projects. I build
            with <span className="font-mono text-sm">React</span> and{" "}
            <span className="font-mono text-sm">Tailwind</span>, and I&apos;m
            learning <span className="font-mono text-sm">Node.js</span> and
            databases to go full stack. Most of my learning comes from just
            starting projects and figuring them out along the way.
          </p>
          <p>
            Outside of code I&apos;m at the gym, gaming, or trying out something
            new. I&apos;m {PERSON.age}, still in school, and I build something
            almost every day.
          </p>
        </div>

        <div className="space-y-4">
          <div className="card card-hover rounded-xl p-6">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-ink-light/50">
              current focus
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
              <div key={stat.label} className="card rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-bold text-ink dark:text-ink-light">
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
