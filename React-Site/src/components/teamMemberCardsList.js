import React from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

{/*<!-- Strategys -->*/}
export const StrategyCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>
          {/*<!-- Strategy -->*/}
            <div className="strategy max-width">
              <div className="d-flex justify-content-center flex-wrap">
                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Charl.png"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Charl du Plessis</h2>
                      <p className="hbs">(HBS PLDA 2021)</p>
                      <p className="role">
                        Chief Strategist
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/charl-duplessis/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Jay Tsao.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Jay Tsao</h2>
                      <p className="hbs">HES 2020</p>
                      <p>
                        Pricing Strategist
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/jaytsao/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Dawn R Duncan.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Dawn Duncan</h2>
                      <p className="hbs">HTHC 1991</p>
                      <p>
                        Strategist - Funding & Capacity Building
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/dawn-duncan-7b14b33/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/bruno Levi D'Ancona.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>bruno Levi D'Ancona </h2>
                      <p className="hbs">HES 2017</p>
                      <p>
                        Fundraising Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/bruno-levi-d-ancona-02744936"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Gulsah Goymen.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Gulsah Goymen</h2>
                      <p className="hbs">HBX 2016</p>
                      <p>
                        Strategic Program <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/gulsah-goymen-b0106b1"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* <!-- Strategy End -->*/}
        </div>
      </div>
    </>
  ) 
}

{/*<!-- Tech Solutions -->*/}
export const TechCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>
         
          <div className="tech-solutions max-width">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Dixit Prashant.jpg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Prashant Dixit</h2>
                    <p className="hbs">(HBS PLDA 2016)</p>
                    <p>
                      CTO
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/prdixit"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Mohammad.JPG"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Mohammad Ahmad</h2>
                    <br />
                    <p>
                      Software Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/mmahmad"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Zhen Xu.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Zhen Xu</h2>
                    <br />
                    <p>
                      Product Manager - Mobile App
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/zhen-xu-832254202"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Siddarth Nyati.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Siddarth Nyati</h2>
                    <br />
                    <p>
                      Program Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/siddarth-nyati"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Kinjal Gala.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Kinjal Gala</h2>
                    <br />
                    <p>
                      Technical Program <br /> Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/kinjal-gala"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Andi.png"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Andi Zhang</h2>
                    <br />
                    <p>
                      UI Designer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/andi-zhang-865b53135"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Yukti Sharma.png"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Yukti Sharma</h2>
                    <br />
                    <p>
                      Full Stack Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/yuktisharma1"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Larry Nguyen.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Larry Nguyen</h2>
                    <br />
                    <p>
                      Software Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/larry-nguyen-b4b116b6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Aaditya Doiphode.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Aaditya Doiphode</h2>
                    <br />
                    <p>
                      Software Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/aaditya-doiphode-6a30481ab"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Soomin Yeom.jpg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Soomin Yeom </h2>
                    <br />
                    <p>
                      Software Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/soomin-yeom-573b0320b"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Safeeka Ayoob.jpg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Safeeka Ayoob</h2>
                    <br />
                    <p>
                      WordPress Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/safeekayoob"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Chieh-Yin Wang.jpeg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Chieh-Yin Wang</h2>
                    <br />
                    <p>
                      Web Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/cywang1209"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Daniel Medina.jpg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Daniel Medina</h2>
                    <br />
                    <p>
                      Web Developer - React
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/dannymedina007"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src={"../images/team/Ross Edwards.jpg"}
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Ross Edwards</h2>
                    <br />
                    <p>
                      iOS Developer
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/rossedwardsus"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  ) 
}


