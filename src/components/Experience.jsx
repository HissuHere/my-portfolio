import Section from "./Section";
import { EXPERIENCE } from "../data/cv";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      subtitle="Where I've spent time building real things."
    >
      <div className="relative space-y-6">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line dark:bg-line-dark" />

        {EXPERIENCE.map((job, i) => (
          <div
            key={i}
            className={
              job.featured
                ? "card card-hover relative rounded-xl border border-accent/50 dark:border-accent-dark/50 p-6 pl-9"
                : "card card-hover relative rounded-xl p-6 pl-9"
            }
          >
            <span
              className={
                job.featured
                  ? "absolute left-0 top-7 h-3 w-3 -translate-x-1/2 rounded-full border border-accent/70 dark:border-accent-dark/70 bg-accent dark:bg-accent-dark"
                  : "absolute left-0 top-7 h-3 w-3 -translate-x-1/2 rounded-full border border-line dark:border-line-dark bg-bg dark:bg-bg-dark"
              }
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-light">
                {job.role}
              </h3>
              <span
                className={
                  job.featured
                    ? "font-mono text-xs text-accent dark:text-accent-dark"
                    : "font-mono text-xs text-ink/50 dark:text-ink-light/50"
                }
              >
                {job.period}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-sm text-accent dark:text-accent-dark">
              @{" "}
              {job.orgUrl ? (
                <a
                  href={job.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {job.org}
                </a>
              ) : (
                job.org
              )}
            </p>

            {job.badge && (
              <span
                className="
                  mt-3 inline-flex items-center gap-1.5 rounded-full
                  border border-accent/40 dark:border-accent-dark/40
                  bg-accent/10 dark:bg-accent-dark/10
                  px-3 py-1 font-mono text-[10px] uppercase tracking-widest
                  text-accent dark:text-accent-dark
                "
              >
                <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 dark:bg-accent-dark" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                </span>
                {job.badge}
              </span>
            )}

            <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed text-ink/80 dark:text-ink-light/80">
              {job.points.map((point, j) => (
                <li
                  key={j}
                  className={
                    job.featured
                      ? "list-disc marker:text-accent/50 dark:marker:text-accent-dark/50"
                      : "list-disc marker:text-ink/30 dark:marker:text-ink-light/30"
                  }
                >
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
