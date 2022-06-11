import React, { useEffect } from "react";
import "../css/main.css";
import "../css/podcast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTh,
  faListUl,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import { faSoundcloud, faSpotify } from "@fortawesome/free-brands-svg-icons";
import himg from "../images/podcast/HiTS Podcast Ziad Ismail.png";
import pod1 from "../images/podcast/HiTS Podcast Spencer Rascoff.png";
import pod2 from "../images/podcast/HiTS Podcast Aran Khanna.png";
import pod3 from "../images/podcast/HiTS Podcast Laura Butler.png";
import pod4 from "../images/podcast/HiTS Podcast Bridget Frey.png";
import pod5 from "../images/podcast/HiTS Podcast My Le Goel.png";
import pod6 from "../images/podcast/HiTS Podcast Steven Maheshwary.png";
import { Dropdown } from "react-bootstrap";
const Podcast = () => {
  // Grind Buttons
  function gridBtn() {
    var grid = document.getElementsByClassName("podcast-grid");
    var list = document.getElementsByClassName("podcast-list");

    for (var i = 0; i < grid.length; i++) {
      grid[i].style.display = "block";
    }
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
  }

  function listBtn() {
    var grid = document.getElementsByClassName("podcast-grid");
    var list = document.getElementsByClassName("podcast-list");
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
  return (
    <>
      <section className="page-section" className="clearfix">
        <div className="container">
          <div className="intro">
            <img
              fluid
              style={{
                paddingBottom: "100px",
              }}
              className="introimg img-fluid mb-3 mb-lg-0 rounded"
              src={himg}
              alt="..."
            />
            <div className="intro-text bg-faded p-4 rounded">
              <h2 className="section-heading">
                <span className="section-heading-lower">
                  <h4>
                    Ziad Ismail <span id="alumniText">(HBS '04)</span>
                  </h4>
                </span>
              </h2>
              <h6 className="mb-4">Chief Product Officer, Convoy</h6>
              <p className="mb-3">
                Ziad Ismail is the Chief Product Officer of Convoy. Before
                Convoy, Ziad was the Chief Product Officer of Marchex, Chief
                Executive Officer of CitiKey, and served in other leadership
                roles at Microsoft. Ziad earned an MBA from Harvard Business
                School. The key takeaways from the podcast are: key insights
                into the logistics in the transportation industry, how work
                ethic and curiosity is underrated.
              </p>
              <div className="row podcast-buttons">
                <div className="col">
                  <div className="podcast-buttons">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://soundcloud.com/user-616895977/episode-7-ziad-ismail"
                    >
                      <FontAwesomeIcon
                        icon={faSoundcloud}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Soundcloud"
                        className="podbtn fa-2x"
                      />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://open.spotify.com/episode/21zx9bZemsy1x2CpBtBNmB?si=ORSDiWtlRaW9YlIlrMbLhw"
                    >
                      <FontAwesomeIcon
                        icon={faSpotify}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Spotify"
                        className="podbtn fa-2x"
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-7-ziad-ismail/id1547518984?i=1000539813540"
                    >
                      <FontAwesomeIcon
                        icon={faPodcast}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Apple Podcasts"
                        className="podbtn fa-2x"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Podcasts */}
      <section className="latest-Podcasts">
        <div className="container py-5">
          {/* Title/Buttons */}
          <div className="row align-items-end pb-3">
            <div className="col">
              <h5>Latest Podcasts</h5>
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
          <section className="podcast-grid">
            <div className="wrapper-grid">
              {/* Add next episode after this */}
              {/* Episode 6 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Spencer Rascoff (HU '97)</h5>
                    <h6>
                      Co-founder &amp; Chair
                      <br />
                      Pacaso, Supernova SPAC, dot.LA
                    </h6>
                    <p className="card-text mb-4">
                      Spencer Rascoff is the CEO of Pacaso. He was previously
                      the CEO of Zillow for over 13 years as well as co-founding
                      and/or being board members of many other companies e.g.
                      dot.LA, Palantir, 75 &amp; Sunny, etc.
                    </p>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/episode-6-spencer-rascoff"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/2s7xeL8UUp9OLI4cYwNfO1?si=MPmh5O59R0yWKhObj1VWsw&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-6-spencer-rascoff/id1547518984?i=1000524831488"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Episode 5 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Aran Khanna (HU '16)</h5>
                    <h6>
                      CEO and Co-founder
                      <br />
                      Reserved.ai
                    </h6>
                    <p className="card-text mb-4">
                      Aran Khanna is co-founder and CEO of Reserved.ai. He
                      graduated from Harvard College in 2016. He has previously
                      worked at several startups, one of which was acquired by
                      Amazon Web Services (AWS). One of the principles he
                      follows and explains in this episode is extreme ownership.
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/episode-5-aran-khanna"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/7DM8S55UZRGq93QNKMAQoP?si=FIVxEUHVSS6LAY0sefP-AQ&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-5-aran-khanna/id1547518984?i=1000520002062"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Episode 4 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Laura Butler</h5>
                    <h6>
                      CEO and Co-founder
                      <br />
                      UpLift Group Inc.
                    </h6>
                    <p className="card-text mb-4">
                      Laura Butler is Co-founder and CEO/CTO of UpLift Group.
                      She is also an amateur angel and LP who takes a fairy
                      godmother approach.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/harvard-in-tech-seattle-podcast-episode-4-laura-butler"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/16L6HOcGMMgqDGNcE6ZaX3?si=s4eCouVfQq-1HeN9X4XxJg&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-4-laura-butler/id1547518984?i=1000510594113"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Episode 3 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bridget Frey (HU '99)</h5>
                    <h6>
                      Chief Technology Officer
                      <br />
                      Redfin
                    </h6>
                    <p className="card-text mb-4">
                      As Redfin's Chief Technology Officer, Bridget leads the
                      software engineering team, which she has grow
                      podcast-buttonsn to more than 150 engineers in Seattle and
                      San Francisco.
                    </p>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/episode-3-bridget-frey"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/1kQUYTJyXEdbWRqc5YFZVw?si=uXDqswYPQvK1bUfC3kvNtw&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-3-bridget-frey/id1547518984?i=1000507775956"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Episode 2 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">My Le Goel (HU '04)</h5>
                    <h6>
                      CEO and Founder
                      <br />
                      Flight Live Inc.
                    </h6>
                    <p className="card-text mb-4">
                      My Le is the CEO of FlightLive, a mobile wellness
                      technology platform for live, interactive, virtual
                      personal fitness training that matches clients with a
                      curated list of certified personal trainers and yoga
                      instructors.
                    </p>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/my-le-goel"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/2JXKfaj3Fx7WxS0M1EAGjt?si=_xGFmJE2QSuu2O_ju0f5yQ&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-2-my-le-goel/id1547518984?i=1000504437918"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Episode 1 */}
              <div className="grid-item">
                <div className="card">
                  <img src={pod6} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Steven Maheshwary (HU '12)</h5>
                    <h6>
                      Director of Economic Development - IT, Washington State
                    </h6>
                    <p className="card-text mb-4">
                      Steven Maheshwary is a tech industry veteran who is
                      passionate about the nexus of the tech and positive social
                      impact through fostering entrepreneurship, building
                      partnerships and empowering communities.
                    </p>
                    <br />
                    <div className="row">
                      <div className="col">
                        <div className="podcast-buttons">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/user-616895977/harvard-in-tech-seattle-podcast-episode-1-steven-maheshwary"
                          >
                            <FontAwesomeIcon
                              icon={faSoundcloud}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Soundcloud"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://open.spotify.com/episode/4XMFIFruYPtJJvuSWhPT03?si=lwgF90WxST6tXhtmp1YnZA&dl_branch=1"
                          >
                            <FontAwesomeIcon
                              icon={faSpotify}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Spotify"
                              className="podbtn fa-2x"
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-1-steven-maheshwary/id1547518984?i=1000504437919"
                          >
                            <FontAwesomeIcon
                              icon={faPodcast}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Apple Podcasts"
                              className="podbtn fa-2x"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* List */}
          <section className="podcast-list">
            <div>
              {/* Episode 6 */}
              <li className="podli 2021">
                Harvard in Tech Seattle Podcast Episode 6 - Spencer Rascoff
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/episode-6-spencer-rascoff"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/2s7xeL8UUp9OLI4cYwNfO1?si=MPmh5O59R0yWKhObj1VWsw&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-6-spencer-rascoff/id1547518984?i=1000524831488"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
              {/* Episode 5 */}
              <li className="podli 2021">
                Harvard in Tech Seattle Podcast Episode 5 - Aran Khanna
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/episode-5-aran-khanna"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/7DM8S55UZRGq93QNKMAQoP?si=FIVxEUHVSS6LAY0sefP-AQ&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-5-aran-khanna/id1547518984?i=1000520002062"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
              {/* Episode 4 */}
              <li className="podli 2021">
                Harvard in Tech Seattle Podcast Episode 4 - Laura Butler
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/harvard-in-tech-seattle-podcast-episode-4-laura-butler"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/16L6HOcGMMgqDGNcE6ZaX3?si=s4eCouVfQq-1HeN9X4XxJg&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-4-laura-butler/id1547518984?i=1000510594113"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
              {/* Episode 3 */}
              <li className="podli 2021">
                Harvard in Tech Seattle Podcast Episode 3 - Bridget Frey
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/episode-3-bridget-frey"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/1kQUYTJyXEdbWRqc5YFZVw?si=uXDqswYPQvK1bUfC3kvNtw&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-3-bridget-frey/id1547518984?i=1000507775956"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
              {/* Episode 2 */}
              <li className="podli 2021">
                Harvard In Tech Seattle Podcast Episode 2 - My Le Goel
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/my-le-goel"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/2JXKfaj3Fx7WxS0M1EAGjt?si=_xGFmJE2QSuu2O_ju0f5yQ&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-2-my-le-goel/id1547518984?i=1000504437918"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
              {/* Episode 1 */}
              <li className="podli 2020">
                Harvard In Tech Seattle Podcast Episode 1 - Steven Maheshwary
                <span className="listbtns">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/user-616895977/harvard-in-tech-seattle-podcast-episode-1-steven-maheshwary"
                  >
                    <FontAwesomeIcon
                      icon={faSoundcloud}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/episode/4XMFIFruYPtJJvuSWhPT03?si=lwgF90WxST6tXhtmp1YnZA&dl_branch=1"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className="podbtn podbtnlist"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://podcasts.apple.com/us/podcast/harvard-in-tech-seattle-podcast-episode-1-steven-maheshwary/id1547518984?i=1000504437919"
                  >
                    <FontAwesomeIcon
                      icon={faPodcast}
                      className="podbtn podbtnlist"
                    />
                  </a>
                </span>
              </li>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Podcast;
