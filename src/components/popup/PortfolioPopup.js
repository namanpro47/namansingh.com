import { context } from "@/src/context/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const PortfolioPopup = () => {
  const { setexperienceModal } = useContext(context);
  return (
    <ModalContainer nullValue={setexperienceModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url="img/portfolio/postgenmock.png"
            style={{ backgroundImage: 'url("img/portfolio/postgenmock.png")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <span className="category">
            <a>12 Monthly Paying Enterprise Customers</a>
          </span>
          <a href="https://www.postgen.io/" target="_blank"><h3 className="title">PostGen.io</h3></a>
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
            <a href="https://www.postgen.io/" target="_blank">PostGen</a> is a tool that gives you verified emails of people who liked/commented on any LinkedIn post that you specify. I deployed a pipeline that sifts through a combination of web scraping APIs and lead generation tools to deliver a spreadsheet of all relevant contact information.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">B2B SaaS</a>
                </span>
              </li>
              <li>
                <span className="first">Timeline</span>
                <span>Jan 2022 - May 2022</span>
              </li>
              <li>
                <span className="first">Link</span>
                <ul className="share">
                  <li>
                    <a href="https://www.postgen.io/" target="_blank">
                      <i className="icon-link" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/postgen1.png"
                    style={{ backgroundImage: 'url("img/portfolio/postgen1.png")' }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/pgbanner.png"
                    style={{ backgroundImage: 'url("img/portfolio/pgbanner.png")' }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/pglogo.png"
                    style={{ backgroundImage: 'url("img/portfolio/pglogo.png")' }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalContainer>
  );
};
export default PortfolioPopup;
