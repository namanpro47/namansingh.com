import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
const homeData = {
  skills: ["Scrappy Engineer", "Hustling Entrepreneur", "Passionate Creator", "Lifelong Coder"],
};
const Home = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  });
  const { navChange } = useContext(context);
  return (
    <SectionContainer name={"home"}>
      <div className="elisc_tm_home">
        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>
                  Hey, I'm <span className="blueColor">Naman!</span>
                </h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc"></span>{" "}
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
                <h3>Based in SF</h3>
              </div>
              <div className="subtitle">
                <p>
                  I've been building software for <span className="blueColor">8+ years</span>, and scaling startups for <span className="blueColor">4+ years</span>, with no plans on slowing down. Shoot me a message on LinkedIn or email if I can help you or you can help me!
                </p>
              </div>
              <div className="buttons">
                <div className="elisc_tm_button transition_link">
                  <a href="https://www.linkedin.com/in/namansingh/" target="_blank">
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
                    <a href="mailto:naman@vt.edu">naman@vt.edu</a>
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
              <img src="img/about/2.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
