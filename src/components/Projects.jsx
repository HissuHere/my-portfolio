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
        {PROJECTS.map((project, i) => {
          const Wrapper = project.link ? "a" : "div";
          const linkProps = project.link
            ? { href: project.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <Wrapper
              key={i}
              {...linkProps}
              aria-label={project.link ? `${project.name} — view live` : undefined}
              className="
                group/proj relative block overflow-hidden rounded-xl
                border border-line dark:border-line-dark
                bg-surface dark:bg-surface-dark
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
                card-hover
              "
            >
              {/* full-bleed preview image */}
              <img
                src={project.image}
                alt={`${project.name} preview`}
                width={1280}
                height={800}
                loading="lazy"
                className="
                  aspect-[4/3] w-full object-cover object-top
                  bg-surface dark:bg-surface-dark
                  transition-transform duration-500 ease-out
                  group-hover/proj:motion-safe:scale-[1.05]
                  md:aspect-square lg:aspect-[4/5]
                "
              />

              {/* static name label — visible on desktop when not hovered */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between
                  bg-gradient-to-b from-black/60 to-transparent p-4
                  transition-opacity duration-300
                  group-hover/proj:opacity-0
                  max-md:hidden
                "
              >
                <span className="font-display text-base font-semibold text-white drop-shadow">
                  {project.name}
                </span>
                <span className="rounded-full border border-white/25 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/85 backdrop-blur-sm">
                  {project.highlight}
                </span>
              </div>

              {/* details panel — slides up on hover (desktop), always visible (mobile) */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  bg-bg/95 dark:bg-bg-dark/95
                  backdrop-blur-md border-t border-line dark:border-line-dark
                  p-5
                  transition-transform duration-300 ease-out
                  max-md:static max-md:translate-y-0 max-md:border-t-0 max-md:border-t max-md:border-line max-md:dark:border-line-dark
                  md:translate-y-full md:group-hover/proj:translate-y-0 md:group-focus-visible/proj:translate-y-0
                "
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-light">
                    {project.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink/40 dark:text-ink-light/40 max-md:hidden">
                    {project.highlight}
                  </span>
                </div>

                <p className="line-clamp-4 text-sm leading-relaxed text-ink/70 dark:text-ink-light/70">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink/60 dark:border-line-dark dark:text-ink-light/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.link && (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-accent dark:text-accent-dark">
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
                        className="transition-transform duration-300 group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M9 7h8v8" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}