{/*<!-- Call For Action -->*/}
export const CfaCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>
         
          <div className="cfa max-width">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Mai Ibrahim.jpg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Mai Ibrahim</h2>
                      <p className="hbs">(HBS Online 2021)</p>
                      <p>
                        Product Owner - <br /> Legislation
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/mai-deyaaie"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Gordon Synn.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Gordon Synn</h2>
                      <p className="hbs">(HLS 1989)</p>
                      <p>
                        Campaign Adviser
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/gordon-synn-b860a31"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/PawelUlfik.jpg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Pawel Ulfik</h2>
                      <p className="hbs">(Harvard Online 2018)</p>
                      <p>
                        Research Analyst
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/pawel-ulfik"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Abhik Chaudhuri.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Abhik Chaudhuri</h2>
                      <p className="hbs">(HarvardX 2014)</p>
                      <p>
                        Technology Policy <br /> Advisor
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/abhikchaudhuri"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/Giovanni Ludwig Arroyo.jpeg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Giovanni Ludwig Arroyo</h2>
                      <br />
                      <p>
                        Senior Program <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/gla/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src={"../images/team/DivyanshiPaliwal.jpg"}
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Divyanshi Paliwal</h2>
                      <br />
                      <p>
                        Product Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/divyanshi-paliwal"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Apporva Narahari.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Apoorva Narahari</h2>
                      <br />
                      <p>
                        Technical Solution <br /> Architect
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/apoorva-narahari-16689b11b"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/lekha D.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Lekha Dhagat</h2>
                      <br />
                      <p>
                        Research Associate
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/lekha-dave-5028a617"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Navya Paithara.PNG"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Navya Paithara</h2>
                      <br />
                      <p>
                        AI Consultant
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/navya-paithara-6b521217b"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Joseph Selwin.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Joseph Selwin</h2>
                      <br />
                      <p>
                        Technical Project <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/josephselwin"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Gayathri Sudhakar.jpg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Gayathri M. Sudhakar</h2>
                      <br />
                      <p>
                        Project Coordinator
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/gayathri-sudhakar"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Jun Xu.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Jun Xu</h2>
                      <br />
                      <p>
                        Associate Program <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/abby-jun-xu"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Anju Mary Peter.jpg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Anju Mary Peter</h2>
                      <br />
                      <p>
                        Associate Product <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/anju-maryy-peter"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Sule Sidigu.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Sule Sidigu</h2>
                      <br />
                      <p>
                        Data Scientist
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/sulesidigu/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </>
  ) 
}


{/*<!-- TFYP -->*/}
export const TfypCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

          <div className="tfyp max-width">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Shyamsundar K Ramaiah.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Shyamsundar K Ramaiah</h2>
                    <p className="hbs">(HBS PLDA 2020)</p>
                    <p>
                      Program Director
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/shyamsundar-k-r-3a91a940"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Jolin Fang.png"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Jolin Fang</h2>
                    <p className="hbs">HU 2021</p>
                    <p>
                      Program Host
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/jolin-fang"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Sofia Borodulina.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Sofia Borodulina</h2>
                    <p className="hbs">(HBS PLD 2018)</p>
                    <p>
                      Program Host
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/sofiaborodulina"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Joneil Sampana Headshot 2015.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Joneil M. Sampana</h2>
                    <br />
                    <p>
                      Microsoft Liaison
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/joneilmc"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Venkatesh Radhakrishnan.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Venkatesh Radhakrishnan</h2>
                    <br />
                    <p>
                      Technical Program <br /> Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/venkatesh-radhakrishnan-638b9b18"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Judith Berndt.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Judith Berndt</h2>
                    <br />
                    <p>
                      Project Coordinator
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/judith-berndt"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Lilian Ton Nu.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Lilian Ton Nu</h2>
                    <br />
                    <p>
                      Research Associate
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/lilian-ton-nu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  ) 
}


{/*<!-- Webinar -->*/}
export const WebinarCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

          <div className="webinar max-width">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Anastasia.png"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Anastasia Chernykh</h2>
                    <p className="hbs">(HBS PLD 2022)</p>
                    <p>
                      Program Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/anastasia-chernykh-69409bb2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Videhi Mallela.jpeg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Videhi Mallela</h2>
                    <p className="hbs">HES 2015</p>
                    <p>
                      Program Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/videhi"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Roger.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Roger Hacket</h2>
                    <p className="hbs">(HES 2018)</p>
                    <p>
                      Program Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/rogerhackett"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Gigi Palma.jpeg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Gigi Palma</h2>
                    <br />
                    <p>
                      Program Manager
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/gigirodriguezpalma"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Hearee Choo_headshot.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Hearee Choo</h2>
                    <br />
                    <p>
                      Research Analyst
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/hearee-choo-2934421a4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Kanika Sharma.jpeg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Kanika Sharma</h2>
                    <br />
                    <p>
                      Program Manager - <br /> Biotech
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/kanika-s-01682525/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  ) 
}

