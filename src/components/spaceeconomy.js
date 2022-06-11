import React from "react";
import "../css/detailed-article.css";
import headimg from "../images/blog/article-thumbnails/space-economy-blog-image.png";

const SpaceContent = () => {
  return (
    <>
      <div>
        {/* Header */}
        <div className="container">
          {/* Buttons */}
          <div className="row container">
            <a
              style={{ textDecoration: "none" }}
              className="back-button"
              href="/blogs"
            >
              {" "}
              &lt; &nbsp; Back
            </a>
          </div>
          {/* Cover photo */}
          <div className="py-5">
            <img className="img-fluid" src={headimg} alt="" />
            <h6 className="cover-caption">
              SpaceX Falcon 9 Rocket. Credit:
              <a
                style={{ textDecoration: "none" }}
                href="https://unsplash.com/photos/pnPS3Ox_2vE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </h6>
          </div>
        </div>
        {/* Article */}
        <section className="article container pb-5">
          <h3>The commercialization of the Space Economy</h3>
          {/* Author name + date */}
          <div className="pb-4">
            <span className="pb-3 mr-3">
              {" "}
              <a style={{ textDecoration: "none" }} href="/blogs">
                Maxim Goryunov
              </a>{" "}
            </span>
            <span>Dec 11, 2021</span>
          </div>
          {/* Article text */}
          <p>
            Since the first human breakthrough in space exploration, public and
            national interest has never ceased to grow. Although modern society
            perceives that space is relatively distant from human life, it is
            more important than many people think. Legislative changes,
            technological breakthroughs, social movements, and shifts in the
            cognitive element of thinking provide insight into the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://knowledge.wharton.upenn.edu/article/how-entrepreneurs-cracked-the-aerospace-industry/"
              target="_blank"
            >
              watershed moment for the space industry
            </a>
            .{" "}
          </p>
          <p>
            In the beginning, the main actors in outer space were exclusively
            national states. Today, space is no longer just for them. During the
            outgoing 2010’s, the main space trend was the expanding role of
            private companies and private initiatives. In response to this trend
            the US House of Representatives passed the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.congress.gov/bill/116th-congress/house-bill/3610"
              target="_blank"
            >
              American Space Commerce Free Enterprise Act
            </a>{" "}
            , aimed at reforming the structure of the Earth remote sensing
            system and simplifying the procedure for preliminary approval and
            endorsement of private space projects by governments.
          </p>
          <p>
            Revenue from the space economy has been estimated around{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.statista.com/statistics/662231/space-economy-breakdown-globally-by-sector/"
              target="_blank"
            >
              446.9 billion US dollars in 2020
            </a>
            . The financial services firm{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.morganstanley.com/ideas/investing-in-space"
              target="_blank"
            >
              Morgan Stanley expects
            </a>{" "}
            this figure to reach 1.1 trillion US dollars or more in 2040. The
            growth of this economy has fostered new innovations; space travel
            not only enabled us to see space beyond the Earth's atmosphere, but
            it also gave rise to new technologies that we consume on a daily
            basis. Smartphone GPS and temporal data are actively implemented to
            coordinate work on the Internet. Without these technologies, a range
            of web and cloud services risk being compromised. Another inspiring
            example is the interactive web application of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://homeandcity.nasa.gov/nasa/city"
              target="_blank"
            >
              NASA's Home and City project
            </a>
            , which shows how space-based products and services enhance the
            quality of human life. It is challenging to predict the future, but
            it is reasonable to expect that the growing space economy would open
            up opportunities for technological and organizational change,
            including the operation of entire industries. For instance,{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://sia.org/satellites-services/remote-sensing-imaging/"
              target="_blank"
            >
              the impact of remote sensing technology
            </a>{" "}
            on monitoring capability in the mining sector or agriculture. Going
            beyond this, space tourism and resource exploration, such as mining
            on planets, moons and asteroids, are already becoming a subject of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.nasa.gov/topics/technology/index.html"
              target="_blank"
            >
              public debate
            </a>
            . Certainly their viability depends on a number of factors,
            including costs, future regulation, international issues and
            assumptions about technological, biological and economic
            development.
          </p>
          <p>
            One significant space heritage for the populations of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.unoosa.org/oosa/sk/ourwork/space-agencies.html"
              target="_blank"
            >
              many countries
            </a>{" "}
            is national security. The number of nations involved in research and
            application space programs is{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.oecd.org/innovation/inno/space-forum/"
              target="_blank"
            >
              growing by the day
            </a>{" "}
            . Additional companies in space means increasing complexity and a
            greater likelihood of clashes or disagreements over orbital
            assignments. Special attention should be paid not only to studying
            the mechanisms for financing space projects, but also to ways of
            improving international space law in line with the new realities
            that have emerged. The World Economic Forum in partnership with the
            Massachusetts Institute of Technology developed the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.weforum.org/projects/space-sustainability-rating"
              target="_blank"
            >
              Space Sustainability Rating
            </a>{" "}
            system. According to it, commercial space enterprises will be given
            the opportunity to voluntarily take an assessment of their mission
            to determine whether individual satellites or satellite networks
            meet the guidelines for long-term space sustainability. The
            introduction of the Space Sustainability Rating system leads to more
            transparency in space actors' approaches towards space debris
            mitigation. At the same time, the system does not disclose any
            confidential or proprietary information about their mission.
          </p>
          <p>
            Space is responsible for the efficient operation of the global
            economy's critical information communications. This is where the
            fortunes of breakthrough science-based production, resource
            extraction and energy technologies are decided. The
            commercialization of space activities should be maintained at a
            market level. This requires a reassessment of its performance
            criteria at government and industry level. Furthermore, space
            commercialization requires investing substantial financial resources
            over long periods of time, which implies finding effective
            mechanisms for combining the interests of the state and business.
            Such a partnership approach will help to achieve tangible social and
            economic benefits from the space industry.
          </p>
        </section>
      </div>
    </>
  );
};
export default SpaceContent;
