import { useReveal } from "../hooks/useReveal";

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className = "",
}) {
  const [ref, isVisible] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} scroll-mt-24 py-20 ${className}`}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent dark:text-accent-dark">
          {index}.
        </span>
        <h2 className="section-label font-mono text-xl uppercase tracking-widest text-ink dark:text-ink-light">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-line dark:bg-line-dark sm:block" />
      </div>

      {subtitle && (
        <p className="-mt-6 mb-10 max-w-xl text-ink/60 dark:text-ink-light/60">
          {subtitle}
        </p>
      )}

      {children}
    </section>
  );
}
