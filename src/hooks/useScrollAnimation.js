import { useEffect, useRef } from "react";

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-visible");
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
