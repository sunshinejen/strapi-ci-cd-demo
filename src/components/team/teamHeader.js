import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../css/main.css";
import "../../css/team.css";

export default function TeamHeader() {
  return (
    <div className="container">
        <div className="team-header d-flex align-items-center mb-3">
          <div className="desktop">
            <div className="header-card">
              <img src="https://res.cloudinary.com/dlz977spb/image/upload/v1666727116/Mahenoor_Yusuf_ccrhp0.png" alt="headshot" />
              <div className="card-text" style={{ textAlign: "left" }}>
                <h5>Mahenoor Yusuf</h5>
                <p className="position-text">Executive Director</p>
                <p className="hbs">
                  HBS PLDA 2016
                  <a
                    rel="noreferrer"
                    className="link mx-2"
                    href="https://www.linkedin.com/in/mahenoor/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className=" content my-5">
            <p>
              From all around the world, our volunteers are lending their time,
              talents, and unique perspectives to Harvard in Tech Seattle’s
              vision. Striving to make Tech accessible to people of all walks of
              life, our volunteers range from Havard Alumni, to students still
              in school, and professionals who are sharpening their Tech
              literacy.{" "}
            </p>
            <p>
              The beauty of Harvard in Tech Seattle is that all people are
              welcomed. You don’t have to be a Harvard alumni, and you don’t
              have to be in Seattle. If you have a passion for all things Tech
              and for volunteering your time to a good cause, then volunteering
              with Harvard in Tech Seattle is for you!
            </p>
            <p>
              Come join us and meet the fantastic group of volunteers who are
              passionate about Technology and want to give back to society.
            </p>
          </div>
        </div>
      </div>
  )
}
