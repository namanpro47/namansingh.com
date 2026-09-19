import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";

const projects = [
  {
    id: "massapply",
    img: "img/portfolio/home.png",
    category: "13,000+ Users · $30k Awarded",
    title: "MassApply.com",
    href: "https://www.youtube.com/watch?v=Hl8z_viVL_4",
    accent: "#ff972d",
  },
  {
    id: "ghostmode",
    img: "img/portfolio/ghosthome.png",
    category: "GPT-4 🤝 LinkedIn",
    title: "GhostMode.ai",
    href: "https://www.youtube.com/watch?v=eq3MPtI6KWg",
    accent: "#a5a6ff",
  },
  {
    id: "slopgame",
    img: "img/portfolio/slopgame.png",
    video: "/videos/portfolio/slopgame.mp4",
    category: "AI Image Game",
    title: "SlopGame.tv",
    href: "https://slopgame.tv",
    external: true,
    accent: "#ff5e7e",
  },
  {
    id: "dragonwind",
    img: "img/portfolio/dragonwing.png",
    video: "/videos/portfolio/dragonwind.mp4",
    category: "Dragon Flight Simulator",
    title: "Dragonwind.io",
    href: "https://dragons-beta.vercel.app/",
    external: true,
    accent: "#5ad1d9",
  },
  {
    id: "postgen",
    img: "img/portfolio/postgenmock.png",
    category: "12 Paying Customers",
    title: "PostGen.io",
    href: "#",
    popup: true,
    accent: "#7aa8ff",
  },
  {
    id: "pokerun",
    img: "img/portfolio/pokerun.png",
    video: "/videos/portfolio/pokerun.mp4",
    category: "1,000+ Players",
    title: "PokeRun.io",
    href: "https://pokerun.io",
    external: true,
    accent: "#ffd166",
  },
  // {
  //   id: "mobile",
  //   img: "img/portfolio/trumpbump2.jpg",
  //   category: "4,000+ App Downloads",
  //   title: "Naman Mobile Apps",
  //   href: "#",
  //   accent: "#ffd166",
  // },
];

const playMuted = (el) => {
  el.muted = true;
  const p = el.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
};

// Muted loop recorded from the live site, layered over the screenshot. The
// screenshot stays visible until the video is actually playing, and remains the
// fallback if it never loads (reduced motion, save-data, blocked autoplay, 404).
const PreviewVideo = ({ src }) => {
  const ref = useRef(null);
  const inView = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || navigator.connection?.saveData) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!el.getAttribute("src")) el.src = src;
          playMuted(el);
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={`ns_proj_video ${playing ? "is-playing" : ""}`}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      // Swiper's loop mode re-appends slides, and detaching a <video> pauses it
      // without the observer noticing; resume if the card is still on screen.
      onPause={() => {
        if (inView.current && document.visibilityState === "visible") {
          playMuted(ref.current);
        }
      }}
      onError={() => setPlaying(false)}
    />
  );
};

const ProjectCard = ({ project, onPopup }) => {
  const ref = useRef(null);
  const rafRef = useRef(0);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
      el.style.setProperty("--gx", `${x * 100}%`);
      el.style.setProperty("--gy", `${y * 100}%`);
    });
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  const handleClick = (e) => {
    if (project.popup) {
      e.preventDefault();
      onPopup();
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="ns_proj_card"
      style={{ "--accent": project.accent }}
    >
      <div className="list_inner">
        <div className="image">
          <img src="img/thumbs/31-36.jpg" alt="image" />
          <div className="main" data-img-url={project.img}>
            {project.video && <PreviewVideo src={project.video} />}
          </div>
          <div className="ns_proj_glare" />
          <a
            className={`elisc_tm_full_link ${project.popup ? "portfolio_popup" : ""}`}
            href={project.href}
            onClick={handleClick}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
          />
        </div>
        <div className="details">
          <span className="category">
            <a
              href={project.href}
              onClick={handleClick}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              {project.category}
            </a>
          </span>
          <h3 className="title">
            <a
              className={`line_effect ${project.popup ? "portfolio_popup" : ""}`}
              href={project.href}
              onClick={handleClick}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              {project.title}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const openPopup = () => {
    modalToggle(true);
    setPortfolioModal(true);
  };

  return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio ns_portfolio_section">
        <div className="tm_content">
          <div className="elisc_tm_portfolio_title">
            <div className="elisc_tm_title">
              <span>- Portfolio</span>
              <h3>Favorite Projects</h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="image" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="image" />
              </a>
            </div>
          </div>
          <div className="portfolio_list">
            <Swiper {...sliderProps.portfolio} className="gallery_zoom">
              {projects.map((p) => (
                <SwiperSlide key={p.id}>
                  <ProjectCard project={p} onPopup={openPopup} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
