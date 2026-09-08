import { useEffect, useRef, useState } from "react";
import { PERSON } from "../data/cv";
import { MailIcon, XIcon, InstagramIcon, GitHubIcon, ArrowRightIcon } from "./icons";

function ProfileCard() {
  const cardRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(document.documentElement.classList.contains("dark") || (!document.documentElement.classList.contains("light") && media.matches));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 10;
        const ry = (px - 0.5) * 12;
        card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
        card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      });
    };
    const onLeave = () => {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const accent = isDark ? "59 130 246" : "234 179 8";

  return (
    <div className="group/card relative mx-auto w-full max-w-sm [perspective:1000px]">
      <div
        ref={cardRef}
        style={{
          "--rx": "0deg",
          "--ry": "0deg",
          "--mx": "50%",
          "--my": "50%",
          "--accent": accent,
        }}
        className="
          relative rounded-2xl border border-line/80 dark:border-line-dark/80
          bg-bg/60 dark:bg-bg-dark/60 p-2.5
          shadow-xl shadow-ink/5 dark:shadow-black/40
          transition-transform duration-200 ease-out will-change-transform
          motion-safe:[transform:rotateX(var(--rx))_rotateY(var(--ry))]
        "
      >
        {/* cursor-following glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background: `radial-gradient(320px circle at var(--mx) var(--my), rgb(var(--accent) / 0.16), transparent 65%)`,
          }}
        />

        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/hasnain.png"
            alt={`Portrait of ${PERSON.name}`}
            width={640}
            height={640}
            loading="eager"
            style={{ filter: "brightness(1.04) contrast(0.97) saturate(1.03) blur(0.5px)" }}
            className="
              aspect-square w-full object-cover
              bg-ink/5 dark:bg-white/5
              motion-safe:scale-[1.02] transition-transform duration-500
              group-hover/card:motion-safe:scale-[1.06]
            "
          />


        </div>
      </div>

      {/* soft ambient glow under the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] opacity-60 blur-2xl"
        style={{ background: `radial-gradient(60% 60% at 50% 60%, rgb(var(--accent) / 0.10), transparent 70%)` }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center scroll-mt-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-ink-light sm:text-6xl lg:text-7xl font-extrabold sm:font-bold">
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
                className="font-medium text-ink/80 dark:text-ink-light/80 hover:text-accent dark:hover:text-accent-dark font-sans"
              >
                {PERSON.company}
              </a>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="
                  group inline-flex items-center gap-2 rounded-md
                  bg-ink dark:bg-ink-light px-5 py-3
                  font-mono text-sm text-bg dark:text-bg-dark
                  hover:opacity-80 transition-opacity
                "
              >
                view projects
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2 rounded-md px-5 py-3
                  font-mono text-sm border border-line dark:border-line-dark
                  text-ink/80 dark:text-ink-light/80
                  hover:border-accent/60 dark:hover:border-accent-dark/60 hover:text-accent dark:hover:text-accent-dark
                  transition-colors
                "
              >
                contact me
              </a>
            </div>

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

          <div className="relative">
            <ProfileCard />
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
