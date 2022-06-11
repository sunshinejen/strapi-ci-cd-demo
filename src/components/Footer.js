import React from "react";
import "../css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo/HiTS-Logo-new.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div
              className="col-1"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <a href="index.html">
                <img
                  src={logo}
                  className="rounded mx-auto d-block"
                  alt="Logo"
                  width="100em"
                  height="100em"
                />
              </a>
            </div>
            <div className="col-3" />
            <div className="col-8">
              <div
                className="row align-items-start"
                style={{ textAlign: "left" }}
              >
                <div className="col-md">
                  <span className="black-link">Programs</span>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/webinars">
                    <span className="text-muted">Webinar</span>
                  </a>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/podcast">
                    <span className="text-muted">Podcast</span>
                  </a>
                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    href="/young-professionals"
                  >
                    <span className="text-muted">
                      Tech For Young Professionals
                    </span>
                  </a>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/call-for-action">
                    <span className="text-muted">Call For Action</span>
                  </a>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/events">
                    <span className="text-muted">Events</span>
                  </a>
                </div>
                <div className="col-md">
                  <span className="black-link">Buzz</span>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/buzz#speakers">
                    <span className="text-muted">Speakers</span>
                  </a>
                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    href="/buzz#participants"
                  >
                    <span className="text-muted">Participants</span>
                  </a>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/buzz#volunteers">
                    <span className="text-muted">Volunteer</span>
                  </a>
                  <br />
                  <br />
                  <span className="black-link">Volunteer Opportunities</span>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/volunteers">
                    <span className="text-muted">Open Reqs</span>
                  </a>
                </div>
                <div className="col-md">
                  <a style={{ textDecoration: "none" }} href="/team">
                    <span className="black-link">Team</span>
                  </a>
                  <br />
                  <a style={{ textDecoration: "none" }} href="/contact">
                    <span className="black-link">Contact Us</span>
                  </a>
                  <br />
                  <div className="social-media">
                    <a
                      target="blank"
                      href="https://www.linkedin.com/company/harvard-in-tech-seattle/"
                    >
                      <FontAwesomeIcon
                        className=""
                        icon={faLinkedin}
                        color="black"
                      />
                    </a>
                    <a
                      target="blank"
                      href="https://www.facebook.com/profile.php?id=100070986468967"
                    >
                      <FontAwesomeIcon icon={faFacebookF} color="black" />
                    </a>
                    <a target="blank" href="https://twitter.com/in_harvard">
                      <FontAwesomeIcon icon={faTwitter} color="black" />
                    </a>
                    <a
                      target="blank"
                      href="mailto: info@harvardintechseattle.com"
                    >
                      <FontAwesomeIcon
                        className=" fas fa-envelope"
                        icon={faEnvelope}
                        color="black"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row copyright-container" style={{ marginTop: "5em" }}>
          <div className="col-8" />
          <div className="col-4">
            <span>© Copyright 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
