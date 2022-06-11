import React from "react";
import "../css/main.css";

import "../css/blog-articles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTh,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import himg from "../images/blog/article-thumbnails/artificial-intelligence-blog-image.png";
import img1 from "../images/blog/article-thumbnails/metaverse-blog-image.png";
import img2 from "../images/blog/article-thumbnails/smartcity-blog-image.png";
import img3 from "../images/blog/article-thumbnails/space-economy-blog-image.png";
import author1 from "../images/team/Maxim_Goryunov_photo.png";
import author2 from "../images/team/Lawrence Weru.jpeg";

const BlogContent = () => {
  /////////////////////////////////
  // More Button
  function moreBtn() {
    var grid = document.getElementsByClassName("morecards");
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
  // Slides
  function blogChecker(e) {
    const selectedSlide = e.target.parentElement;
    const slideData = selectedSlide.getAttribute("data-li");
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains(slideData)) {
        slides[i].classList.add("active");
      } else {
        slides[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <div className="wrapper">
        {/* Latest Webinar */}
        <section className="page-section clearfix slide-1 slide active">
          <div className="container">
            <div className="intro ">
              <div className="intro-img ">
                <img className="cover-img img-fluid" src={himg} alt="..." />
              </div>
              <div className="intro-text bg-faded p-4 rounded">
                <h5> Maxim Goryunov </h5>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4>
                      Artificial intelligence development is an
                      interdisciplinary endeavor.
                    </h4>
                  </span>
                </h2>
                <p className="mb-3">
                  What questions does the development of AI pose to society?
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  href="/artificial-intelligence-society"
                  className="button"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section clearfix slide-2 slide">
          <div className="container">
            <div className="intro ">
              <img className="intro-img img-fluid" src={img1} alt="..." />
              <div className="intro-text bg-faded p-4 rounded">
                <h5> Lawrence Weru</h5>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4>Will the metaverse augment reality or replace it?</h4>
                  </span>
                </h2>
                <p className="mb-3">
                  Who holds a stake in the metaverse, and how might it impact
                  our lives?
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  href="/metaverse"
                  className="button"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section clearfix slide-3 slide">
          <div className="container">
            <div className="intro">
              <img className="intro-img img-fluid" src={img2} alt="..." />
              <div className="intro-text bg-faded p-4 rounded">
                <h5>Maxim Goryunov</h5>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4>Is the smart city the city of the future?</h4>
                  </span>
                </h2>
                <p className="mb-3">
                  More than 55 percent of the world's population lives in
                  cities, and by 2050, 68 percent. Are smart cities the answer?
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  href="/smartcity"
                  className="button"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section clearfix slide-4 slide">
          <div className="container">
            <div className="intro ">
              <img className="intro-img img-fluid" src={img3} alt="..." />
              <div className="intro-text bg-faded p-4 rounded">
                <h5>Maxim Goryunov</h5>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4>The commercialization of the Space Economy</h4>
                  </span>
                </h2>
                <p className="mb-3">
                  The growing space economy will open up opportunities for
                  technological and organizational change.
                </p>
                <a
                  style={{ textDecoration: "none" }}
                  href="/spaceeconomy"
                  className="button"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section clearfix">
          <div className="container d-flex justify-content-center flex-wrap btn-group btn-group-toggle">
            <div className="gallery">
              <button
                type="button"
                onClick={(e) => blogChecker(e)}
                className="slideButton slidebtn1"
                data-li="slide-1"
              >
                <img src={himg} alt="" />
                <div className="desc slide-1">
                  Artificial intelligence development is an interdisciplinary
                  endeavor.
                </div>
              </button>
            </div>
            <div className="gallery">
              <button
                onClick={(e) => blogChecker(e)}
                type="button"
                className="slideButton slidebtn2"
                data-li="slide-2"
              >
                <img src={img1} alt="" />
                <div className="desc slide-2">
                  Will the metaverse augment reality or replace it?
                </div>
              </button>
            </div>
            <div className="gallery">
              <button
                onClick={(e) => blogChecker(e)}
                type="button"
                className="slideButton slidebtn3"
                data-li="slide-3"
              >
                <img src={img2} alt="" />
                <div className="desc slide-3">
                  Is the smart city the city of the future?
                </div>
              </button>
            </div>
            <div className="gallery">
              <button
                onClick={(e) => blogChecker(e)}
                type="button"
                className="slideButton slidebtn4"
                data-li="slide-4"
              >
                <img src={img3} alt="" />
                <div className="desc slide-4">
                  The commercialization of the Space Economy
                </div>
              </button>
            </div>
          </div>
        </section>
        {/* Tabs */}
        <div className="background">
          <div className="tabs pt-5 container">
            {/* Latest Articles tab */}
            <input
              type="radio"
              className="tabs__radio"
              name="tabs-blog"
              id="articles-tab"
            />
            <label htmlFor="articles-tab" className="tabs__label">
              <h5>Latest Articles</h5>
            </label>
            {/* Latest Articles content */}
            <div className="tabs__content">
              <section className="latest-Articles">
                <div className="container py-5">
                  {/* Title/Buttons */}
                  <div className="row align-items-end pb-3">
                    <div className="col">
                      <h5>Latest Articles</h5>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                      {/* Grid / List toggle */}
                      <button
                        onClick={gridBtn}
                        className="btn"
                        id="grid-button"
                      >
                        <FontAwesomeIcon icon={faTh} />
                      </button>
                      <button
                        onClick={listBtn}
                        className="btn"
                        id="list-button"
                      >
                        <FontAwesomeIcon icon={faListUl} />
                      </button>
                      {/* Filter by year function */}
                      <div className="dropdown px-4">
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
                  </div>
                  {/* Grid */}
                  <section className="webinar-grid">
                    {/* Most recent 3 Articles */}
                    <div className="wrapper-grid">
                      {/* // Recent 3 Articles // */}
                      {/* Artificial intelligence*/}
                      <div className="grid-item recent-3 2021">
                        <div className="card">
                          <img src={himg} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2">
                              Maxim Goryunov
                            </h6>
                            <h5 className="card-title">
                              Artificial intelligence development is an
                              interdisciplinary endeavor
                            </h5>
                            <p className="card-text">
                              What questions does the development of AI pose to
                              society?
                              <br />
                              <br />
                            </p>
                            <a
                              style={{ textDecoration: "none" }}
                              href="/artificial-intelligence-society"
                              className="button"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid-item recent-3 2021">
                        <div className="card">
                          <img src={img1} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2">
                              Lawrence Weru
                            </h6>
                            <h5 className="card-title">
                              Will the metaverse augment reality or replace it?
                            </h5>
                            <p className="card-text">
                              Who holds a stake in the metaverse, and how might
                              it impact our lives?
                              <br />
                              <br />
                              <br />
                            </p>
                            <a
                              style={{ textDecoration: "none" }}
                              href="/metaverse"
                              className="button"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Smartcity */}
                      <div className="grid-item recent-3 2021">
                        <div className="card align-middle">
                          <img src={img2} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2">
                              Maxim Goryunov
                            </h6>
                            <h5 className="card-title">
                              Is the smart city the city of the future?
                            </h5>
                            <p className="card-text">
                              More than 55 percent of the world's population
                              lives in cities, and by 2050, 68 percent. Are
                              smart cities the answer?
                            </p>
                            <a
                              style={{ textDecoration: "none" }}
                              href="/smartcity"
                              className="button"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Space economy */}
                      <div className="grid-item 2021 morecards">
                        <div className="card">
                          <img src={img3} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2">
                              Maxim Goryunov
                            </h6>
                            <h5 className="card-title">
                              The commercialization of the Space Economy
                            </h5>
                            <p className="card-text">
                              The growing space economy will open up
                              opportunities for technological and organizational
                              change.
                              <br />
                              <br />
                            </p>
                            <a
                              style={{ textDecoration: "none" }}
                              href="/spaceeconomy"
                              className="button"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Show all Articles button */}
                    <div className="morebtn row pb-3 see-more-button-row">
                      <button
                        onClick={moreBtn}
                        className="morebtn btn mx-auto"
                        id="see-more-button"
                      >
                        More <FontAwesomeIcon icon={faChevronDown} />
                      </button>
                    </div>
                  </section>
                  {/* List */}
                  <section className="webinar-list">
                    <div className="wrapper-list">
                      <li className="list 2021">
                        <a
                          style={{ color: "black" }}
                          href="/artificial-intelligence-society"
                        >
                          Artificial intelligence development is an
                          interdisciplinary endeavor
                        </a>
                      </li>
                      <li className="list 2021">
                        <a style={{ color: "black" }} href="/metaverse">
                          Will the metaverse augment reality or replace it?
                        </a>
                      </li>
                      <li className="list 2021">
                        <a style={{ color: "black" }} href="/smartcity">
                          Is the smart city the city of the future?
                        </a>
                      </li>
                      <li className="list 2021">
                        <a style={{ color: "black" }} href="/spaceeconomy">
                          The commercialization of the Space Economy
                        </a>
                      </li>
                    </div>
                  </section>
                </div>
              </section>
            </div>
            {/* Authors tab */}
            <input
              type="radio"
              className="tabs__radio"
              name="tabs-blog"
              id="authors-tab"
              defaultChecked
            />
            <label htmlFor="authors-tab" className="tabs__label">
              <h5>Authors</h5>
            </label>
            {/* Authors content */}
            <div className="tabs__content">
              <section id="blog-authors">
                <div className="container py-5">
                  <div className="authors-container">
                    {/* Maxim Goryunov */}
                    <div className="author-card">
                      <img
                        className="profile-img"
                        src={author1}
                        alt="blog author"
                      />
                      <div className="text">
                        <h5 className="author-name">
                          Maxim Goryunov
                          <a
                            style={{ textDecoration: "none" }}
                            className="latest-article-link"
                            href="/artificial-intelligence-society"
                          >
                            View latest article
                          </a>
                        </h5>
                        <h6 className="job-title">Technical Writer</h6>
                        <div className="description">
                          Maxim is a technical writer at Harvard in Tech
                          Seattle, focusing on strategic management, digital and
                          sustainable development and entrepreneurship. His work
                          focuses on bridging technological innovations for the
                          benefit of society.
                        </div>
                      </div>
                    </div>
                    {/* Lawrence Weru */}
                    <div className="author-card">
                      <img
                        className="profile-img"
                        src={author2}
                        alt="blog author"
                      />
                      <div className="text">
                        <h5 className="author-name">
                          Lawrence Weru
                          <a
                            style={{ textDecoration: "none" }}
                            className="latest-article-link"
                            href="/metaverse"
                          >
                            View latest article
                          </a>
                        </h5>
                        <h6 className="job-title">Technical Writer</h6>
                        <div className="description">
                          Larry is a TEDx speaker, consultant, and digital
                          storyteller serving as managing editor at Harvard in
                          Tech Seattle. He’s a “Notable Nole” alumnus of FSU and
                          an associate alumnus of Harvard Medical School
                          certified in Media and Medicine. His works are
                          featured by Fast Company and Gizmodo Japan, and he has
                          authored and co-authored stories for magazines and
                          newspapers such as Slate, Vox, the Toronto Star, and
                          the Orlando Sentinel.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
