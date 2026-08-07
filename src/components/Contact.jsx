import Section from "./Section";
import { PERSON } from "../data/cv";
import {
  MailIcon,
  XIcon,
  InstagramIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "./icons";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      subtitle="Got an internship, a project, or just want to say hi?"
    >
      <div className="glass card-glow relative overflow-hidden rounded-2xl p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <p className="font-mono text-sm text-accent dark:text-accent-dark">
          {"// "}my inbox is always open
        </p>

        <h3 className="mt-4 font-display text-3xl font-bold text-ink dark:text-ink-light sm:text-4xl">
          Let&apos;s build something{" "}
          <span className="text-accent dark:text-accent-dark text-glow">together</span>.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-ink/70 dark:text-ink-light/70">
          I&apos;m actively looking for a Software Development Internship. If you
          have an opportunity — or just want to talk tech — drop me a message.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PERSON.email}`}
            className="
              inline-flex items-center gap-2 rounded-md
              bg-accent dark:bg-accent-dark px-6 py-3
              font-mono text-sm text-white dark:text-ink
              transition-all hover:shadow-glow
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
              transition-colors hover:border-accent2/60 dark:hover:border-accent2-dark/60 hover:text-accent2 dark:hover:text-accent2-dark
            "
          >
            <XIcon size={15} />
            {PERSON.xHandle}
          </a>
          <a
            href={PERSON.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              transition-colors hover:border-magenta/60 dark:hover:border-magenta-dark/60 hover:text-magenta dark:hover:text-magenta-dark
            "
          >
            <InstagramIcon size={16} />
            @{PERSON.instagramHandle}
          </a>
          <a
            href={`tel:${PERSON.phoneTel}`}
            className="
              inline-flex items-center gap-2 rounded-md px-6 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
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
