import React from "react";
import "../css/main.css";
import "../css/young-professionals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import himg from "../images/illustrations/cropped-young professional.png";
import popimg from "../images/youngprofessional/McKinseyRecolored2.png";
import comingSoon from "../images/youngprofessional/ComingSoon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Pro = () => {
  function stakeBtn() {
    var content = document.getElementsByClassName("content-card");

    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "block";
    }
  }

  function closeBtn() {
    var content = document.getElementsByClassName("content-card");

    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  }

  return (
    <>
      <div>
        <div className="container illustration-header d-flex align-items-center ">
          <div className="content">
            <h4>Tech For Young Professionals</h4>
            <br />
            <p style={{ color: "black" }}>
              A professional development program to equip young professionals,
              including recent graduates, with necessary understanding, skills,
              and networking for jobs in the Tech industry.
            </p>
            <br />

            <p
              type="button"
              onClick={stakeBtn}
              className="header-link"
              style={{ textDecoration: "none", color: "#AF8661" }}
            >
              {" "}
              What’s at Stake?{" "}
            </p>
            <div classname="wrapper">
              <div className="content-card">
                <span type="button" className="close" onClick={closeBtn}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "grey", textDecoration: "none" }}
                  />
                </span>
                <div>
                  <h4>WHAT'S AT STAKE </h4>
                  <p style={{ color: "black" }}>
                    Today, Technology is the key enabler to drive almost every
                    business in the modern economy.
                    <br />
                    The job market for young professionals (graduates,
                    postgraduates, and others) is undergoing a significant
                    change due to the rapid pace of digital transformation.{" "}
                  </p>
                  <p style={{ color: "black" }}>
                    There is a huge demand for professionals with technology
                    skills and competencies across all industries and sectors.
                    However, the supply is falling short of professionals with
                    required technology skills and competencies. The recent
                    global pandemic has further increased the gap due to the
                    demand in remote work by leveraging technology (digital
                    tools / services).
                  </p>
                  <img alt="McKinsey Recolored" src={popimg} />
                  <p className="content-source">
                    Source:
                    <a
                      href="http://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-top-trends-in-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      McKinsey &amp; Company
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-fluid"
            src={himg}
            alt="Young Professionals Clipart"
          />
        </div>
        {/* Vision / Mission */}
        <section className="header-goal">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="row align-items-center row-height">
                  <h5 className="col-3">VISION</h5>
                  <p className="col-9 ">
                    Assist young professionals to develop a career path in the
                    Tech industry
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row align-items-center row-height">
                  <h5 className="col-3">MISSION</h5>
                  <p className="col-9 ">
                    Engage conversation with Tech leaders, talented developers,
                    and hiring managers to advise on job specific skill needs,
                    interview readiness, &amp; career paths for young
                    professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Road Map */}
        <section className="road-map py-5">
          <div className="container">
            <div className="content">
              <h3 className="mb-5">ROADMAP</h3>
              <div className="row pb-5">
                <div className="col-md-auto pr-0">
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#AF8661", fontSize: "2rem" }}
                  />
                </div>
                <div className="col-md-auto">
                  <p className="phase">Phase I</p>
                </div>
                <div className="col-10">
                  <p className="phase-title">Let's Talk Tech Career</p>
                  <p className="phase-q">Q3 2021 - Q2 2022</p>
                  <p>
                    During the first phase of the program, we take a deep dive
                    into career planning and organize a series of role focused
                    panel discussions, with a strong focus on emerging
                    technologies. We will engage conversation with Tech leaders,
                    talented developers and hiring managers to advise job
                    specific skill needs, interview readiness, and career path
                    for young professionals. We invite you to register early for
                    these events. Please watch out for the invitation
                    announcements.
                  </p>
                  <p>Roles:</p>
                  <ul>
                    <li>Software Developer Emerging Tech</li>
                    <li>Data Scientist / Analyst</li>
                    <li>AI/ML Engineer</li>
                    <li>Program Manager</li>
                    <li>Solution / Software Architect</li>
                    <li>Dev Ops Engineer</li>
                    <li>Product Manager</li>
                  </ul>
                </div>
              </div>
              <div className="row pb-5">
                <div className="col-md-auto pr-0">
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#AF8661", fontSize: "2rem" }}
                  />
                </div>
                <div className="col-md-auto ">
                  <p className="phase">Phase II</p>
                </div>
                <div className="col-10">
                  <p className="phase-title">
                    Interactive Career Path Planning{" "}
                  </p>
                  <p className="phase-q">Q1 2022 - Q2 2022</p>
                  <p>
                    {" "}
                    Under the second phase of this program, an interactive
                    career path tool is coming to life on this webpage. The tool
                    is designed to provide a perspective on career planning, as
                    well as practical guidance for upskilling. Watch this space
                    for more details!
                  </p>
                </div>
              </div>
              <div className="row pb-5">
                <div className="col-md-auto pr-0">
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#AF8661", fontSize: "2rem" }}
                  />
                </div>
                <div className="col-md-auto">
                  <p className="phase">Phase III</p>
                </div>
                <div className="col-10">
                  <p className="phase-title">Know The Tech Industry </p>
                  <p className="phase-q">Q2 2022</p>
                  <p>
                    {" "}
                    As part of our Know the Tech Industry initiative, Phase III
                    is focused on the evolution of the Tech industry in
                    different sectors, employment landscapes and competency
                    requirements, and expert views from a wide spectrum of
                    industries using tech. Watch this space for more details!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Let's Talk Tech */}
        <section className="tech-career pb-5">
          <div className="container">
            <div className="content">
              <h3 className="my-5">Let's Talk Tech Career</h3>
            </div>
            <div className="wrapper-grid">
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Software Developer Emerging Tech
                    </h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item ">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Data Scientist / Analyst</h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">AI/ML Engineer</h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Program Manager</h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Solutions / Software Architect
                    </h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Dev Ops Engineer</h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="card">
                  <img src={comingSoon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product Manager</h5>
                    <p className="card-text" />
                    <button
                      style={{ textDecoration: "none" }}
                      type="button"
                      className="read-more-btn btn-link"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pro;
