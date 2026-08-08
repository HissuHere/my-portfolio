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
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-sm text-ink/40 dark:text-ink-light/40">
          {index}.
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-ink-light">
          {title}
        </h2>
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
