import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Watches an element and flips `isVisible` to true once it scrolls
 * into view. Used to trigger the fade-up CSS animation defined in index.css.
 *
 * Usage:
 *   const [ref, isVisible] = useReveal();
 *   <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // only trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
