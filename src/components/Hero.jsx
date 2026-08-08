import { PERSON } from "../data/cv";
import Scene3D from "./three/Scene";
import { MailIcon, XIcon, InstagramIcon, GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center scroll-mt-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-ink-light sm:text-6xl lg:text-7xl">
              {PERSON.name.split(" ")[0]}
              <br />
              {PERSON.name.split(" ")[1]}
              <span className="text-accent dark:text-accent-dark">.</span>
            </h1>

            <p className="mt-6 text-lg text-ink/70 dark:text-ink-light/70 sm:text-xl">
              {PERSON.title}, based in {PERSON.location}.
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm text-ink/60 dark:text-ink-light/60">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark"
              />
              currently at{" "}
              <a
                href={PERSON.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink/80 dark:text-ink-light/80 hover:text-accent dark:hover:text-accent-dark"
              >
                {PERSON.company}
              </a>
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={`mailto:${PERSON.email}`}
                aria-label="Email"
                title="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink/70 dark:text-ink-light/70 transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark"
              >
                <MailIcon size={16} />
              </a>
              <a
                href={PERSON.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink/70 dark:text-ink-light/70 transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark"
              >
                <XIcon size={15} />
              </a>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink/70 dark:text-ink-light/70 transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href={PERSON.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink/70 dark:text-ink-light/70 transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          <div className="relative hidden aspect-square lg:block">
            <Scene3D />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="
          absolute bottom-8 left-1/2 z-10 -translate-x-1/2
          font-mono text-xs text-ink/40 dark:text-ink-light/40
          transition-colors hover:text-accent dark:hover:text-accent-dark
        "
      >
        <span className="flex flex-col items-center gap-2">
          scroll
          <span aria-hidden="true">↓</span>
        </span>
      </a>
    </section>
  );
}