{/*<!-- Podcast  -->*/}
export const PodcastCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

          <div className="podcast max-width">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Amr Bennis.jpg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Amr Bennis</h2>
                    <p className="hbs">(HU 2015)</p>
                    <p>
                      Podcast Host
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/amrbennis"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Stephen Harper.png"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Stephan Harper</h2>
                    <p className="hbs">(HU 2012)</p>
                    <p>
                      Podcast Adviser
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/sdeanharper"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="column-float">
                <div className="card">
                  <StaticImage
                    className="card-image"
                    src="../images/team/Vesna Ilieska.jpeg"
                    alt="headshot"
                  />
                  <div className="card-text">
                    <h2>Vesna Illieska</h2>
                    <br />
                    <p>
                      Podcast Editor
                      <a
                        rel="noreferrer"
                        className="link mx-2"
                        href="https://www.linkedin.com/in/vespro-audio"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  ) 
}

{/*<!-- Digital Marketing  -->*/}
export const DigitalMarketingCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

            <div className="digital-marketing max-width">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Erin Liu.jpg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Erin Liu</h2>
                      <p className="hbs">(HBS Online 2021)</p>
                      <p>
                        Digital Marketing <br /> Director
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/erinalaire"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Lawrence Weru.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Lawrence Weru</h2>
                      <p className="hbs">(HMS 2021)</p>
                      <p>
                        Managing Editor Blog
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/lawrenceweru"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Amy Reichel.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Amy Reichel</h2>
                      <p className="hbs">HC 1985</p>
                      <p>
                        Harvard Outreach <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/amy-reichel-74b8a776"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Scott Mallory.jpg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Scott Mallory, Jr.</h2>
                      <p className="hbs">(HBS Online 2020)</p>
                      <p>
                        Outreach Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/iscottm"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Maxim_Goryunov_photo.png"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Maxim Goryunov</h2>
                      <br />
                      <p>
                        Blog Writer
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/maxStaticImageoryunov"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Liangfan Pang.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Liangfan Pang</h2>
                      <br />
                      <p>
                        Research Analyst - <br /> Outreach
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/liangfan-amanda-pang-54bba5175"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Yuhyun Hwang.png"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Yuhyun Hwang</h2>
                      <br />
                      <p>
                        Social Media Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/yuhyun-hwang-"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Reeda Shimaz.jpg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Reeda Shimaz Huda</h2>
                      <br />
                      <p>
                        Outreach Coordinator
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/reeda-shimaz-huda-257b381b6"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/brittney Irby.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>brittney Irby</h2>
                      <br />
                      <p>
                        Blog Writer
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/brittneyirby"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  ) 
}

{/*<!-- Volunteer Support -->*/}
export const VolunteerSupportCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

            <div className="volunteer-support max-width">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Renuka Solanki.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Renuka Solanki</h2>
                      <p className="hbs">(HBS Mgmt. Essential 2021)</p>
                      <p>
                        Volunteer Coordination <br /> Manager
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/renuka-solanki-7178b279"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column-float">
                  <div className="card">
                    <StaticImage
                      className="card-image"
                      src="../images/team/Erica Freeman.jpeg"
                      alt="headshot"
                    />
                    <div className="card-text">
                      <h2>Erica D Freeman</h2>
                      <br />
                      <p>
                        Volunteer Recruiter
                        <a
                          rel="noreferrer"
                          className="link mx-2"
                          href="https://www.linkedin.com/in/erica-d-freeman/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} color="#AF8661" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  ) 
}


{/*<!-- Event Management  -->*/}
export const EventManagementCard = () => {
  return (
    <>
      <div className="bgd team-cards">
        <div
          className="container justify-content-center align-items-center"
          style={{ padding: "2em", paddingTop: "0" }}>

            <div className="event-management max-widtht">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                
              </div>
            </div>

        </div>
      </div>
    </>
  ) 
}          