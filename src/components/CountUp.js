import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `to` the first time it scrolls into view.
 * - `suffix`: text appended after the number (e.g. "+")
 * - `duration`: ms; defaults to 1600
 * - `format`: optional formatter for the live number (defaults to en-US locale)
 */
const CountUp = ({
  to,
  suffix = "",
  duration = 1600,
  format,
}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const v = Math.round(to * easeOut(t));
        setValue(v);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatter =
    format ||
    ((n) => n.toLocaleString("en-US"));

  return (
    <span ref={ref} className="ns_countup">
      {formatter(value)}
      {suffix}
    </span>
  );
};

export default CountUp;
