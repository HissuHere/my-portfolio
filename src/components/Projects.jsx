import Section from "./Section";
import { PROJECTS } from "../data/cv";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="A few things I've made while learning."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={i}
            className="card card-hover relative flex flex-col rounded-xl p-6"
          >
            <div className="mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-ink-light/40">
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
                  className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink/60 dark:border-line-dark dark:text-ink-light/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <div className="mt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-ink/80 transition-colors hover:border-accent/60 hover:text-accent dark:border-line-dark dark:text-ink-light/80 dark:hover:border-accent-dark/60 dark:hover:text-accent-dark"
                >
                  View live
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
