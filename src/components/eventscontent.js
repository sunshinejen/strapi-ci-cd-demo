import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/events.css";
import himg from "../images/events/Networking-Night.jpeg";
import card1 from "../images/events/Emerging Founders Breakfast.jpeg";
import card2 from "../images/events/Speaking Event.png";
import card3 from "../images/events/Events Page.jpeg";
const Events = () => {
  return (
    <>
      <div>
        <div className="container illustration-header d-flex align-items-center">
          <div className="content">
            <h4>Events</h4>
            <br />
            <p style={{ color: "black" }}>
              Come join us for in-person events that foster meaningful
              interactions and highlight alumni work.
            </p>
          </div>
          <img
            style={{ height: "362px", borderStyle: "none" }}
            className="img-fluid"
            src={himg}
          />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: "#ebeced", padding: "100px" }}
          >
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  width: "270px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "10px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={card1}
                  alt="people"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <div>
                  <h5 style={{ color: "#02274d", fontSize: "16px" }}>
                    Emerging Founders Breakfast
                  </h5>
                  <p style={{ fontSize: "14px" }}>
                    A monthly breakfast with experienced entrepreneurs who share
                    their insights with the next generation of founders
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  width: "270px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "10px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={card2}
                  alt="people"
                  style={{ width: "100%", marginBottom: "25px" }}
                />
                <div>
                  <h5 style={{ color: "#02274d", fontSize: "16px" }}>
                    Speaking Series
                  </h5>
                  <p style={{ fontSize: "14px" }}>
                    Technology focused panel discussion, featuring the best
                    &amp; brightest alumni CEOs &amp; Founders
                  </p>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  width: "270px",
                  boxShadow: "3px 3px 3px 3px lightgrey",
                  backgroundColor: "white",
                  padding: "20px",
                  margin: "10px",
                  minHeight: "350px",
                }}
              >
                <img
                  src={card3}
                  alt="people"
                  style={{ width: "100%", marginBottom: "22px" }}
                />
                <div>
                  <h5 style={{ color: "#02274d", fontSize: "16px" }}>
                    Networking Nights
                  </h5>
                  <p style={{ fontSize: "14px" }}>
                    Meet &amp; greet with like minded alums to share ideas,
                    exchange of information, advice, and referrals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
