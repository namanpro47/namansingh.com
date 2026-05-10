import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionContainer from "./SectionContainer";
import VideoCard from "./VideoCard";

export const videosData = [
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

const linkedinPosts = [
  {
    id: 1,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7430363302003818496",
    height: 838,
  },
  {
    id: 2,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:6818221739697299457",
    height: 838,
  },
  {
    id: 3,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:6719020118157869056",
    height: 838,
  },
];

const Content = () => {
  const [unmutedId, setUnmutedId] = useState(null);
  return (
    <SectionContainer name="content">
      <div className="elisc_tm_videos">
        <div className="tm_content">
          <div className="elisc_tm_title">
            <span>- Content</span>
            <h3>Featured Content</h3>
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
          <div className="linkedin_list">
            {linkedinPosts.map((post) => (
              <iframe
                key={post.id}
                src={post.src}
                height={post.height}
                width="504"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Embedded LinkedIn post"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="elisc_tm_portfolio">
        <div className="tm_content">
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
                        style={{ backgroundImage: "url(/img/testimonials/matt_headshot.jpeg)" }}
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
                        style={{ backgroundImage: "url(/img/testimonials/daniel_headshot.jpeg)" }}
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
                        style={{ backgroundImage: "url(/img/testimonials/sana_headshot.jpeg)" }}
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
    </SectionContainer>
  );
};

export default Content;
