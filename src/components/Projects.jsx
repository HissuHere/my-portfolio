import Section from "./Section";
import { PROJECTS } from "../data/cv";

const ACCENT_MAP = {
  accent:
    "text-accent dark:text-accent-dark group-hover:border-accent/60 dark:group-hover:border-accent-dark/60",
  accent2:
    "text-accent2 dark:text-accent2-dark group-hover:border-accent2/60 dark:group-hover:border-accent2-dark/60",
  magenta:
    "text-magenta dark:text-magenta-dark group-hover:border-magenta/60 dark:group-hover:border-magenta-dark/60",
};

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="A few things I've designed and built."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={i}
            className="
              group glass card-glow relative flex flex-col rounded-xl p-6
              border transition-all duration-300
              hover:-translate-y-1
            "
          >
            <div className="mb-4">
              <span
                className={`font-mono text-[11px] uppercase tracking-widest ${ACCENT_MAP[project.accent]}`}
              >
                {project.highlight}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-light">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70 dark:text-ink-light/70">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech, j) => (
                <span
                  key={j}
                  className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink/70 dark:border-line-dark dark:text-ink-light/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
