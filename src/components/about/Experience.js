import { context } from "@/src/context/context";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";

const experiences = [
  {
    id: 1,
    image: "img/experience/1.jpg",
    date: "2023 - 2024",
    company: "Stellar",
    designation: "Senior Software Engineer",
    description: "At Stellar I was the sole engineer on the API Engineering team. I built out a fully-featured API to manage the entire lifecycle of home repairs for large REITs and property management companies.",
    link: "https://mystellar.com/",
  },
  {
    id: 2,
    image: "img/experience/2.jpg",
    date: "2022 - 2023",
    company: "Modern Treasury",
    designation: "Software Engineer",
    description: "At Modern Treasury, a Series C FinTech startup for money movement, I built the Ledgers product: a source-of-truth database for transactions and balances in financial platforms.",
    link: "https://www.moderntreasury.com/products/ledgers",
  },
  {
    id: 3,
    image: "img/experience/3.jpg",
    date: "2020 - 2022",
    company: "MassApply",
    designation: "Founder / CEO",
    description: "Platform for job-seekers to easily apply to companies, cold-email recruiters, and track their applications. Since launching, MassApply has supported 13,000+ total registered users.",
    link: "https://www.massapply.com/",
  },
  {
    id: 4,
    image: "img/experience/4.jpg",
    date: "2021",
    company: "Opendoor",
    designation: "Software Engineer Intern",
    description: "As part of the ML Infra team for Opendoor's home valuation model, I simplified the home value bulk predictions pipeline by consolidating multiple Airflow & Spark based-ETLs.",
    link: "https://www.opendoor.com/",
  },
  {
    id: 5,
    image: "img/experience/1.jpg",
    date: "2020",
    company: "Reddit",
    designation: "Software Engineer Intern",
    description: "Worked on the Ads & Monetization team to implement a bid suggestions feature and create a new forecasting service for Reddit’s ad-serving platform. I worked with Python, Thrift, and Airflow.",
    link: "https://www.redditforbusiness.com/advertise",
  },
  {
    id: 6,
    image: "img/experience/1.jpg",
    date: "2019",
    company: "Oracle",
    designation: "Software Engineer Intern",
    description: "Worked on a new blockchain-based payments platform as part of the FinTech team. I built the API application layer for this platform using GraphQL, Golang, and Kubernetes.",
    link: "https://www.ghostmode.ai/",
  },
];

const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <SectionContainer name="experience">
    <div className="elisc_tm_experience">
      <div className="tm_content">
        <div className="elisc_tm_title">
          <span>- Experience</span>
          <h3>What I've Worked On</h3>
        </div>
        <div className="list">
          <ul>
            {experiences.map((experience) => (
              <li key={experience.id}>
                <img
                  className="popup_image"
                  src="img/experience/1.jpg"
                  alt="image"
                />
                <div className="list_inner">
                  <div className="short">
                    <div className="job">
                      
                      <h3>{experience.company}{" "}<i className="icon-link" /></h3>
                      <span className="yellowColor">{experience.date}</span>
                    </div>
                    <div className="place">
                      <span>{experience.designation}</span>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                    {experience.description}
                    </p>
                  </div>
                  <a
                    className="elisc_tm_full_link"
                    href={experience.link}
                    target="_blank"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </SectionContainer>
  );
};
export default Experience;
