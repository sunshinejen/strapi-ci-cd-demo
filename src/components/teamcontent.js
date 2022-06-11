import React, { useState } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/team.css";
import myImg from "../images/team/Mahenoor Yusuf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import strategyIcon from "../images/team/icons/default/strategy-black.png";
import strategyHIcon from "../images/team/icons/highlighted/strategy-brown.png";
import techIcon from "../images/team/icons/default/tech-black.png";
import techHIcon from "../images/team/icons/highlighted/tech-brown.png";
import cfaIcon from "../images/team/icons/default/cfa-black.png";
import cfaHIcon from "../images/team/icons/highlighted/cfa-brown.png";
import tfypIcon from "../images/team/icons/default/tfyp-black.png";
import tfypHIcon from "../images/team/icons/highlighted/tfyp-brown.png";
import webinarIcon from "../images/team/icons/default/webinar-black.png";
import webinarHIcon from "../images/team/icons/highlighted/webinar-brown.png";
import podcastIcon from "../images/team/icons/default/podcast-black.png";
import podcastHIcon from "../images/team/icons/highlighted/podcast-brown.png";
import marketingIcon from "../images/team/icons/default/marketing-black.png";
import marketingHIcon from "../images/team/icons/highlighted/marketing-brown.png";
import volunteerIcon from "../images/team/icons/default/volunteer-black.png";
import volunteerHIcon from "../images/team/icons/highlighted/volunteer-brown.png";
import eventIcon from "../images/team/icons/default/event-black.png";
import eventHIcon from "../images/team/icons/highlighted/event-brown.png";


import { StrategyCard, TechCard, CfaCard, TfypCard, WebinarCard, PodcastCard, 
          DigitalMarketingCard, VolunteerSupportCard, EventManagementCard } from "./teamMemberCardsList.js";



const Team = () => {  
  const [teamCardList, setTeamCardList] = useState("")

  const teamButtons = (teamName) => {
    switch(teamName) {
      case "strategy":
        setTeamCardList(<StrategyCard />)
        break
      case "tech":
        setTeamCardList(<TechCard />)
        break
      case "cfa":
        setTeamCardList(<CfaCard />)
        break
      case "tfyp":
        setTeamCardList(<TfypCard />)
        break
      case "webinar":
        setTeamCardList(<WebinarCard />)
        break
      case "podcast":
        setTeamCardList(<PodcastCard />)
        break
      case 'digitalMarketing':
        setTeamCardList(<DigitalMarketingCard />)
        break
      case "volunteerSupport":
        setTeamCardList(<VolunteerSupportCard />)
        break
      case "eventManagement":
        setTeamCardList(<EventManagementCard />)
        break
      default:
        console.log('no team found')
    }
    
  }
  
  return (
    <>
      <div className="container">
        <div className="team-header d-flex align-items-center mb-3">
          <div className="desktop">
            <div className="header-card">
              <img src={myImg} alt="headshot" />
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
      
      <section className="team py-5">
        {/* <!-- Subtitle + buttons -->*/}
        <div className="bgd pt-3">
          <h3 className="text-center subtitle">View Volunteers by Team</h3>

          {/*<!-- Team Buttons -->*/}
          <div className="team-buttons">
            <div className="" id="button-row">
              <button className="button-81" id="strategy-button" onClick={() => teamButtons("strategy")}>
                <div className="d-flex align-items-center mx-2" >
                  <img className="icon default" src={strategyIcon} alt="" />
                  <img
                    className="icon highlighted"
                    src={strategyHIcon}
                    alt=""
                  />
                  <h5>Strategy</h5>
                </div>
              </button>

              <button className="button-81" id="tech-solutions-button" onClick={() => teamButtons("tech")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={techIcon} alt="" />
                  <img className="icon highlighted" src={techHIcon} alt="" />
                  <h5>Tech Solutions</h5>
                </div>
              </button>

              <button className="button-81" id="cfa-button" onClick={() => teamButtons("cfa")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={cfaIcon} alt="" />
                  <img className="icon highlighted" src={cfaHIcon} alt="" />
                  <h5>Call For Action</h5>
                </div>
              </button>

              <button className="button-81" id="tfyp-button" onClick={() => teamButtons("tfyp")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={tfypIcon} alt="" />
                  <img className="icon highlighted" src={tfypHIcon} alt="" />
                  <h5>Tech For Young Professionals</h5>
                </div>
              </button>
            </div>

            <div className="justify-content-center" id="button-row" >
              <button className="button-81" id="webinar-button" onClick={() => teamButtons("webinar")} >
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={webinarIcon} alt="" />
                  <img className="icon highlighted" src={webinarHIcon} alt="" />
                  <h5>Webinar</h5>
                </div>
              </button>

              <button className="button-81" id="podcast-button" onClick={() => teamButtons("podcast")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={podcastIcon} alt="" />
                  <img className="icon highlighted" src={podcastHIcon} alt="" />
                  <h5>Podcast</h5>
                </div>
              </button>

              <button className="button-81" id="digital-marketing-button" onClick={() => teamButtons("digitalMarketing")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={marketingIcon} alt="" />
                  <img
                    className="icon highlighted"
                    src={marketingHIcon}
                    alt=""
                  />
                  <h5>Digital Marketing</h5>
                </div>
              </button>

              <button className="button-81" id="volunteer-support-button" onClick={() => teamButtons("volunteerSupport")}>
                <div className="d-flex align-items-center" >
                  <img className="icon default" src={volunteerIcon} alt="" />
                  <img
                    className="icon highlighted"
                    src={volunteerHIcon}
                    alt=""
                  />
                  <h5>Volunteer Support</h5>
                </div>
              </button>

              <button className="button-81" id="event-mangement-button" onClick={() => teamButtons("eventManagement")}>
                <div className=" d-flex align-items-center" >
                  <img className="icon default" src={eventIcon} alt="" />
                  <img className="icon highlighted" src={eventHIcon} alt="" />
                  <h5>Event Management</h5>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Divider -->*/}
        <hr style={{ background: "white", margin: "1.5rem" }} />
        {teamCardList}        
      </section>
    </>
  );
};

export default Team;
