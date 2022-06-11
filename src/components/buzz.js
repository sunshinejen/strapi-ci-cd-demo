import React, { useState } from "react";
import "../css/main.css";
import "../css/buzz.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/blog-articles.css";

import illustration from "../images/illustrations/cropped-buzz.png";
import one from "../images/buzz/1.png";
import two from "../images/buzz/2.png";
import three from "../images/buzz/3.png";
import four from "../images/buzz/4.png";
import five from "../images/buzz/5.png";
import larryNguyen from "../images/buzz/Larry Nguyen.jpeg";
import pawelUlfik from "../images/buzz/PawelUlfik.jpg";
import charl from "../images/team/Charl.png";
import erinLiu from "../images/team/Erin Liu.jpg";
import yuktiSharma from "../images/team/Yukti Sharma.png";
import judithBerndt from "../images/team/Judith Berndt.jpg";
import coco from "../images/team/Hearee Choo_headshot.jpg";
import amandaZhou from "../images/buzz/AmandaZhou.jpeg";
import renukaSolanki from "../images/team/Renuka Solanki.jpeg";
import aadityaDoiphode from "../images/buzz/Aaditya Doiphode.jpeg";
import marinaCigledy from "../images/buzz/Marina_Cigledy.png";
import benjaminYeom from "../images/buzz/yeom.jpg";
import allanCamba from "../images/buzz/Allan Camba.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TeamBuzz = () => {
  const [moreVolunteers, setMoreVolunteers] = useState(false);
  const [moreSpeakers, setMoreSpeakers] = useState(false);

  function _moreSpeakers() {
    setMoreSpeakers(!moreSpeakers);
  }
  function _moreVolunteers() {
    setMoreVolunteers(!moreVolunteers);
  }

  return (
    <>
      <div>
        <div className="container">
          <div className="illustration-header d-flex align-items-center mb-5">
            <div className="content">
              <h4>Buzz</h4>
              <br />
              <p>
                Let's hear from our Speakers, Participants and Volunteers, their
                amazing experience at Harvard in Tech Seattle.
              </p>
            </div>
            <img
              className="img-fluid"
              src={illustration}
              alt="Seattle Buzz Clipart"
            />
          </div>
        </div>
        <div id="speakers" style={{ backgroundColor: "#F4F3F2" }}>
          <h4 className="container pt-5">Speakers</h4>
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ padding: "5px 50px 100px" }}
          >
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={one}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Thank you everyone, I found it a great experience and
                    exchange" - May 27, 2021
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Holger Arians (HBS PLD ' 16), CEO, Banxa
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={two}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Excellent, thank you! You've been putting together some
                    excellent events!" - Sep 20, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Dr. Sarah Kreps (HU), Professor, Department of Government,
                    Cornell University{" "}
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={three}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Thank you so much for having us! It was such a pleasure to
                    participate with you all." - Aug 28, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Dr. Dipayan Ghosh, Co-director, Digital Platforms &amp;
                    Democracy Project, Harvard Kennedy School{" "}
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center bigCard"
                style={{
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={four}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Thank you again for inviting me to be part of today's
                    discussion. It was a timely and relevant topic with a wide
                    range of travel-related experts. I think you did a great job
                    moderating and bringing out the different perspectives. I
                    look forward to future events." - May 27, 2021
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Jorge Roberts (HBS '07) CEO, Avports CEO, Banxa
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={five}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Thank you all for the fantastic discussion and the invite.
                    It was fun!" - Aug 13, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Dr. Christian Vogt, Chief Innovation Officer, Data &amp;
                    Analytics, Cisco
                  </p>
                </div>
              </div>
            </div>
            {/* {moreSpeakers ? (
              <div className="see-more-speakers">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <div
                    className="d-flex flex-column justify-content-around align-items-center"
                    style={{
                      width: "250px",
                      boxShadow: "3px 3px 3px 3px lightgrey",
                      backgroundColor: "white",
                      padding: "20px",
                      margin: "20px",
                      minHeight: "350px",
                    }}
                  >
                    <img
                      src={one}
                      alt="people"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontStyle: "italic",
                          fontWeight: 600,
                          color: "#856359",
                          textAlign: "center",
                        }}
                      >
                        "Thank you everyone, I found it a great experience and
                        exchange"
                      </p>
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Holger Arians (HBS PLD ' 16), CEO, Banxa May 27, 2021
                        {"{"}" "{"}"}
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-around align-items-center"
                    style={{
                      width: "250px",
                      boxShadow: "3px 3px 3px 3px lightgrey",
                      backgroundColor: "white",
                      padding: "20px",
                      margin: "20px",
                      minHeight: "350px",
                    }}
                  >
                    <img
                      src={two}
                      alt="people"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontStyle: "italic",
                          fontWeight: 600,
                          color: "#856359",
                          textAlign: "center",
                        }}
                      >
                        "Excellent, thank you! You've been putting together some
                        excellent events!"
                      </p>
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Dr. Sarah Kreps (HU), Professor, Department of
                        Government, Cornell University. Sep 20. 2020{"{"}" "
                        {"}"}
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-around align-items-center"
                    style={{
                      width: "250px",
                      boxShadow: "3px 3px 3px 3px lightgrey",
                      backgroundColor: "white",
                      padding: "20px",
                      margin: "20px",
                      minHeight: "350px",
                    }}
                  >
                    <img
                      src={three}
                      alt="people"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontStyle: "italic",
                          fontWeight: 600,
                          color: "#856359",
                          textAlign: "center",
                        }}
                      >
                        "Thank you so much for having us! It was such a pleasure
                        to participate with you all."
                      </p>
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Dr. Dipayan Ghosh, Co-director, Digital Platforms &amp;
                        Democracy Project, Harvard Kennedy School. Aug 28, 2020
                        {"{"}" "{"}"}
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-around align-items-center bigCard"
                    style={{
                      boxShadow: "3px 3px 3px 3px lightgrey",
                      backgroundColor: "white",
                      padding: "20px",
                      margin: "20px",
                      minHeight: "350px",
                    }}
                  >
                    <img
                      src={four}
                      alt="people"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontStyle: "italic",
                          fontWeight: 600,
                          color: "#856359",
                          textAlign: "center",
                        }}
                      >
                        "Thank you again for inviting me to be part of today's
                        discussion. It was a timely and relevant topic with a
                        wide range of travel-related experts. I think you did a
                        great job moderating and bringing out the different
                        perspectives. I look forward to future events."
                      </p>
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Jorge Roberts (HBS '07) CEO, Avports CEO, Banxa. May 27,
                        2021
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-around align-items-center"
                    style={{
                      width: "250px",
                      boxShadow: "3px 3px 3px 3px lightgrey",
                      backgroundColor: "white",
                      padding: "20px",
                      margin: "20px",
                      minHeight: "350px",
                    }}
                  >
                    <img
                      src={five}
                      alt="people"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontStyle: "italic",
                          fontWeight: 600,
                          color: "#856359",
                          textAlign: "center",
                        }}
                      >
                        "Thank you all for the fantastic discussion and the
                        invite. It was fun!"
                      </p>
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Dr. Christian Vogt, Chief Innovation Officer, Data &amp;
                        Analytics, Cisco. Aug 13, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )} */}

            {/* {moreSpeakers ? (
              <button
                className="btn btn-primary mx-auto"
                id="see-less-speakers-button"
                style={{
                  textDecoration: "none",
                  color: "#856359",
                  marginTop: "1.5em",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={_moreSpeakers}
              >
                Less
              </button>
            ) : (
              <button
                className="btn btn-primary mx-auto"
                id="see-less-speakers-button"
                style={{
                  textDecoration: "none",
                  color: "#856359",
                  marginTop: "1.5em",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={_moreSpeakers}
              >
                More
              </button>
            )} */}
          </div>
        </div>
        <div id="participants" style={{ marginBottom: "50px" }}>
          <h4 className="container pt-5">Participants</h4>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "#e6e6e6",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "250px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Thanks very much great content" - June 20, 2021
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    - LTG. Russel L. Honore (Retired) US Army
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center bigCard"
                style={{
                  maxWidth: "600px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "#e6e6e6",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "250px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "I really mean it! You guys have stepped up. I shared the
                    info with my incoming classmates at Wharton too. We've been
                    pooling interesting webinars from our networks, and HiT
                    Seattle definitely qualifies" - May 21, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    - Yailett Fernandez (HU '15), MBA Candidate at the Wharton
                    School
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center bigCard"
                style={{
                  maxWidth: "600px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "#e6e6e6",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "250px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Smart City topics really pique my interest. My company is a
                    pioneer in smart city solutions and mobility. We transformed
                    the city of Phoenix with our solutions." - June 17, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    - Kwarne van Leeuwen (HBS, HU)
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "#e6e6e6",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "250px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "This was very interesting - thank you!" - Sep 24, 2020
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    - Andy Dale (HBS '93)
                  </p>
                </div>
              </div>
            </div>
            {/*                <button class="btn btn-primary mx-auto" id="see-more-participants-button"*/}
            {/*                    style="text-decoration: none; color: #856359; margin-top: 1.5em; background-color: transparent; border: none;">More</button>*/}
            {/* <div class="see-more-participants">
                <div class="d-flex flex-row justify-content-center flex-wrap">
                    <div class="d-flex flex-column justify-content-around align-items-center"
                        style="width: 250px;  box-shadow: 3px 3px 3px 3px lightgrey; background-color: #e6e6e6; padding: 20px; margin: 20px; min-height: 250px;">
                        <div>
                            <p
                                style="font-size: 15px; font-style: italic; font-weight: 600; color: #856359; text-align: center">
                                "Thanks very much great content"</p>
                            <p style="font-size: 12px; text-align: center;">- LTG. Russel L. Honore (Retired) US
                                Army.
                                June 20, 2021</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center bigCard"
                        style="max-width: 600px; box-shadow: 3px 3px 3px 3px lightgrey; background-color: #e6e6e6; padding: 20px; margin: 20px; min-height: 250px;">
                        <div>
                            <p
                                style="font-size: 15px; font-style: italic; ; font-weight: 600; color: #856359; text-align: center">
                                "I really mean it! You guys have stepped up. I shared the info with my incoming
                                classmates at Wharton too. We've been pooling interesting webinars from our
                                networks,
                                and HiT Seattle definitely qualifies</p>
                            <p style="font-size: 12px; text-align: center;">- Yailett Fernandez (HU '15), MBA
                                Candidate
                                at
                                the Wharton School. May 21, 2020</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center bigCard"
                        style="max-width: 600px; box-shadow: 3px 3px 3px 3px lightgrey; background-color: #e6e6e6; padding: 20px; margin: 20px; min-height: 250px;">
                        <div>
                            <p
                                style="font-size: 15px; font-style: italic; ; font-weight: 600; color: #856359; text-align: center">
                                "Smart City topics really pique my interest. My company is a pioneer in smart city
                                solutions and mobility. We transformed the city of Phoenix with our solutions."</p>
                            <p style="font-size: 12px; text-align: center;">- Kwarne van Leeuwen (HBS, HU). June 17,
                                2020</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center"
                        style="width: 250px; box-shadow: 3px 3px 3px 3px lightgrey; background-color: #e6e6e6; padding: 20px; margin: 20px; min-height: 250px;">
                        <div>
                            <p
                                style="font-size: 15px; font-style: italic;  font-weight: 600; color: #856359; text-align: center">
                                "This was very interesting - thank you!"</p>
                            <p style="font-size: 12px; text-align: center;">- Andy Dale (HBS '93). Sep 24, 2020</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <button
              className="btn btn-primary mx-auto"
              id="see-less-participants-button"
              style={{
                textDecoration: "none",
                color: "#856359",
                marginTop: "1.5em",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Less
            </button> */}
          </div>
        </div>
        <div
          id="volunteers"
          style={{ backgroundColor: "#F4F3F2", marginBottom: "50px" }}
        >
          <h4 className="container pt-5">Volunteers</h4>
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ padding: "10px 100px 100px" }}
          >
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div
                className="bigCard d-flex flex-column justify-content-around align-items-center "
                style={{
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "30px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={charl}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Harvard in Tech Seattle allows for the opportunity to work
                    with people who are genially working together to make a
                    difference. Volunteer’s from all walks of life who come
                    together from around the world, in order to tackle some
                    complex technical and social issues. It’s through the
                    engagements with the volunteers and the overall objectives
                    of Harvard in Tech Seattle, that one can really strive to
                    make broader impact and learn from others who are willing to
                    assist where ever needed."
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Charles Du Plessis, Strategist - HBS PLDA 2021
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={larryNguyen}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "What I enjoy the most from working with Harvard in Tech
                    Seattle is the opportunity to collaborate with bright and
                    passionate individuals. It has been a great learning
                    experience and I look forward to growing with the program"
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Larry Nguyen, Software Developer - Technology Solutions
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  width: "250px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={pawelUlfik}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Harvard In Tech Seattle is a place where you can explore
                    fresh tech topics, meet people from all around the world and
                    stay connected to the Harvard University community at the
                    same time. You really feel that you can make a positive
                    impact on the world!"
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Pawel Ulfik, Research Analyst - Call For Action - HBS Online
                    2018
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-around align-items-center bigCard"
                style={{
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={erinLiu}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "Volunteering with Harvard in Tech Seattle has been more
                    fulfilling and rewarding than I could've imagined. While
                    challenging, this volunteer opportunity has given me many
                    opportunities to grow professionally, all while working
                    alongside some of the most kind and talented individuals
                    there are! I highly recommend volunteering.Whether you are
                    looking to build your resume, meet people in the Tech
                    Industry, want to be inspired by new ideas, and want to be a
                    part of a stellar team. Volunteering with Harvard in Tech
                    Seattle, is for you!"
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Erin Liu, Digital Marketing Director - HBS Online - 2021
                  </p>
                </div>
              </div>
              {/* 6 */}
              <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{
                  maxWidth: "830px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "20px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={yuktiSharma}
                  alt="people"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359",
                      textAlign: "center",
                    }}
                  >
                    "1. Amazing learning opportunity - we are given the task and
                    the time to get it done - and I believe hands-on learning is
                    the best way to learn 2. Supportive and encouraging
                    environment - There's always a helping hand or guidance
                    available here 3. Stimulating projects - The work we are
                    doing is invigorating and relevant to today's technological
                    advancements 4. Strong team sentiment - I only joined one
                    team call but I could see how fond the team was of each
                    other which creates a very positive working environment I am
                    excited to work more closely with the team and contribute
                    more to this project going forward."
                  </p>
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Yukti Sharma, Software Developer - Technology Solutions
                  </p>
                </div>
              </div>
            </div>

            {moreVolunteers ? (
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <div
                  className="d-flex flex-column justify-content-around align-items-center bigCard"
                  style={{
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={judithBerndt}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "I love to be involved in Harvard in Tech because it
                      allows me to validate my project and program management
                      degree with hands-on work experience. I am excited to be
                      on a team that will positively impact Harvard alumni's
                      transition into meaningful tech careers. I look forward to
                      helping forge the partnerships and programs that will
                      enable young professionals of all walks of life."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Judith Berndt, Project Coordinator - Tech for Young
                      Professionals
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-around align-items-center"
                  style={{
                    width: "250px",
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={amandaZhou}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Harvard in Tech Seattle is a bridge for connecting with
                      professionals from diverse backgrounds. The people here
                      are knowledgeable, supportive, and cohesive. As a
                      volunteer, it's such an honor to be part of such an
                      inspiring team!"
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Amanda Zhou, Research Analyst - Webinar
                    </p>
                  </div>
                </div>
                {/* 8 */}
                <div
                  className="d-flex flex-column justify-content-around align-items-center"
                  style={{
                    width: "250px",
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={allanCamba}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Harvard in Tech (Seattle) will help leverage my knowledge
                      and experience on technology with Harvard—among the
                      leading educational institutions in the world—in
                      Seattle—one of the technological hubs in the US."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Allan Camba, Social Media Manager - Digital Marketing
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-around align-items-center bigCard"
                  style={{
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={renukaSolanki}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Volunteering at Harvard in Tech Seattle, gives me an
                      opportunity to interact and work with talents coming from
                      across the world with different backgrounds and
                      experiences. This place gives me the autonomy to design
                      and work on strategies for the team along with guidance
                      and support. It also provides me with new opportunities to
                      stretch in the areas of competence and mastery."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Renuka Solanki, Volunteer Coordination Manager - HBS
                      Online - 2021
                    </p>
                  </div>
                </div>
                {/* 8 */}
                <div
                  className="d-flex flex-column justify-content-around align-items-center bigCard"
                  style={{
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={coco}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Working at Harvard in Tech Seattle allowed me to create
                      meaningful connections with great people from all around
                      the world with different skills and experiences! Harvard
                      in Tech is the perfect place to learn new skills, advance
                      your career and even feel happier!"
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Coco Choo
                    </p>
                  </div>
                </div>
                {/* 9 */}
                <div
                  className="d-flex flex-column justify-content-around align-items-center"
                  style={{
                    width: "250px",
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={aadityaDoiphode}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Through volunteering at Harvard in Tech, I gained
                      experience in collaborating in a professional work
                      environment and increased my network in the industry, all
                      while growing my skills as a software engineer."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Aaditya Doiphode, Software Developer - Technology
                      Solutions
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-around align-items-center"
                  style={{
                    width: "250px",
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={marinaCigledy}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "Harvard in Tech Seattle brings together amazing people,
                      enthusiastic and passionate, which is why I am honored to
                      be part of the team."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Marina Cigledy, Event Manager - HBS Online - 2018
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-around align-items-center bigCard"
                  style={{
                    boxShadow: "3px 3px 3px 3px lightgrey",
                    backgroundColor: "white",
                    padding: "20px",
                    margin: "20px",
                    minHeight: "350px",
                  }}
                >
                  <img
                    src={benjaminYeom}
                    alt="people"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#856359",
                        textAlign: "center",
                      }}
                    >
                      "In the perspective of a high school student, Harvard in
                      Tech Seattle's working environment provides both a
                      knowledgeable and comfortable experience. Despite
                      collaborating mainly with professional developers, you are
                      never expected to be a professional yourself, instead
                      encouraged to ask for help if needed. And even as I
                      learned a lot through this cooperative community, I still
                      felt as though I was treated as a proper developer rather
                      than a student or trainee."
                    </p>
                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                      Benjamin Yeom, Software Developer - Technology Solutions
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {!moreVolunteers ? (
              <div
                id="see-more-volunteers-button"
                className="row pb-3 see-more-button-row"
              >
                <button
                  className="btn btn-primary mx-auto"
                  style={{
                    textDecoration: "none",
                    color: "#856359",
                    marginTop: "1.5em",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "larger",
                  }}
                  onClick={_moreVolunteers}
                >
                  More <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            ) : (
              <div
                id="see-more-volunteers-button"
                className="row pb-3 see-more-button-row"
              >
                <button
                  className="btn btn-primary mx-auto"
                  style={{
                    textDecoration: "none",
                    color: "#856359",
                    marginTop: "1.5em",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "larger",
                  }}
                  onClick={_moreVolunteers}
                >
                  Less
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBuzz;
