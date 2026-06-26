import { useReveal } from "../hooks/useReveal";

export default function Section({ label, children, className = "" }) {
  const [ref, isVisible] = useReveal();

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} mb-14 print-break-avoid ${className}`}
    >
      {label && (
        <h2 className="section-label font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-dark mb-4">
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}
