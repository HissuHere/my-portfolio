import { PERSON } from "../data/cv";

export default function Footer() {
  return (
    <footer className="print-hidden relative border-t border-line dark:border-line-dark py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-ink/40 dark:text-ink-light/40">
          © {new Date().getFullYear()} {PERSON.name} · built with React + Tailwind + Three.js
        </p>
        <p className="font-mono text-xs text-ink/40 dark:text-ink-light/40">
          <span className="text-accent dark:text-accent-dark">$ </span>
          cd /home/{PERSON.name.toLowerCase().split(" ")[0]}
        </p>
      </div>
    </footer>
  );
}
