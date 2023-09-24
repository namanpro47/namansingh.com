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
              <h3>Startups I've Founded</h3>
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
                    <div className="main" data-img-url="img/portfolio/ghosthome.png" />
                    <a
                      className="elisc_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=eq3MPtI6KWg"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="#">Launching soon!</a>
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
                        12 Monthly Paying Enterprise Customers
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
                  <h3>8+</h3>
                  <span>Years of Dev Experience</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>4</h3>
                  <span>Startups Built</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>18,000+</h3>
                  <span>Happy Customers</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
