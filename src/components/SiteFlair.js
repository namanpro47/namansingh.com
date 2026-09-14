import { useEffect, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const CONFETTI_COLORS = ["#ff5e7e", "#ff972d", "#a5a6ff", "#5ad1d9", "#5a4fcf", "#ffd166"];

const SiteFlair = () => {
  const spotlightRef = useRef(null);
  const trailRef = useRef(null);
  const progressRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const konamiBufRef = useRef([]);

  // Mouse-aware spotlight + smooth-trailing comet
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mx", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };

    const tick = () => {
      const t = targetRef.current;
      const p = trailPosRef.current;
      p.x += (t.x - p.x) * 0.12;
      p.y += (t.y - p.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${pct / 100})`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Konami code -> confetti burst
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => {
      const buf = konamiBufRef.current;
      buf.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
      if (buf.length > KONAMI.length) buf.shift();
      if (buf.length === KONAMI.length && buf.every((k, i) => k === KONAMI[i])) {
        burstConfetti();
        konamiBufRef.current = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click anywhere -> tiny sparkle (subtle, only on non-interactive surfaces)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onClick = (e) => {
      if (e.target.closest("a, button, input, textarea, select, .mute_indicator, iframe, video")) return;
      sparkleAt(e.clientX, e.clientY);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div ref={progressRef} className="ns_progress_bar" aria-hidden="true" />
      <div ref={spotlightRef} className="ns_cursor_spotlight" aria-hidden="true" />
      <div ref={trailRef} className="ns_cursor_trail" aria-hidden="true" />
    </>
  );
};

const sparkleAt = (x, y) => {
  const root = ensureFxLayer();
  for (let i = 0; i < 6; i++) {
    const s = document.createElement("span");
    s.className = "ns_spark";
    const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.4;
    const dist = 14 + Math.random() * 22;
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    s.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    root.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }
};

const burstConfetti = () => {
  const root = ensureFxLayer();
  const w = window.innerWidth;
  const h = window.innerHeight;
  for (let i = 0; i < 110; i++) {
    const c = document.createElement("span");
    c.className = "ns_confetti";
    const startX = w / 2 + (Math.random() - 0.5) * 80;
    const startY = h / 2 + (Math.random() - 0.5) * 40;
    const angle = Math.random() * Math.PI * 2;
    const speed = 280 + Math.random() * 480;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed - 220;
    const rot = (Math.random() - 0.5) * 720;
    const dur = 1200 + Math.random() * 1200;
    c.style.left = `${startX}px`;
    c.style.top = `${startY}px`;
    c.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    c.style.setProperty("--dx", `${dx}px`);
    c.style.setProperty("--dy", `${dy}px`);
    c.style.setProperty("--rot", `${rot}deg`);
    c.style.animationDuration = `${dur}ms`;
    root.appendChild(c);
    setTimeout(() => c.remove(), dur + 50);
  }
};

const ensureFxLayer = () => {
  let root = document.getElementById("ns_fx_layer");
  if (!root) {
    root = document.createElement("div");
    root.id = "ns_fx_layer";
    root.setAttribute("aria-hidden", "true");
    document.body.appendChild(root);
  }
  return root;
};

export default SiteFlair;
