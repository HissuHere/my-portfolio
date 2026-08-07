import { useEffect, useRef, useState } from "react";
import { PERSON } from "../data/cv";
import { MailIcon, XIcon, InstagramIcon, ArrowRightIcon } from "./icons";

const ROLES = [
  "Software Development Intern",
  "Frontend Developer",
  "Game Systems Builder",
  "Self-taught, always shipping",
];

const TYPING_MS = 70;
const DELETING_MS = 35;
const HOLD_MS = 2000;

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Typewriter() {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const indexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(ROLES[0]);
      return;
    }

    let cancelled = false;
    let timer;

    const apply = (next) => {
      textRef.current = next;
      setText(next);
    };

    const tick = () => {
      if (cancelled) return;
      const word = ROLES[indexRef.current % ROLES.length];

      if (!deletingRef.current) {
        const next = word.slice(0, textRef.current.length + 1);
        apply(next);
        if (next === word) {
          timer = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, HOLD_MS);
          return;
        }
      } else {
        const next = word.slice(0, textRef.current.length - 1);
        apply(next);
        if (next === "") {
          deletingRef.current = false;
          indexRef.current += 1;
          timer = setTimeout(tick, 250);
          return;
        }
      }

      timer = setTimeout(tick, deletingRef.current ? DELETING_MS : TYPING_MS);
    };

    timer = setTimeout(tick, 400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <span className="text-accent dark:text-accent-dark">
      {text}
      <span
        aria-hidden="true"
        className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-accent dark:bg-accent-dark"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center scroll-mt-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20 md:pt-24">
        <p className="mb-4 font-mono text-sm text-accent2 dark:text-accent2-dark">
          {"// "}hello world, my name is
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-ink-light sm:text-6xl lg:text-7xl">
          Hasnain
          <br />
          <span className="text-accent dark:text-accent-dark text-glow">
            Amir
          </span>
          <span className="text-ink/50 dark:text-ink-light/50">.</span>
        </h1>

        <p className="mt-6 font-mono text-lg text-ink/80 dark:text-ink-light/80 sm:text-xl">
          <span className="text-ink/40 dark:text-ink-light/40">$ </span>
          <Typewriter />
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ink-light/70">
          {PERSON.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="
              group inline-flex items-center gap-2 rounded-md
              bg-accent dark:bg-accent-dark px-5 py-3
              font-mono text-sm text-white dark:text-ink
              transition-all hover:shadow-glow
            "
          >
            view my work
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            className="
              inline-flex items-center gap-2 rounded-md px-5 py-3
              font-mono text-sm border border-line dark:border-line-dark
              text-ink/80 dark:text-ink-light/80
              transition-colors hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
            "
          >
            <MailIcon size={16} />
            get in touch
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-ink/60 dark:text-ink-light/60">
          <a
            href={PERSON.email}
            className="group inline-flex items-center gap-2 transition-colors hover:text-accent dark:hover:text-accent-dark"
          >
            <MailIcon size={16} className="text-accent/70 dark:text-accent-dark/70 transition-transform group-hover:scale-110" />
            email
          </a>
          <a
            href={PERSON.x}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-accent dark:hover:text-accent-dark"
          >
            <XIcon size={15} className="text-accent2/70 dark:text-accent2-dark/70 transition-transform group-hover:scale-110" />
            {PERSON.xHandle}
          </a>
          <a
            href={PERSON.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-magenta dark:hover:text-magenta-dark"
          >
            <InstagramIcon size={16} className="text-magenta/70 dark:text-magenta-dark/70 transition-transform group-hover:scale-110" />
            @{PERSON.instagramHandle}
          </a>
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
          <span className="animate-bounce text-accent/70 dark:text-accent-dark/70">↓</span>
        </span>
      </a>
    </section>
  );
}
