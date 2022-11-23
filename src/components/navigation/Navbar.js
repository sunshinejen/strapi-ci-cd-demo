import React from "react";
import "../../css/main.css";
import logo from "../../images/logo/HiTS-Logo-new.png";
import hlogo from "../../images/logo/harvard-logo.png";
import { Helmet } from "react-helmet";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Dropdown, NavDropdown, Container } from "react-bootstrap";
import { Link } from "gatsby";

const NavBar2 = ({ location }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
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
  const current_page = location.pathname;

  const NavToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="navbar-toggler"
      href="#"
      id="navbarDropdown"
      role="button"
      data-toggle="navbarSupportedContent"
      style={{ textAlign: "center", margin: "auto" }}
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

  return (
    <>
      {/* Head Tags - global */}
      <Helmet>
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Webinars | Harvard in Tech Seattle</title>
          <link rel="shortcut icon" type="image/jpg" href={logo} />
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </div>
      </Helmet>

      {/* Logo for Nav */}
      <div className="logo-container">
        <div className="parent">
          <div className="left" />
          <div className="center">
            <Link to="/">
              <img
                src={logo}
                className="rounded mx-auto d-block"
                alt="Logo"
                width="100em"
                height="100em"
              />
            </Link>
          </div>

          <div className="right">
            <div style={{ paddingRight: "2em", textAlign: "right" }}>
              {current_page == "/" ? (
                <p>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ fontSize: "1rem", paddingRight: "1px" }}
                  />
                  <a
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      paddingLeft: "3px",
                    }}
                    href="https://www.harvardintech.com/"
                  >
                    Harvard in Tech
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* Actual Nav */}
      <div className="container">
        <div className="mx-auto navbar-container">
          <div className="row" style={{}}>
            <div
              className="col-12-md"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <Navbar
                expand="lg"
                variant="light"
                sticky="top"
                className="navbar navbar-expand-lg navbar-light sticky-top"
              >
                <div className="container">
                  <Navbar.Toggle
                    style={{ textAlign: "center", margin: "auto" }}
                    className=" mr-auto"
                    id="navbar-nav"
                    placement="end"
                    aria-controls="basic-navbar-nav"
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                      style={{ textAlign: "center", margin: "auto" }}
                      className=" mr-auto"
                      id="navbar-nav"
                      placement="end"
                    >
                      <Nav.Item className="nav-item active">

                        <Link className="nav-link" to="/">
                          Home <span className="sr-only">(current)</span>
                        </Link>

                      </Nav.Item>
                      <Dropdown className="nav-item dropdown">
                        <Dropdown.Toggle as={CustomToggle}>
                          Programs
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                          <Link className="dropdown-item" to="/webinars">
                            Webinars
                          </Link>

                          <div className="dropdown-divider"></div>

                          <Link className="dropdown-item" to="/podcast">
                            Podcasts
                          </Link>

                          <div className="dropdown-divider"></div>

                          <Link className="dropdown-item" to="/young-professionals">
                            Tech For Young Professionals
                          </Link>

                          <div className="dropdown-divider"></div>

                          <Link className="dropdown-item" to="/call-for-action">
                            Call For Action
                          </Link>

                          <div className="dropdown-divider"></div>

                          <Link className="dropdown-item" to="/events">
                            Events
                          </Link>

                        </Dropdown.Menu>
                      </Dropdown>

                      <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/blogs">
                          Blogs
                        </Link>
                      </Nav.Item>

                      <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/volunteer">
                          Volunteer Opportunities
                        </Link>
                      </Nav.Item>

                      <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/buzz">
                          Harvard in Tech Seattle Buzz
                        </Link>
                      </Nav.Item>

                      <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/team">
                          Team
                        </Link>
                      </Nav.Item>

                      <Nav.Item className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact Us
                        </Link>

                      </Nav.Item>
                      {/* Empty for some whitespace before the Join Us item */}
                      <Nav.Item className="nav-item">
                        <div className="empty-div" />
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <div className="joinus-button">
                          <span className="joinus-text">
                            <a
                              style={{ textDecoration: "none" }}
                              className="joinus-text"
                              href="https://lnkd.in/g43ipkP"
                              target="blank"
                            >
                              Join Us
                            </a>
                          </span>
                        </div>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </div>
              </Navbar>
            </div>
          </div>
          <img id="harvard-logo" src={hlogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavBar2;
