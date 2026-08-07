import Section from "./Section";
import { EXPERIENCE } from "../data/cv";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      subtitle="Projects, platforms and open-source work where I've built real things."
    >
      <div className="relative space-y-6">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent2 to-transparent dark:from-accent-dark dark:via-accent2-dark" />

        {EXPERIENCE.map((job, i) => (
          <div
            key={i}
            className="glass relative rounded-xl p-6 pl-9 transition-all duration-300 hover:border-accent/50 dark:hover:border-accent-dark/50"
          >
            <span
              className="absolute left-0 top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent dark:border-accent-dark bg-bg dark:bg-bg-dark"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-light">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-ink/50 dark:text-ink-light/50">
                {job.period}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-sm text-accent dark:text-accent-dark">
              @ {job.org}
            </p>

            <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed text-ink/80 dark:text-ink-light/80">
              {job.points.map((point, j) => (
                <li key={j} className="list-disc marker:text-accent/60 dark:marker:text-accent-dark/60">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
