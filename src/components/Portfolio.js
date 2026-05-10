import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
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
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
