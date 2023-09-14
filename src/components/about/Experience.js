import { context } from "@/src/context/context";
import { useContext } from "react";

const experiences = [
  {
    id: 1,
    image: "img/experience/1.jpg",
    date: "2024",
    company: "GhostMode.ai",
    designation: "Co-Founder",
    description: "Personalized AI for building high-performing LinkedIn posts.",
    link: "",
  },
  {
    id: 2,
    image: "img/experience/1.jpg",
    date: "2023",
    company: "Stellar",
    designation: "Sr. Software Engineer",
    description: "Building Client API Integrations for Real Estate Investment Trusts.",
    link: "",
  },
  {
    id: 3,
    image: "img/experience/2.jpg",
    date: "2022",
    company: "Modern Treasury",
    designation: "Software Engineer",
    description: "Built the Ledgers product: a source-of-truth database for transactions and balances in financial platforms.",
    link: "",
  },
  {
    id: 4,
    image: "img/experience/3.jpg",
    date: "2020 - 2022",
    company: "MassApply",
    designation: "Founder / CEO",
    description: "Platform for job-seekers to easily apply to companies, cold-email recruiters, and track their applications. Since launching, MassApply has amassed over 13,000 users and has helped at least 30 people land job offers.",
    link: "",
  },
  {
    id: 5,
    image: "img/experience/4.jpg",
    date: "2021",
    company: "Opendoor",
    designation: "Software Engineer",
    description: "As part of the ML Infra team for Opendoor's home valuation model, I simplified the home value bulk predictions pipeline by consolidating multiple Airflow & Spark based-ETLs.",
    link: "",
  },
  {
    id: 6,
    image: "img/experience/1.jpg",
    date: "2020",
    company: "Reddit",
    designation: "Software Engineer",
    description: "Worked on the Ads & Monetization team to implement a bid suggestions feature and create a new forecasting service for Reddit’s ad-serving platform. I worked with Python, Thrift, and Airflow.",
    link: "",
  },
];

const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <div className="elisc_tm_experience">
      <div className="tm_content">
        <div className="elisc_tm_title">
          <span>- Experience</span>
          <h3>Everything about me!</h3>
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
                      <h3>{experience.company}</h3>
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
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setexperienceModal(experience);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
