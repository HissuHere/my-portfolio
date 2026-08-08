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
            I got into this through games. I spent hours scripting gameplay
            systems in <span className="font-mono text-sm">Luau</span> on Roblox
            and wiring up command blocks in Minecraft, not because I was trying
            to learn to code, just because I wanted stuff to happen. Somewhere
            along the way I realised I was actually building logic, state and
            systems, and it just clicked. I&apos;m still doing that now, just
            with better tools.
          </p>
          <p>
            Right now I&apos;m working at{" "}
            <a
              href={PERSON.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-accent-dark hover:underline"
            >
              {PERSON.company}
            </a>
            , getting real experience on real projects. On my own time I build
            with <span className="font-mono text-sm">React</span>,{" "}
            <span className="font-mono text-sm">Tailwind CSS</span> and{" "}
            <span className="font-mono text-sm">Vite</span>, and I&apos;m
            learning the backend, <span className="font-mono text-sm">Node.js</span>,
            {" "}<span className="font-mono text-sm">Express</span> and databases,
            so I can go full stack. I also like digging into big open-source
            codebases like QGroundControl just to see how real apps are put
            together.
          </p>
          <p>
            Outside of code I&apos;m at the gym, playing games, or
            experimenting with something new. I&apos;m {PERSON.age} and still in
            school, but I take this seriously, and I build something almost
            every day.
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
