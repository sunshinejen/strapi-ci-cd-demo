import React from "react";
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

// Contact page Links 
const ContactLinks = () => {
    return (
        <>
          <div className="text-center">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/company/harvard-in-tech-seattle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid = 'linkedin-link'
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
                  data-testid = 'twitter-link'
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
                  data-testid = 'facebook-link'
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
                  data-testid = 'email-link'
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
                  data-testid = 'volunteer-link'
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
        </>
    )
}
export default ContactLinks