import React from "react";
import "../css/main.css";
import whoweare from "../images/logo/whoweare.jpeg";
import webi1 from "../images/webinar/tech-in-us-defense-flyer.png";
import webi2 from "../images/webinar/smart-city-flyer.png";
import webi3 from "../images/webinar/future-of-digital-assets-flyer.png";
import webi4 from "../images/webinar/ar-vr-flyer.png";
import pod1 from "../images/podcast/HiTS Podcast Spencer Rascoff.png";
import pod2 from "../images/podcast/HiTS Podcast Steven Maheshwary.png";
import pod3 from "../images/podcast/HiTS Podcast Aran Khanna.png";
import pod4 from "../images/podcast/HiTS Podcast My Le Goel.png";
import buzz1 from "../images/buzz/1.png";
import buzz2 from "../images/buzz/2.png";
import buzz3 from "../images/buzz/3.png";

const FrontPage = () => {
  return (
    <>
      <div>
        {/* Who we are: @Judy */}
        <div id="whoweare" className="color-background">
          <div className="container py-5 d-flex flex-column pad-container color-background">
            <div className="row">
              <div
                id="whoweare-text"
                className="col-lg-6 order-1 order-lg-2 pad-text"
              >
                <h5>Who We Are</h5>
                <h3>Together, we explore technology with the world!</h3>
                <br />
                <p>
                  Harvard in Tech Seattle is a far-reaching chapter of Harvard
                  Alumni in Tech, the official Harvard University-wide Alumni
                  Group for Technology. We aim to further the development of
                  technology by encouraging innovation through collaboration,
                  cultivating new ideas by connecting technologists of all
                  backgrounds with resources and networks on a global scale. Our
                  passion is learning, improving, and exploring technology, all
                  to bring together our diverse, global community.
                </p>
                <p>
                  We are a volunteer driven organization aimed to support, serve
                  and connect Harvard Tech Alumni to the community and the
                  world.
                </p>
                <a href="/volunteer" target="_blank">
                  <div className="button">Become a Volunteer</div>
                </a>
                <br />
              </div>
              <div id="whoweare-image" className="col-lg-6 order-1 order-lg-2">
                <div>
                  <img src={whoweare} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Webinar Series: @Larry */}
        <div className="webinar container py-5">
          <div className="row">
            <div
              id="podcast-thumbnails"
              className="col-lg-6 order-1 order-lg-2"
            >
              <div className="row">
                <div className="flex-container">
                  <div className="flex-child">
                    <img src={webi1} />
                  </div>
                  <div className="flex-child">
                    <img src={webi2} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="flex-container">
                  <div className="flex-child">
                    <img src={webi3} />
                  </div>
                  <div className="flex-child">
                    <img src={webi4} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 pad-text">
              <h5>Webinar Series</h5>
              <h3>
                Tune in to our latest Webinar with professionals from around the
                globe! Join us live or check out our episodes here.
              </h3>
              <p className="pt-3">
                Harvard in Tech Seattle webinar series are a great way to keep
                up with the current market trends in technology with regards to
                the socio-economic impacts and beyond. The series host experts
                from the Harvard alum network and beyond who share their
                knowledge and have an open dialogue with the audience. Whether
                you are looking into investing or exploring the industry or a
                technophile, come learn from the best and have your questions
                answered.
              </p>
              <a href="/webinars" target="_blank">
                <div className="button">Watch Webinars</div>
              </a>
            </div>
          </div>
        </div>
        {/* Podcast Section */}
        <div id="podcast" className="color-background">
          <div className="container d-flex flex-column pad-container">
            <div className="row">
              <div
                id="podcast-text"
                className="col-lg-6 order-1 order-lg-2 pad-text"
              >
                <h5>Podcast Series</h5>
                <h3>
                  Hear our latest podcast featuring Harvard professionals who
                  have made a difference in our industry!
                </h3>
                <br />
                <p>
                  Harvard in Tech Seattle Podcast is a monthly podcast,
                  enriching the Harvard in Tech Seattle community through
                  spotlighting Harvard alumni in Seattle’s technology sector.
                  The podcast connects our community with each other through
                  discussion and knowledge sharing, providing values through our
                  guests.
                </p>
                <div>
                  <a href="/podcast" target="_blank">
                    <div className="button">Listen Podcast</div>
                  </a>
                </div>
              </div>
              <div
                id="podcast-thumbnails"
                className="col-lg-6 order-1 order-lg-2"
              >
                <div className="row">
                  <div className="flex-container">
                    <div className="flex-child">
                      {/* <a href="https://soundcloud.com/user-616895977/episode-6-spencer-rascoff"> */}
                      <img src={pod1} />
                      {/* </a> */}
                    </div>
                    <div className="flex-child">
                      {/* <a href="https://soundcloud.com/user-616895977/harvard-in-tech-seattle-podcast-episode-1-steven-maheshwary/s-Y6fwQCZbaPJ"> */}
                      <img src={pod2} />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="flex-container">
                    <div className="flex-child">
                      {/* <a href="https://soundcloud.com/user-616895977/episode-5-aran-khanna"> */}
                      <img src={pod3} />
                      {/* </a> */}
                    </div>
                    <div className="flex-child">
                      {/* <a href="https://soundcloud.com/user-616895977/my-le-goel"> */}
                      <img src={pod4} />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pad-text sec-width">
          {/* Buzz @Aditya */}
          <h5>Buzz</h5>
          <div className="container d-flex flex-column justify-content-center align-items-center buzz-padding">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="d-flex flex-column justify-content-around align-items-center buzz-card">
                <img className="hshot" src={buzz1} alt="people" />
                <div>
                  <p className="buzz-text-top">
                    "Thank you everyone, I found it a great experience and
                    exchange"
                    <span className="date"> - May 27, 2021</span>
                  </p>
                  <p className="buzz-text-bottom">
                    <strong>Holger Arians</strong> (HBS PLD ' 16), CEO, Banxa
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-around align-items-center buzz-card">
                <img className="hshot" src={buzz2} alt="people" />
                <div>
                  <p className="buzz-text-top" style={{ marginBottom: "0em" }}>
                    "Excellent, thank you! You've been putting together some
                    excellent events!"
                  </p>
                  <p
                    className="date"
                    style={{
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#856359 !important",
                    }}
                  >
                    {" "}
                    - Sep 20, 2020
                  </p>
                  <p className="buzz-text-bottom">
                    <strong>Dr. Sarah Kreps</strong> (HU), Professor, Department
                    of Government, Cornell University.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-around align-items-center buzz-card">
                <img className="hshot" src={buzz3} alt="people" />
                <div>
                  <p className="buzz-text-top">
                    "Thank you so much for having us! It was such a pleasure to
                    participate with you all."
                    <span className="date"> - Aug 28, 2020 </span>
                  </p>
                  <p className="buzz-text-bottom">
                    <strong>Dipayan Ghosh</strong>, Co-director, Digital
                    Platforms &amp; Democracy Project, Harvard Kennedy School.
                  </p>
                </div>
              </div>
            </div>
            <a href="/buzz" target="_blank">
              <div className="button">More</div>
            </a>
          </div>
        </div>{" "}
        {/* End of main Container */}
      </div>
    </>
  );
};

export default FrontPage;
