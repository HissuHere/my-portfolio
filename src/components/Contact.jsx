import Section from "./Section";
import { PERSON } from "../data/cv";
import {
  MailIcon,
  XIcon,
  InstagramIcon,
  GitHubIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "./icons";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      subtitle="Got a project in mind, or just want to say hi?"
    >
      <div className="card rounded-2xl p-8 text-center sm:p-14">
        <p className="font-mono text-sm text-ink/50 dark:text-ink-light/50">
          my inbox is always open
        </p>

        <h3 className="mt-4 font-display text-3xl font-bold text-ink dark:text-ink-light sm:text-4xl">
          Let&apos;s build something{" "}
          <span className="text-accent dark:text-accent-dark">together</span>.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-ink/70 dark:text-ink-light/70">
          I&apos;m always happy to talk frontend, backend, games, or tech in
          general. If you want to collaborate or just say hi, my inbox is
          open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PERSON.email}`}
            className="
              inline-flex items-center gap-2 rounded-md
              bg-ink dark:bg-ink-light px-6 py-3
              font-mono text-sm text-bg dark:text-bg-dark
              hover:opacity-80 transition-opacity
            "
          >
            say hello
            <ArrowRightIcon size={16} />
          </a>
          <a
            href={PERSON.x}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
              transition-colors
            "
          >
            <XIcon size={15} />
            {PERSON.xHandle}
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
              transition-colors
            "
          >
            <GitHubIcon size={16} />
            {PERSON.githubHandle}
          </a>
          <a
            href={PERSON.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
              transition-colors
            "
          >
            <InstagramIcon size={16} />@{PERSON.instagramHandle}
          </a>
          <a
            href={`tel:${PERSON.phoneTel}`}
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
              transition-colors
            "
          >
            <PhoneIcon size={16} />
            {PERSON.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
