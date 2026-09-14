import { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
import VideoCard from "./VideoCard";
import { videosData } from "./Content";

const homeData = {
  skills: ["Scrappy Engineer", "Problem Solver", "Passionate Creator", "Lifelong Coder"],
};

const Home = () => {
  const [text, setText] = useState(0);
  const [heroUnmuted, setHeroUnmuted] = useState(false);
  const heroRef = useRef(null);
  const videoWrapRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((t) => (t < homeData.skills.length - 1 ? t + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse-aware parallax: shapes drift, video card tilts
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const hero = heroRef.current;
    if (!hero) return;

    let raf = 0;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        hero.style.setProperty("--px", x.toFixed(3));
        hero.style.setProperty("--py", y.toFixed(3));
        if (videoWrapRef.current) {
          videoWrapRef.current.style.setProperty("--vrx", `${(-y * 6).toFixed(2)}deg`);
          videoWrapRef.current.style.setProperty("--vry", `${(x * 6).toFixed(2)}deg`);
        }
      });
    };
    const onLeave = () => {
      hero.style.setProperty("--px", 0);
      hero.style.setProperty("--py", 0);
      if (videoWrapRef.current) {
        videoWrapRef.current.style.setProperty("--vrx", "0deg");
        videoWrapRef.current.style.setProperty("--vry", "0deg");
      }
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const { navChange } = useContext(context);

  return (
    <SectionContainer name={"home"}>
      <div className="elisc_tm_home" ref={heroRef}>
        {/* Decorative parallax shapes */}
        <div className="ns_hero_shapes" aria-hidden="true">
          <span className="ns_shape ns_shape--ring" />
          <span className="ns_shape ns_shape--blob" />
          <span className="ns_shape ns_shape--squiggle">
            <svg viewBox="0 0 120 30" fill="none">
              <path d="M2 15 Q 17 0, 32 15 T 62 15 T 92 15 T 122 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="ns_shape ns_shape--cross">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="ns_shape ns_shape--dot" />
          <span className="ns_shape ns_shape--triangle" />
        </div>

        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>
                  Hey, I'm <span className="blueColor">Naman!</span>
                  <span className="ns_wave" role="img" aria-label="waving hand">
                    👋
                  </span>
                </h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    <span className="blc"></span>
                    <span className="cd-words-wrapper">
                      {homeData.skills.map((skill, i) => (
                        <b
                          key={i}
                          className={text === i ? "is-visible" : "is-hidden"}
                        >
                          {skill}
                        </b>
                      ))}
                    </span>
                  </span>
                </h3>
                <h3>Based in <span className="ns_underline_swirl">SF</span></h3>
              </div>
              <div className="subtitle">
                <p>
                  I've been building software for <span className="blueColor">8+ years</span>, and scaling startups for <span className="blueColor">4+ years</span>, with no plans on slowing down. Shoot me a message on LinkedIn or email if I can help you or you can help me!
                </p>
              </div>
              <div className="buttons">
                <div className="elisc_tm_button transition_link">
                  <a href="https://www.linkedin.com/in/namansingh/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn <i className="icon-linkedin-2" />
                  </a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Email Me <i className="icon-mail-3" />
                  </a>
                </div>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a>Naman Singh</a>
                  </li>
                  <li>
                    <a href="mailto:me@namansingh.com">me@namansingh.com</a>
                  </li>
                  <li>
                    <a className="href_location">
                      San Francisco, CA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="ns_video_tilt" ref={videoWrapRef}>
                <div className="elisc_tm_videos elisc_tm_hero_video">
                  <div className="videos_list">
                    <ul>
                      <VideoCard
                        video={videosData[0]}
                        isUnmuted={heroUnmuted}
                        onToggleMute={() => setHeroUnmuted((m) => !m)}
                        showTitle={false}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="ns_scroll_cue" aria-hidden="true">
          <span className="ns_scroll_cue_label">scroll</span>
          <span className="ns_scroll_cue_track">
            <span className="ns_scroll_cue_dot" />
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;
