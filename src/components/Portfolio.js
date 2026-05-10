import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";

const videosData = [
  {
    id: 1,
    title: "Nooks AI Sequencing Demo",
    src: "/videos/nooks-ai-sequencing-demo.mp4",
  },
  {
    id: 2,
    title: "MassApply Public Demo",
    src: "https://youtu.be/Hl8z_viVL_4",
  },
];

const getYouTubeId = (url) => {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
};

const VideoCard = ({ video, isUnmuted, onToggleMute }) => {
  const ytId = getYouTubeId(video.src);
  const isYouTube = !!ytId;
  const iframeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isYouTube) {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      const cmd = isUnmuted ? "unMute" : "mute";
      win.postMessage(
        JSON.stringify({ event: "command", func: cmd, args: [] }),
        "*"
      );
    } else if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [isUnmuted, isYouTube]);

  const ytSrc = isYouTube
    ? `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1`
    : null;

  return (
    <li>
      <div className="list_inner">
        <div className={`image ${isUnmuted ? "unmuted" : ""}`}>
          <div className="player_wrap">
            {isYouTube ? (
              <iframe
                ref={iframeRef}
                src={ytSrc}
                title={video.title}
                style={{ border: 0 }}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                controlsList="nodownload"
                preload="auto"
              />
            )}
          </div>
          <button
            type="button"
            className="mute_indicator"
            onClick={onToggleMute}
            aria-label={isUnmuted ? "Mute video" : "Unmute video"}
          >
            {isUnmuted ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
            <span>{isUnmuted ? "Mute" : "Tap to unmute"}</span>
          </button>
        </div>
        <div className="details">
          <h3 className="title">{video.title}</h3>
        </div>
      </div>
    </li>
  );
};

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [unmutedId, setUnmutedId] = useState(null);
  return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio">
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
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/home.png" />
                    <a
                      className="elisc_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=Hl8z_viVL_4"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">13,000+ Users & $30k Awarded</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube"
                        href="https://www.youtube.com/watch?v=Hl8z_viVL_4"
                      >
                        MassApply.com
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/ghosthome.png" />
                    <a
                      className="elisc_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=eq3MPtI6KWg"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">GPT-4 🤝 LinkedIn</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect popup-youtube"
                        href="https://www.youtube.com/watch?v=eq3MPtI6KWg"
                      >
                        GhostMode.ai
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/slopgame.png" />
                    <a
                      className="elisc_tm_full_link"
                      href="https://slopgame.tv"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://slopgame.tv" target="_blank" rel="noopener noreferrer">AI Image Game</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect"
                        href="https://slopgame.tv"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SlopGame.tv
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/dragonwing.png" />
                    <a
                      className="elisc_tm_full_link"
                      href="https://dragons-beta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://dragons-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Dragon Flight Simulator</a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect"
                        href="https://dragons-beta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dragonwind.io
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/postgenmock.png" />
                    <a
                      className="elisc_tm_full_link portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(true);
                      }}
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        12 Paying Customers
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setPortfolioModal(true);
                        }}
                      >
                        PostGen.io
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/31-36.jpg" alt="image" />
                    <div className="main" data-img-url="img/portfolio/trumpbump2.jpg" />
                    <a
                      className="elisc_tm_full_link portfolio_popup"
                      href="#"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="#"
                      >
                        4,000+ App Downloads
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                      >
                        Naman Mobile Apps
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="elisc_tm_counter">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>10+</h3>
                  <span>Years of Dev Experience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>32,000</h3>
                  <span>LinkedIn &amp; YouTube Audience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>∞</h3>
                  <span>Aura</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* VIDEOS */}
      <div className="elisc_tm_videos">
        <div className="tm_content">
          <div className="elisc_tm_title">
            <span>- Videos</span>
            <h3>Featured Videos</h3>
          </div>
          <div className="videos_list">
            <ul>
              {videosData.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isUnmuted={unmutedId === video.id}
                  onToggleMute={() =>
                    setUnmutedId(unmutedId === video.id ? null : video.id)
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* /VIDEOS */}
      {/* TESTIMONIALS */}
      <div className="elisc_tm_testimonial_wrapper">
        <div className="tm_content">
          <div className="elisc_tm_testimonials">
            <div className="elisc_tm_title" data-position="center">
              <span>- References</span>
              <h3>What do my Colleagues think?</h3>
            </div>
            <div className="testimonials_list">
              <Swiper
                {...sliderProps.testimonial}
                className="owl-carousel owl-theme"
              >
                <SwiperSlide>
                  <div className="text">
                    <p>
                    Naman is a strong, product-minded engineer, as he demonstrated during his time on the Ledgers engineering team at Modern Treasury. I was especially impressed by Naman’s customer and business focus.  Naman is a great asset to any team that values full-stack web development knowledge and customer empathy.
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/matt_headshot.jpeg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Matthew McNierney</h3>
                    </div>
                  </div>
                  <p className="job">Engineering Manager at Modern Treasury</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                    Naman was thrown into an environment where he had to rapidly ramp up. With his patience and willingness to learn, he was able to deliver business impact on a critical path service even amidst all the new context.
                    I'm excited to see what the future holds for Naman!
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/daniel_headshot.jpeg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Daniel Zhang</h3>
                    </div>
                  </div>
                  <p className="job">Engineering Manager at Opendoor</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      I had a blast co-founding MassApply together with Naman. I'm impressed by how he engineered the platform from scratch as our sole engineer, while also relentlessly improving our user growth and product success as CEO. I'd gladly work with Naman again in our next startup!
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/sana_headshot.jpeg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Sana Ahmad</h3>
                    </div>
                  </div>
                  <p className="job">Co-Founder & COO of MassApply</p>
                </SwiperSlide>
                <div className="owl-dots"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <div className="elisc_tm_partners">
        <div className="tm_content">
          <div className="elisc_tm_title">

          </div>
          
        </div>
      </div>
      {/* /PARTNERS */}
    </SectionContainer>
  );
};
export default Portfolio;
