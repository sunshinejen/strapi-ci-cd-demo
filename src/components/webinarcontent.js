import React from "react";
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTh,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import headerimg from "../images/webinar/ai-on-battlefield-flyer.png";
import card1 from "../images/webinar/microsoft-cloud-intelligence-flyer.png";
import card2 from "../images/webinar/future-of-digital-assets-flyer.png";
import card3 from "../images/webinar/future-of-travel-flyer.png";
import card4 from "../images/webinar/tech-in-us-defense-flyer.png";
import card5 from "../images/webinar/influence-on-politics-flyer.png";
import card6 from "../images/webinar/smart-city-flyer.png";
import card7 from "../images/webinar/racism-solve-in-tech-flyer.png";
import card8 from "../images/webinar/covid19-vaccine-treatment-flyer.png";
import card9 from "../images/webinar/covid19-maintain-mental-health.png";
import card10 from "../images/webinar/covid19-telemedicine-flyer.png";
import card11 from "../images/webinar/covid19-reopening-economy.png";
import card12 from "../images/webinar/covid19-edutech-solutions.png";

const Webinar = () => {
  /////////////////////////////////
  // More Button
  function moreBtn() {
    var grid = document.getElementsByClassName("remaining-webinars");
    var disapear = document.getElementsByClassName("morebtn");
    for (var i = 0; i < grid.length; i++) {
      grid[i].style.display = "block";
    }
    for (var i = 0; i < disapear.length; i++) {
      disapear[i].style.display = "none";
    }
  }
  /////////////////////////////////
  // Grid Buttons
  function gridBtn() {
    var grid = document.getElementsByClassName("webinar-grid");
    var list = document.getElementsByClassName("webinar-list");

    for (var i = 0; i < grid.length; i++) {
      grid[i].style.display = "block";
    }
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
  }
  /////////////////////////////////
  function listBtn() {
    var grid = document.getElementsByClassName("webinar-grid");
    var list = document.getElementsByClassName("webinar-list");
    for (var i = 0; i < grid.length; i++) {
      grid[i].style.display = "none";
    }
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "block";
    }
  }
  /////////////////////////////////

  // Search Button - and Dropdown Options
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="btn dropdown-toggle"
      href="#"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  /////////////////////////////////
  function btnAll() {
    var x = document.getElementsByClassName("2020");
    var y = document.getElementsByClassName("2021");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
    for (var i = 0; i < y.length; i++) {
      y[i].style.display = "block";
    }
  }
  /////////////////////////////////
  function btn2020() {
    var x = document.getElementsByClassName("2020");
    var y = document.getElementsByClassName("2021");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
    for (var i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
  }
  /////////////////////////////////
  function btn2021() {
    var x = document.getElementsByClassName("2020");
    var y = document.getElementsByClassName("2021");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (var i = 0; i < y.length; i++) {
      y[i].style.display = "block";
    }
  }
  /////////////////////////////////
  // View Webinar Buttons

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    const readMoreBTN = document.querySelectorAll(".readMoreBtn");
    for (let i = 0; i < readMoreBTN.length; i++) {
      readMoreBTN[i].addEventListener("click", function (e) {
        const selectedButton = e.target.getAttribute("data-target");
  
        let selectedModal = document.querySelector(selectedButton);
        let closeBTN = selectedModal.querySelector(".modal-dialog .close ");
  
        selectedModal.style.opacity = "1";
        selectedModal.style.display = "block";
  
        closeBTN.addEventListener("click", function () {
          if (selectedModal.style.opacity === "1") {
            selectedModal.style.opacity = "0";
            selectedModal.style.display = "none";
          }
        });
      });
      /////////////////////////////////
    }
  }

  return (
    <>
      <div>
        <section className="page-section clearfix">
          <div className="container">
            <div className="intro">
              <img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src={headerimg}
                alt="..."
              />
              <div className="intro-text left-0 bg-faded p-4 rounded">
                <h6 class="text-muted">January 27, 2022 @ 11am PST</h6>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4> AI on the Battlefield: The Future of Warfare</h4>
                  </span>
                </h2>
                <p className="mb-3">
                  Please join Harvard in Tech Seattle and our distinguished
                  panelists for an engaging discussion on how artificial
                  intelligence, exponential technologies and machine learning is
                  transforming modern warfare.
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  type="button"
                  target="_blank"
                  className="button"
                  href="https://forms.gle/B27KnaeDKisqRV3s6"
                >
                  Webinar Registration
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Upcoming Webinars */}
        <section className="upcoming-Webinars">
          <div className="container py-5">
            <h5>Upcoming Webinars</h5>
            {/* TODO: Set up carousel per wireframe for multiple upcoming webinars */}
            <div className="wrapper-grid">
              <ul>
                <li>
                  AI on the Battlefield: The Future of Warfare – Thursday,
                  January 27th 2022
                </li>
                <li>AI & Metaverse (AR/VR) – Thursday, March 3rd 2022</li>
                <li>AI in Biotech – Thursday, May 19th 2022 </li>
                <li>
                  AI in Finance (Cryptocurrency/Digital Assets) – Thursday, July
                  21st 2022{" "}
                </li>
                <li>AI in Autonomous Vehicle - September 2022</li>
              </ul>
              {/* AI in Healthcare */}
              {/* <div class="wrapper-grid">
          <div class="grid-item">
              <div class="card mx-auto">
                  <img src="assets/webinar/ai-in-healthcare.png" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">10/21/21 @ 10am PT</h6>
                      <h5 class="card-title">AI in Healthcare, the Future of US Benefit</h5>
                      <p class="card-text">

                          Please join Harvard in Tech Seattle for a special webinar October 21 (Thursday)
                          @ 10am PT / 1pm ET on “AI in Healthcare, the Future of US Benefit”. We will explore
                          Artificial Intelligence in data ethics, affordable personalized healthcare,
                          proactive population health management, disease diagnosis and patient monitoring,
                          major hospital challenges, and consumer education.

                          <br>
                          <br>Speakers:

                          <li><a href="https://www.linkedin.com/in/john-brownstein-611b8658/" target="_blank"
                                  rel="noopener noreferrer">Dr. John Brownstein</a>,
                              Prof. Harvard Medical School; CIO, Boston Children’s Hospital</li>
                          <li><a href="https://www.linkedin.com/in/rajeevronanki/" target="_blank"
                                  rel="noopener noreferrer">Rajeev Ronanki</a>,
                              SVP, Chief Digital Officer, Anthem Inc</li>
                          <li><a href="https://www.linkedin.com/in/samuel-kina-8975b148/" target="_blank"
                                  rel="noopener noreferrer">Dr. Samuel Kina</a> (HU ‘10),
                              SVP, Economics & Data Science, Picwell</li>

                      </p>
                      <a href="https://forms.gle/GXdDo7vBb5RHeTdG7" target="_blank" rel="noopener noreferrer"
                          class="card-link">Webinar Registration</a>
                  </div>
              </div>
          </div>
      </div> */}
            </div>
          </div>
        </section>
        {/* Latest Webinars */}
        <section className="latestWebinars">
          <div className="container py-5">
            {/* Title/Buttons */}
            <div className="row align-items-end pb-3">
              <div className="col">
                <h5>Latest Webinars</h5>
              </div>
              <div className="col d-flex justify-content-end">
                {/* Grid / List toggle */}
                <button onClick={gridBtn} className="btn" id="grid-button">
                  <FontAwesomeIcon icon={faTh} />
                </button>
                <button onClick={listBtn} className="btn" id="list-button">
                  <FontAwesomeIcon icon={faListUl} />
                </button>
                {/* Filter by year function */}
                <Dropdown className="dropdown px-4">
                  <Dropdown.Toggle
                    as={CustomToggle}
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Search by year
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <Dropdown.Item
                      className="dropdown-item search-button"
                      data-li="podcast"
                      type="button"
                      onClick={btnAll}
                    >
                      All
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item search-button"
                      data-li={2021}
                      type="button"
                      onClick={btn2021}
                    >
                      2021
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item search-button"
                      data-li={2020}
                      type="button"
                      onClick={btn2020}
                    >
                      2020
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {/* Grid */}
            <div className="webinar-grid">
              {/* Most recent 3 webinars */}
              <div className="wrapper-grid">
                {/* // Recent 3 Webinars // */}
                {/* Microsoft Cloud */}
                <div className="grid-item recent-3 2021">
                  <div className="card">
                    <img src={card1} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        10/13/21
                      </h6>
                      <h5 className="card-title">
                        Microsoft Cloud Intelligence/AIOps
                      </h5>
                      <p className="card-text">
                        We explore how Microsoft scientists approach cloud
                        computing, the translation of research into product
                        strategy, applications of AI in Azure, as well as a
                        discussion on recent technologies.
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#microsoftCloud"
                        href="https://www.youtube.com/embed/4KEY-ocUA-I"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
                {/* Digital Assets */}
                <div className="grid-item recent-3 2021">
                  <div className="card">
                    <img src={card2} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        05/27/21
                      </h6>
                      <h5 className="card-title">
                        The Future of Digital Assets <br />  
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          lineHeight: "1.5",
                          color: "#212529",
                          textAlign: "left",
                        }}
                      >
                        We explore the evolution of digital assets, regulation
                        around crypto currency &amp; digital assets, insight on
                        official adoption of cryptocurrency, and its global
                        disruption on all financial players and more.
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#digitalAsset"
                        data-video="https://www.youtube.com/embed/5ORZZVuoQyA"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
                {/* Future of Travel */}
                <div className="grid-item recent-3 2021">
                  <div className="card">
                    <img src={card3} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        03/18/21
                      </h6>
                      <h5 className="card-title">
                        Future of Travel <br />  
                      </h5>
                      <p className="card-text">
                        We explore innovations in travel industry, Urban Aerial
                        Mobility, technology capability of individual flying
                        cars, infrastructure requirements, self flying planes
                        and drones, travel during COVID [...]
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#futureOfTravel"
                        data-video="https://www.youtube.com/embed/EOo8dma2Juk"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*Remaining*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card4} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        09/24/20
                      </h6>
                      <h5 className="card-title">
                        Technology Innovation in US Defense{" "}
                      </h5>
                      <p className="card-text">
                        We explore Defense Technology Policy, DOD partnership in
                        R&amp;D, Biological war tech, Quantum Computing,
                        National defense &amp; economic competition, Cyber
                        Security and more.
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#techDefense"
                        data-video="https://www.youtube.com/embed/XE-pTIqLTwE"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card5} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        08/27/20
                      </h6>
                      <h5 className="card-title">
                        Technology Influence on Politics{" "}
                      </h5>
                      <p className="card-text">
                        We explore technology influence, Social Media influence,
                        foreign influence into US election, policy making,
                        campaigning, voters influence, special interest group
                        and more.
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#techPolitics"
                        data-video="https://www.youtube.com/embed/eMQjmU2xI8U"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card6} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        08/23/20
                      </h6>
                      <h5 className="card-title">
                        Smart City, The Future of the Economy{" "}
                      </h5>
                      <p className="card-text">
                        We explore Smart City technology solutions,
                        socio-economic impact, human centered design, social
                        sustainability, data privacy, safety, ethics and more.
                        <br />
                        <br />
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#smartCity"
                        data-video="https://www.youtube.com/embed/-9VIOY9azys"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card7} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        06/25/20
                      </h6>
                      <h5 className="card-title">
                        Racism, Why Must We Solve It In Technology{" "}
                      </h5>
                      <p className="card-text">
                        We explore how can technology improve the treatment of
                        racial groups and their interactions with the Police,
                        and criminal justice system, improve equity in
                        education, improve financial opportunities [...]
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#racism"
                        data-video="https://www.youtube.com/embed/iBfpLnZz4Fw"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card8} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        06/12/20
                      </h6>
                      <h5 className="card-title">
                        COVID-19 Vaccine &amp; Treatment{" "}
                      </h5>
                      <p className="card-text">
                        Humankind has never had a more urgent task than creating
                        broad immunity for COVID 19. Harvard in Tech Seattle
                        presents a panel discussion exploring COVID 19 Vaccine
                        &amp; Treatment.
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#covidVaccine"
                        data-video="https://www.youtube.com/embed/XO3getiB1mA"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>

                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card9} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        06/06/20
                      </h6>
                      <h5 className="card-title">
                        COVID 19: Maintaining Mental Health
                      </h5>
                      <p className="card-text">
                        We explore how to maintain mental health during COVID 19
                        pandemic with Dr. Amy Mezulis, a Harvard Alum,
                        Co-Founder &amp; Chief Psychologist at UpLif.
                        <br />
                        <br />
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#covidMentalHealth"
                        data-video="https://www.youtube.com/embed/PnBdLW7QpVA"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card10} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        05/25/20
                      </h6>
                      <h5 className="card-title">
                        COVID 19: Is Telemedicine the Future of Health Care?
                      </h5>
                      <p className="card-text">
                        The unprecedented outbreak of COVID-19 across the globe
                        has resulted in increased demand for telemedicine
                        solutions. Social distancing and lockdown implementation
                        by several [...]
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#covidTelemedicine"
                        data-video="https://www.youtube.com/embed/kcjF1y6kcco"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card11} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        05/03/20
                      </h6>
                      <h5 className="card-title">
                        COVID 19 and Reopening the Economy{" "}
                      </h5>
                      <p className="card-text">
                        We explore what are the precautions needed to re-open
                        the economy, what kind of support needed in city, state
                        and fed. level, and also with the changes how do we
                        prepare ahead for technology [...]
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#covidReopening"
                        data-video="https://www.youtube.com/embed/NbIq-FBp_A8"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
                {/*i*/}
                <div className="grid-item remaining-webinars 2020">
                  <div className="card">
                    <img src={card12} className="card-img-top" alt="..." />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#f4f3f2" }}
                    >
                      <h6 className="card-subtitle mb-2 text-muted">
                        04/09/20
                      </h6>
                      <h5 className="card-title">
                        EduTech solutions to COVID 19
                        <br />
                        <br />{" "}
                      </h5>
                      <p className="card-text">
                        Join the video discussion with Harvard Prof. Mark
                        Esposito on EduTech solutions to COVID 19. Educational
                        Technology can inform, influence public behavior,
                        improve social networking to reduce [...]
                      </p>
                      <button
                        style={{ color: "#af8661", textDecoration: "none" }}
                        type="button"
                        className="readMoreBtn btn-link"
                        data-toggle="modal"
                        data-target="#edutech"
                        data-video="https://www.youtube.com/embed/S4c48202-D8"
                      >
                        View Webinar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Show all webinars button */}
              <div className="row pb-3 see-more-button-row">
                <button
                  onClick={moreBtn}
                  className="btn morebtn"
                  id="see-more-button"
                >
                  More <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>

            {/* List */}
            <section className="webinar-list">
              <div className="wrapper-list">
                <li className="list 2021">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#microsoftCloud"
                    data-video="https://www.youtube.com/embed/4KEY-ocUA-I"
                  >
                    Microsoft Cloud Intelligence/AIOps
                  </a>
                </li>
                <li className="list 2021">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#digitalAsset"
                    data-video="https://www.youtube.com/embed/5ORZZVuoQyA"
                  >
                    The Future of Digital Assets
                  </a>
                </li>
                <li className="list 2021">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#futureOfTravel"
                    data-video="https://www.youtube.com/embed/EOo8dma2Juk"
                  >
                    Future of Travel
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#techDefense"
                    data-video="https://www.youtube.com/embed/XE-pTIqLTwE"
                  >
                    Technology Innovation in US Defense
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#techPolitics"
                    data-video="https://www.youtube.com/embed/eMQjmU2xI8U"
                  >
                    Technology Innovation on Politics
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#smartCity"
                    data-video="https://www.youtube.com/embed/-9VIOY9azys"
                  >
                    Smart City, The Future of the Economy
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#racism"
                    data-video="https://www.youtube.com/embed/iBfpLnZz4Fw"
                  >
                    Racism, Why We Must Solve It in Technology
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#covidVaccine"
                    data-video="https://www.youtube.com/embed/XO3getiB1mA"
                  >
                    COVID-19 Vaccine &amp; Treatment
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#covidMentalHealth"
                    data-video="https://www.youtube.com/embed/PnBdLW7QpVA"
                  >
                    COVID-19: Maintaining Mental Health
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#covidTelemedicine"
                    data-video="https://www.youtube.com/embed/kcjF1y6kcco"
                  >
                    COVID-19: Is Telemedicine the Future of Healthcare
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#covidReopening"
                    data-video="https://www.youtube.com/embed/NbIq-FBp_A8"
                  >
                    COVID-19 and Reopening the Economy
                  </a>
                </li>
                <li className="list 2020">
                  <a
                    style={{ color: "black" }}
                    href="#"
                    data-toggle="modal"
                    data-target="#edutech"
                    data-video="https://www.youtube.com/embed/S4c48202-D8"
                  >
                    EduTech Solutions to COVID-19
                  </a>
                </li>
              </div>
            </section>
          </div>
        </section>
        {/* MODALS */}
        {/* Microsoft Cloud Intelligence/AIOps */}
        <div
          className="modal fade"
          id="microsoftCloud"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/4KEY-ocUA-I"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “Microsoft Cloud Intelligence/AIOps – Infusing AI into Cloud
                    Computing”.
                  </h5>
                  <p>
                    We were joined by a distinguished team from Microsoft to
                    explore how Microsoft scientists approach cloud computing,
                    the translation of research into product strategy,
                    applications of AI in Azure, as well as a discussion on
                    recent technologies. This conversation will bring a holistic
                    view, approaching AI from research, product strategy,
                    engineering and customer experience perspectives.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Dr. Dongmei Zhang, Distinguished Scientist, Microsoft
                    Research
                    <br />
                    Dr. Marcus Fontoura, Technical Fellow &amp; Corporate VP,
                    Microsoft Azure
                    <br />
                    Murali Chintalapati, Partner Group Software Engineering
                    Manager, Microsoft Azure
                    <br />
                    Igal Figlin, Partner PM Manager, Microsoft Azure
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Executive Director, Harvard in Tech Seattle
                    <br />
                    Anastasia Chernykh, Program Manager, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Artificial Intelligence is shaping the entire IT industry
                      path. The cloud computing platform is becoming part of the
                      underlying infrastructure of our society.
                    </li>
                    <li>
                      Data centre networks and infrastructures are becoming
                      increasingly powerful. As a result, managing them becomes
                      more complex. Considering AIOps as a strategic direction
                      enables companies to automate processes, recognize
                      problems in the IT environment earlier and facilitate
                      communication between teams.
                    </li>
                    <li>
                      The digital transformation of the software industry itself
                      has focused Microsoft researchers' attention on cloud
                      computing in software updates. Scientists are looking at
                      the importance of non-functional properties of cloud
                      computing platforms, including availability, reliability,
                      performance and security.
                    </li>
                    <li>
                      Operating in an area vulnerable to rapid innovation
                      requires proactive and predictive problem identification
                      and resolution. This requires a unified predictive
                      framework that can cluster and correlate disparate data
                      sources. Artificial intelligence and machine learning
                      capabilities allow the software to perform in-depth root
                      cause analysis, speeding up troubleshooting.
                    </li>
                    <li>
                      The development and prioritization of solutions needs to
                      be based on the definition of the customer experience and
                      continuous monitoring of the platform. Improvements in
                      artificial intelligence provide insights and predictions
                      of what customers will need. This will also help in
                      addressing the client's concerns about the quality of the
                      different types of data collected by applications.
                    </li>
                    <li>
                      As cloud technology evolves, the requirements will
                      increase. Proactive system design is one of the big
                      innovations that could lead to easier and faster
                      decision-making.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Space for sale */}
        <div
          className="modal fade"
          id="spaceForSale"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “Space
                    for Sale! The Commercialization of the Space Economy”.
                  </h5>
                  <p>
                    We explore the evolution of digital assets, regulation
                    around crypto currency &amp; digital assets, insight on
                    official adoption of cryptocurrency, and its global
                    disruption on all financial players and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Dr. Matthew Weinzierl (HU), Professor, Harvard Business
                    School
                    <br />
                    Sinéad O'Sullivan(HBS ‘17), Strategy &amp; Competitiveness,
                    Harvard Business School
                    <br />
                    Kylie Lucas (HBS), Corporate Strategy Lead, BLUE ORIGIN
                    <br />
                    Dr. Benjamin Jenett, Founder, Metavoxel Technologies
                    <br />
                    Jeff Matthews, Space Industry Lead, Deloitte
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      China is in the forefront of digital currency Renminbi
                      (RMB) electronic payment at world level. Their goal is to
                      maintain control of money supply &amp; prevent foreign
                      exchange risks. This official adoption of cryptocurrency
                      in China is with the aim to gradually reduce the
                      dependency of the US dollar.
                    </li>
                    <li>
                      The decision to move the U.S to digital currency five to
                      seven years from now is political but will not replace the
                      paper dollar. It wolid be a mix adoption.
                    </li>
                    <li>
                      The free and non-fungible nature of bitcoin’s energy
                      consumption makes it greener and more sustainable than
                      other mixed sources, while it can generate money and
                      security.
                    </li>
                    <li>
                      Crypto and digital assets offer permission less, cashless,
                      and yield, which is a payment revolution for value
                      transfer.
                    </li>
                    <li>
                      To invest in Crypto, one should contribute a small
                      percentage of their total investment, be prepared to lose
                      a significant part of it, stay for the long-term, and have
                      the same investment vision as a traditional investment.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Digital assets */}
        <div
          className="modal fade"
          id="digitalAsset"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “The
                    Future of Digital Assets”.
                  </h5>
                  <p>
                    We explore the evolution of digital assets, regulation
                    around crypto currency &amp; digital assets, insight on
                    official adoption of cryptocurrency, and its global
                    disruption on all financial players and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Holger Arians, CEO BANXA
                    <br />
                    Massimo Buonomo, Expert Blockchain in Finance, Former UN
                    <br />
                    Torsten Hoffmann - Founder &amp; CEO, 3DCH Media (Cryptopia
                    Documentary)
                  </p>
                  <p>
                    Moderator:
                    <br />
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      China is in the forefront of digital currency Renminbi
                      (RMB) electronic payment at world level. Their goal is to
                      maintain control of money supply &amp; prevent foreign
                      exchange risks. This official adoption of cryptocurrency
                      in China is with the aim to gradually reduce the
                      dependency of the US dollar.
                    </li>
                    <li>
                      The decision to move the U.S to digital currency five to
                      seven years from now is political but will not replace the
                      paper dollar. It wolid be a mix adoption.
                    </li>
                    <li>
                      The free and non-fungible nature of bitcoin’s energy
                      consumption makes it greener and more sustainable than
                      other mixed sources, while it can generate money and
                      security.
                    </li>
                    <li>
                      Crypto and digital assets offer permission less, cashless,
                      and yield, which is a payment revolution for value
                      transfer.
                    </li>
                    <li>
                      To invest in Crypto, one should contribute a small
                      percentage of their total investment, be prepared to lose
                      a significant part of it, stay for the long-term, and have
                      the same investment vision as a traditional investment.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Future of travel */}
        <div
          className="modal fade"
          id="futureOfTravel"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “Future of Travel”.
                  </h5>
                  <p>
                    We explore innovations in travel industry, Urban Aerial
                    Mobility, technology capability of individual flying cars,
                    infrastructure requirements, self flying planes and drones,
                    travel during COVID and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Jorge Roberts, CEO, Avports
                    <br />
                    Rohit Goyal, Product Intel, Joby Aviation
                    <br />
                    Karina Yamamoto, CEO, Travilous
                    <br />
                    Harrison Wolf, Director Global Aviation, Zipline
                    International
                    <br />
                    Greg Land, Director Global Industry Leader - Aviation, IBM
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Digital transformation of Travel Industry will be driven
                      by customer experience, customer expectation &amp; value
                      creation.
                    </li>
                    <li>
                      In order to restore traveler’s trust we will see adoption
                      of digital credentials related to Biometrics, autonomous
                      cleaning and touch less interaction that is managed
                      through individual mobile devices at the airports.
                    </li>
                    <li>
                      IBM is leading the way with Health Pass using Blockchain.
                      Health Pass will enable organizations to help return
                      individuals to a physical location such as workplace,
                      school, airline flights and also enhance activities we
                      love like sports events, and eating at restaurants in a
                      safe and enjoyable way.
                    </li>
                    <li>
                      There will be a roll out of a new form of air
                      transportation to alleviate traffic congestion at major
                      cities in the world. Air taxi will give back the travel
                      time to the urban commuters, will be cost efficient,
                      environment friendly (no carbon emission, noise
                      pollution). Public acceptance and cost efficiency will be
                      the main driver for this new technology adoption.
                    </li>
                    <li>
                      In Africa there is a massive need of connecting the
                      economy and Autonomous Vehicle will play a big role
                      addressing that.{" "}
                    </li>
                    <li>
                      Autonomous Vehicle commercial delivery will improve
                      efficiency. In Rwanda Zipline not only saved lives through
                      on demand delivery of medical supplies but also reduced
                      medical system blood waste from (6-7)% to 0%.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Tech innovation: US defense */}
        <div
          className="modal fade"
          id="techDefense"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “Technology Innovation in US Defense”.
                  </h5>
                  <p>
                    We explore Defense Technology Policy, DOD partnership in
                    R&amp;D, Biological war tech, Quantum Computing, National
                    defense &amp; economic competition, Cyber Security and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Dr. Lydia Kostopoulos, Strategy &amp; Innovation Advisor, US
                    Special Operations Command
                    <br />
                    Arjun Bisen, Product Policy Advisor, Google
                    <br />
                    Dr. Sarah Kreps, Professor, Department of Government,
                    Cornell University
                    <br />
                    Jake Sotiriadis, Ph.D., Chief, Strategic Foresight and
                    Futures Branch, US Air Force
                    <br />
                    LTG. Russel Honore (Retired) US Army
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      There are a plethora of emerging technologies with NatSec
                      implications and DOD has made great strides in building
                      cross sector partnerships, up-skilling, and forecasting,
                      to help it take advantage of several tech revolutions,
                      including digital, bio and quantum. Still more needs to be
                      done to allow emerging tech to be integrated and adopted
                      at a DOD scale and with older hardware while developing
                      norms and humanitarian law to ensure new tech is deployed
                      responsibility.
                    </li>
                    <li>
                      Quantum Computing is a long horizon platform that will
                      vastly reshape war and peace, from Quantum security, to
                      Quantum Clocks, and Quantum Communications to synchronize
                      All Domain Warfare. These same technologies have the
                      potential to transform economies, supply chains, and data
                      security, and privacy for corporations and individuals.
                    </li>
                    <li>
                      {" "}
                      The tradeoff between security, role based access, and ease
                      of use in Military Technology on the battlefield needs to
                      evolve to match the civilian experience.
                    </li>
                    <li>
                      Military and University partnerships need to be broader to
                      include social sciences to address global culture to go
                      beyond winning wars, and win the Peace. Universities need
                      to offer, and Military roles and leadership needs to
                      embrace PhD and advanced Graduate programs for Military
                      personnel as part of a core leadership progression.
                    </li>
                    <li>
                      Culture matters and needs to be considered on the front
                      end of Military Action. Once we win the war, we need to
                      win the peace. The seamless transition to a PeaceTime
                      governance happens best when there is a comprehensive
                      understanding of the end goal, and the means to achieve
                      this goal through leadership in the countries where the
                      war takes place. Like South Korea, Germany, and Japan,
                      part of achieving a successful peace and thriving economic
                      partnerships may involve long term military base
                      installations to safeguard alliance countries and regions.
                    </li>
                    <li>
                      The world population growth from 7B to 10B will strain
                      Global security, putting pressure on Food, Water, and
                      Energy. The overlap between national security, and
                      civilian economic activity will be expansive and requires
                      holistic thinking and planning. DOD efforts need to
                      seamlessly implement strategies and technologies to
                      eliminate threats, increase sustainability of DOD
                      activities, and to support compatible leadership regimes
                      that resonate with the authentic cultures of the diverse
                      regions of the world.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Tech innovation: politics */}
        <div
          className="modal fade"
          id="techPolitics"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “Technology Influence on Politics​”.
                  </h5>
                  <p>
                    We explore technology influence, Social Media influence,
                    foreign influence into US election, policy making,
                    campaigning, voters influence, special interest group and
                    more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Sonal Shah, Executive Director, Beeck Center for Social
                    Impact &amp; Innovation
                    <br />
                    Allen Collinsworth, President, Fara Group
                    <br />
                    Jennifer Hollett, Executive Director, The Walrus
                    <br />
                    Dr. Dipayan Ghosh, Co-director, Digital Platforms &amp;
                    Democracy Project, Harvard Kennedy School
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Technology, and more specifically social media platforms,
                      and algorithms influence citizens. This can be positive,
                      or negative depending on the platform policies, and the
                      actors on the platform.
                    </li>
                    <li>
                      Technology policy alone cannot be expected to effectively
                      secure free and fair elections. The U.S. government for
                      example must set its public policy, laws, and regulations
                      to drive incentives, including cyber tech to ensure proper
                      engagement of Campaign support from foreign powers and
                      interests.
                    </li>
                    <li>
                      Policies that Social Media firms, and search engine firms
                      set represent the interests of the firm's stakeholders.
                      There is an overlap between the Firm's Stakeholders and
                      Country's stakeholders, however the emphasis differs, and
                      on a Global level foreign powers can take advantage of the
                      differences between incentives that a firm has and the
                      rights of citizens and interests of the nation to achieve
                      their own foreign policy agenda.
                    </li>
                    <li>
                      Social Media platforms offer a potential power equalizer
                      with traditional lobbyists and special interest groups in
                      that these platforms allow voters to combine their numbers
                      to vote for candidates who represent the changes they
                      seek. This can be seen both in the presidential election
                      of Barack Obama, the election of the Squad, and the Black
                      Lives Matter Movement. Globally it can be seen through the
                      Arab Spring toppling the government by organizing and
                      coordinating demands for change in an overwhelming
                      fashion.
                    </li>
                    <li>
                      Civic Tech, and the role that government plays can be
                      updated and modernized to match government services to
                      citizens needs through software, and platforms that
                      leverage algorithms, machine learning, and AI. The
                      government's role reimagined as a technology provider or
                      purchaser of technology systems in the Civic domain can
                      transform the quality of services that citizens receive.
                      It also may reduce conflicts of interests between Firm
                      interests i.e. special interest groups, and the rights and
                      interests of the country. A good example of this is the
                      Public Library system, or Military Hospitals. Defining the
                      right level of capability and role for the public vs.
                      private sector is a balance between efficiency, and price
                      vs. national security. There is a lot of room for
                      improvement, and a lot of potential for powerful change.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Smart city */}
        <div className="modal fade" id="smartCity" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “Smart
                    City, The Future Of The Economy​”.
                  </h5>
                  <p>
                    We explore Smart City technology solutions, socio-economic
                    impact, human centered design, social sustainability, data
                    privacy, safety, ethics and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Dr. Alex `Sandy' Pentland, Professor, MIT
                    <br />
                    Dr. Jaana Remes, Partner, McKinsey Global Institute
                    <br />
                    Dr. Christian Vogt, Chief Innovation Officer, Data &amp;
                    Analytics, Cisco
                    <br />
                    Peter Jackson, Senior Portfolio Director, IDEO
                    <br />
                    Dale R. Killinger, Former Section Chief, FBI
                    <br />
                    Shih Hor Lau , Chairman, Smart Nation Chapter, SGTech
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Smart City can improve the quality of life 10% - 30%
                    </li>
                    <li>
                      The most effective way to get the public to buy in to
                      implement a Smart City is to find a specific pain point,
                      and integrate a Smart City approach to show the value of
                      Data Driven real time Intelligence integrated into city
                      life. This will increase adoption of future Smart City
                      projects, and overall appreciation for the importance of a
                      Smart City.
                    </li>
                    <li>
                      Designing a Smart City should not be a Technology looking
                      for a problem to solve, it should start with the needs of
                      the City’s citizens.
                    </li>
                    <li>
                      Smart City alone cannot transform our economy. Economic
                      Transformation requires that Smart City gains diffuse
                      across all communities and current barriers due to race,
                      and economic wealth hinders the diffusion of benefits.
                    </li>
                    <li>
                      Smart Cities adoption is increased if the City passes a
                      law requiring Smart City compliance.
                    </li>
                    <li>
                      Data Security is much stronger if the Data Stores are
                      distributed rather than Centralized.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Racism */}
        <div className="modal fade" id="racism" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “Racism, Why We Must Solve It In Technology”.
                  </h5>
                  <p>
                    We explore how can technology improve the treatment of
                    racial groups and their interactions with the Police, and
                    criminal justice system, improve equity in education,
                    improve financial opportunities and more.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Rachael Splaine Rollins, District Attorney, Suffolk County
                    <br />
                    Kevin L. Nichols, Founder, President &amp; CEO, The Social
                    Engineering Project
                    <br />
                    Angela Antony, CEO at Scoutible
                    <br />
                    Stacy Kirk, CEO QualityWorks Consulting Group
                    <br />
                    Jon Scott, Vice President/Risk Mgmt. Manager, Bank of the
                    West
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      With technology, we have a choice. We can use technology
                      to make the system fair, enrich society, unite the world
                      and share the benefits that the world and technology has
                      to offer in a loving and humanizing way
                    </li>
                    <li>
                      By 2042, the majority of the US population will be people
                      of color. By closing the racial wealth gap, the US GDP
                      could be projected 4% to 6% higher by 2028. No action will
                      cost the US economy $1 to $1.5 trillion between 2019 and
                      2028. It is high time we reduce Systemic Racism on a
                      targeted timeline and establish accountability at all
                      levels of the society that triggers Systemic Racism. It is
                      time to work together.
                    </li>
                    <li>
                      Need to reform the Criminal Justice System to minimize
                      racial bias. i.e. A centralized, nationwide Data System
                      for Criminal Justice system (including Police personnel
                      record), policy reform - reevaluate qualified immunity for
                      police, the ability of employers, landlords, and others to
                      disqualify people for misdemeanors and other minor crimes
                      etc.
                    </li>
                    <li>
                      Fair representation in politics is needed so that the
                      policymakers can make justified policy reform. Technology
                      can be leveraged to have a grass root level initiative to
                      make the change.{" "}
                    </li>
                    <li>
                      In order to leverage a high tech education system, initial
                      funding is required to ensure basic needs are addressed .
                      I.e. Laptop for all students, high speed Internet access
                      for underprivileged communities.
                    </li>
                    <li>
                      Soft skill (scientifically measured personality and
                      cognitive aptitude) based technology driven hiring process
                      is unbiased.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Covid-19 vaccine */}
        <div
          className="modal fade"
          id="covidVaccine"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “COVID
                    19 Vaccine and Treatment”.
                  </h5>
                  <p>
                    Humankind has never had a more urgent task than creating
                    broad immunity for COVID 19. Harvard in Tech Seattle
                    presents a panel discussion exploring COVID 19 Vaccine &amp;
                    Treatment.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Sebastian Sorsaburu, MD: VP/Medical Head, Intercontinental
                    at Amgen
                    <br />
                    Lorence Kim, MD, CFO at Moderna Therapeutics
                    <br />
                    Aysu Uygur, PhD, Strategy Officer at Bill &amp; Melinda
                    Gates Foundation
                    <br />
                    Tarun Gupta, MD GP, Clinical Commissioner at NHS
                    <br />
                    Rhiju Das, PhD, Associate Professor of Biochemistry at
                    Stanford University School of Medicine
                    <br />
                    Libby Page, MPH, Immunization PM at Public Health, Seattle
                    &amp; King County
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      “Operation Warp Speed” an US based program funding 5
                      Vaccine producers - Moderna, AstraZeneca, Pfizer, Johnson
                      &amp; Johnson and Merck to expedite the production of
                      Vaccines. The program is committed to deliver a vaccine by
                      Jan 2021 and they are on target.
                    </li>
                    <li>
                      The Gates Foundation has funded 7 Factories of leading
                      COVID 19 Vaccine providers. This funding allows the
                      exploration of vaccines along parallel paths, and avoids a
                      bottleneck on the critical path of vaccine availability.
                    </li>
                    <li>
                      More than one Vaccine is necessary in order to allow
                      distribution to reach Global Scale (15 billion).
                      Innovation in transportation is necessary for some types
                      of vaccines, such as mRNA to maintain stability. i.e
                      OpenVaccine project.
                    </li>
                    <li>
                      The vaccines must be provided to high risk groups and
                      communities, independent of price.
                    </li>
                    <li>
                      More collaboration is needed across borders and across
                      companies for timely vaccine production.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Covid-19 mental health */}
        <div
          className="modal fade"
          id="covidMentalHealth"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “COVID
                    19: Maintaining Mental Health”.
                  </h5>
                  <p>
                    We explore how to maintain mental health during COVID 19
                    pandemic.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Dr. Amy Mezulis, a Harvard Alum, Co-Founder &amp; Chief
                    Psychologist at UpLif
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>Do not be afraid to seek help.</li>
                    <li>
                      Take initiative to connect, physically distancing but
                      socially engaging. Find ways to meaningfully engaged with
                      family and friends.{" "}
                    </li>
                    <li>
                      Stick to a normal routine. Set activities to a normal
                      schedule - work, family time, meal, sports, friends, sleep
                      and Including time off.
                    </li>
                    <li>
                      Take a problem solving approach when faced with different
                      socio economic triggers caused by COVID 19. (i.e resource
                      constraint, unemployment). Take a deep breath, manage your
                      anxiety and take steps to move forward.
                    </li>
                    <li>
                      When parents are burdened with so much pressure of working
                      from home, teaching at home, taking care of household
                      stuff, taking care of children, entertaining or keeping
                      them engaged, it is ok to lower expectations and
                      re-prioritize.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Covid-19 telemedicine */}
        <div
          className="modal fade"
          id="covidTelemedicine"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “COVID
                    19: Is Telemedicine the Future of Health Care?”
                  </h5>
                  <p>
                    The unprecedented outbreak of COVID-19 across the globe has
                    resulted in increased demand for telemedicine solutions.
                    Social distancing and lockdown implementation by several
                    countries as a preventive measure to curb the pandemic. The
                    impact of COVID 19 led us to explore with six distinguished
                    panelists - Is Telemedicine is the future of Healthcare?
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Prof. Myra White, Lecturer on Psychiatry, Harvard Medical
                    School
                    <br />
                    Greg Jarzabek, Co-Founder, CEO at Trustedoctor
                    <br />
                    Hassaan Ebrahim, Co-Founder, CEO at Hikma Health
                    <br />
                    Debbi Gillotti, COO at nVoq, Inc., Board Director at UP
                    <br />
                    Chad Hiner, RN, VP, Customer Experience at nVoq, Inc
                    <br />
                    Michael Hatzakis Jr, MD, Owner at HatzakisMD
                  </p>
                  <p>
                    Moderators:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                    <br />
                    Roger Hackett, Founder Ryan and Robbie LLC
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Telemedicine Technology combines hardware diagnostics,
                      software platforms, and Medical Practice guidance &amp;
                      services. The menu of services possible is expansive, and
                      COVID 19 demonstrates the need to expedite availability.
                    </li>
                    <li>
                      Telemedicine has global reach that can restructure the
                      supply and demand for healthcare.
                    </li>
                    <li>
                      The Rural Urban Divide, and the low income vs. high income
                      divide can be addressed through hybrid offerings via
                      extended reach in the USA and overseas. Regulation and
                      policy across states, and across borders needs to be
                      streamlined and optimized for shared value.
                    </li>
                    <li>
                      Telemedicine can provide a cost effective alternative to
                      cover many existing gaps in the current medical system.
                      These include follow up medical treatment, clarification,
                      diagnostics, and maintenance of care e.g. remedial
                      exercises, and medication adherence.
                    </li>
                    <li>
                      Telemedicine is powerful, and the privacy, governance, and
                      innovation mindset are important to establish Social
                      acceptance.
                    </li>
                    <li>
                      Telemedicine is the future of medicine, and it is critical
                      that all stakeholders are at the table to make sure it is
                      the right future.
                    </li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Covid-19: reopening economy */}
        <div
          className="modal fade"
          id="covidReopening"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on “COVID
                    19 and Reopening the Economy”.
                  </h5>
                  <p>
                    We explore what are the precautions needed to re-open the
                    economy, what kind of support needed in city, state and fed.
                    level, and also with the changes how do we prepare ahead for
                    technology infrastructure and services needed.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Mayor Kate Gallego of Phoenix, a fellow Harvard Alum
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      By practicing Social Distancing we are saving lives.
                    </li>
                    <li>
                      It is safer to reopen the Economy when COVID 19 is in 14
                      consecutive days downward trend (CDC recommended )
                    </li>
                    <li>
                      Testing is critical in controlling the COVID 19 pandemic.
                      However, we are not yet conducting enough testing.
                    </li>
                    <li>We are all in this together.</li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
        {/* Edutech solutions */}
        <div className="modal fade" id="edutech" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                Harvard in Tech Seattle Webinar
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen />
                </div>
                <div className="modal-description px-3">
                  <h5 className="py-3">
                    Harvard in Tech Seattle presents a special webinar on
                    “EduTech solutions to COVID 19”.
                  </h5>
                  <p>
                    We explore how Educational Technology can inform, influence
                    public behavior, improve social networking to reduce
                    isolation, and support overall health.
                  </p>
                  <p>
                    Panelists:
                    <br />
                    Harvard Prof. Mark Esposito
                  </p>
                  <p>
                    Moderator:
                    <br />
                    Mahenoor Yusuf, Chair, Harvard in Tech Seattle
                  </p>
                  <p> Key Takeaways: </p>
                  <ol>
                    <li>
                      Tools for collaboration can help us cope with Social
                      Distancing - Microsoft Teams, Facebook, LinkedIn, Skype,
                      Zoom, Google Hangout and other social media and
                      communications tools.
                    </li>
                    <li>
                      Physical &amp; mental health are equally important.
                      Activities can help bring a sense of normalcy to the
                      crisis, Virtual birthday parties: Evite, Garage Band, XBOX
                      Kinect, virtual personal fitness: Flight.
                    </li>
                    <li>
                      Lack of effective global emergency broadcast system that
                      is clear, consistent and unified to manage pandemic.
                    </li>
                    <li>
                      Leadership matters. We are a Global Society and need to
                      behave in a way to benefit the global community. Global
                      governance and collaboration required across countries.
                    </li>
                    <li>Stay safe, keep learning and be part of discussion.</li>
                  </ol>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Webinar;
