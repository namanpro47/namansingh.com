import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import axios from "axios"

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      try {
        const response = await axios.post("/api/email", mailData);
        if (response.data.success) {
          setError(false);
          setMailData({ name: "", email: "", message: "" });
          // You may want to display a success message here.
        } else {
          setError(true);
          // You may want to display an error message here.
        }
      } catch (error) {
        setError(true);
        console.error("Error sending email:", error);
        // You may want to display an error message here.
      }
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer name="contact">
      <div className="elisc_tm_contact">
        <div className="tm_content">
          <div className="wrapper">
            <div className="left">
              <div className="elisc_tm_title">
                <span>- Contact</span>
                <h3>Get In Touch</h3>
              </div>
              <div className="text">
                <p>
                  I'm currently growing my experience as a software engineer and tinkering on startup ideas. Feel free to reach me for potential business opportunities!
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <i className="icon-linkedin-2"/> <a href="https://www.linkedin.com/in/namansingh/" target="_blank">Connect on LinkedIn</a>
                  </li>
                  <li>
                    <i className="icon-mail-3"/> <a href="mailto:naman@vt.edu">naman@vt.edu</a>
                  </li>
                  <li>
                    <i className="icon-location"/> <a className="href_location">
                      San Francisco, California
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Sorry, something went wrong. Did you fill out all the required fields?"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          autoComplete="off"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                          type="text"
                          placeholder="Your email"
                          autoComplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      placeholder="Write something..."
                    />
                  </div>
                  <div className="elisc_tm_button">
                    <input type="submit" value="Submit now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="elisc_tm_map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <img
                  width="100%"
                  src="img/header-bg-crop.png"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
