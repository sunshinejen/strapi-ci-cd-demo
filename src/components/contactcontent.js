import React from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/contact.css";
import himg from "../images/illustrations/cropped-contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUser,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <>
      <div className="container">
        <div className="illustration-header d-flex align-items-center mb-5">
          <div className="content">
            <h4>Contact Us</h4>
            <br />
            <p>
              Want to reach us? Send an email and you can also connect with us
              on Facebook, Instagram, and LinkedIn.
            </p>
            <p>
              We tried using carrier pigeons but our tech always spooked them.
              Any other way would probably be better.
            </p>
            <br />
            <div className="d-flex flex-wrap">
              <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/company/harvard-in-tech-seattle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faCircle} className=" fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa-stack-1x fa-inverse"
                    />
                  </span>
                  <p>LinkedIn</p>
                </a>
              </div>
              <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://twitter.com/in_harvard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faCircle} className=" fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      inverse
                      className=" fa-stack-1x fa-inverse"
                    />
                  </span>
                  <p>Twitter</p>
                </a>
              </div>
              <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.facebook.com/profile.php?id=100070986468967"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faCircle} className=" fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      inverse
                      className=" fa-stack-1x fa-inverse"
                    />
                  </span>
                  <p>Facebook</p>
                </a>
              </div>
              <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:info@harvardintechseattle.com"
                >
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faCircle} className=" fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      inverse
                      className=" fa-stack-1x fa-inverse"
                    />
                  </span>
                  <p>Email</p>
                </a>
              </div>
              <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://lnkd.in/g43ipkP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-2x">
                    <FontAwesomeIcon icon={faCircle} className=" fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faUser}
                      inverse
                      className="fa-stack-1x fa-inverse"
                    />
                  </span>
                  <p>Volunteer</p>
                </a>
              </div>
            </div>
          </div>
          <img className="img-fluid" src={himg} alt="Contact Clipart" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
