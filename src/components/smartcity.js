import React from "react";
import "../css/detailed-article.css";
import headimg from "../images/blog/article-thumbnails/smartcity-blog-image.png";

const SmartContent = () => {
  return (
    <>
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
            Screenshot of Barcelona’s
            <a
              style={{ textDecoration: "none" }}
              href="https://opendata-ajuntament.barcelona.cat/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              open data service
            </a>
            landing page. Barcelona is one of the most well-known “smart
            cities”.
          </h6>
        </div>
      </div>
      {/* Article */}
      <section className="article container pb-5">
        <h3>Is the smart city the city of the future?</h3>
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
          Taking a human community perspective, one of the trends shaping its
          future is the growing importance of cities and their impact on social
          and economic processes. More than 55 percent of the world's population
          lives in cities, and{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.un.org/development/desa/en/news/population/2018-revision-of-world-urbanization-prospects.html"
            target="_blank"
          >
            by 2050 this proportion is expected to rise to 68 percent
          </a>{" "}
          . The vast majority of scientific, educational, industrial, and other
          institutions are concentrated in cities, where most socio-economic
          innovations are born. At the same time, the rapid development of
          cities brings about such problems as increased use of infrastructure,
          outdated planning solutions, traffic congestion, pollution,
          overcrowding, obsolete governance institutions, and loss of identity
          by city dwellers. Further urbanization is inevitable, although the
          specific forms are likely to vary. Against this background there is a
          significant increase in interest in urban issues.
        </p>
        <p>
          The smart city model, which reflects visions of the future cities and
          how to solve their problems, is one of today’s most common concepts.
          At the abstract level, the smart city is presented as an innovative
          way to achieve a high quality of life for the urban community. In one
          projection,{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/smart%20cities%20digital%20solutions%20for%20a%20more%20livable%20future/mgi-smart-cities-full-report.pdf"
            target="_blank"
          >
            smart cities can improve this indicator by 10-30 percent
          </a>
          . Thus smart cities offer residents reductions in mortality, disease
          burden, greenhouse gas emissions and travel time. As a{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.imd.org/globalassets/wcc/docs/smart_city/smart_city_index_methodology_2020.pdf"
            target="_blank"
          >
            systematic story
          </a>
          , integration within a single urban space is about health and safety,
          mobility, activities, opportunities, and governance.
        </p>
        <p>
          In practice, the term smart cities is very general. Experts use it to
          refer to a variety of processes, although it implies two necessary
          aspects:
        </p>
        <ol>
          <li>
            the presence of multiple sensors to receive and process information,
            advanced data collection systems and specialized software for
            analytics;
          </li>
          <li>
            the presence of 'smart' residents who are interested in the
            application of smart and green solutions and are able to use them.
          </li>
        </ol>
        <p>
          In this way, we can already see examples. Orders are placed online.
          Cars are conveniently distributed around the city, and the customer
          pays for their time of use. Many city governments have introduced
          bike-sharing programs. This transport system is{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://bikesharingworldmap.com/#/all/2.2/0/45.22/"
            target="_blank"
          >
            equally popular
          </a>{" "}
          among city residents and tourists. Albeit on a small scale, the
          cooperation of people makes life in the city more comfortable. When
          people believe that sharing information, services, and goods is
          beneficial- and enjoyable- for all concerned, they will{" "}
          <a
            style={{ textDecoration: "none" }}
            href="http://innovativemobility.org/wp-content/uploads/2015/01/Worldwide_Bikesharing.pdf"
            target="_blank"
          >
            participate
          </a>{" "}
        </p>
        <p>
          However, when talking about smart cities, there are several nuances to
          keep in mind. One, of course, is privacy. We have no idea how much
          data is being created and stored about us all the time. Google knows
          about our online search habits, personal information and so on.
          Cameras all over the city track the movements of people and cars,
          monitor security threats, incidents and other anomalies. Participation
          or non-participation in more personal aspects of smart cities and the
          collection of information about a person should be a private matter
          for everyone. There should also be secure ways of encrypting and then
          destroying information about an individual to guarantee the right to
          privacy.
        </p>
        <p>
          Secondly, investments in smart cities and the costs of their modes of
          operation and technology are high initially, but over time they turn
          into long-term savings. Therefore, there should be a consensus between
          politicians and their electorate as to where the city's development is
          heading, what its priorities are, and what it needs to invest in. This
          coordination will also help avoid unnecessary projects and even entire
          ghost towns. Moreover, it is worth mentioning the possible transition
          from a smart city to human smart city (HSC) concept with a practice of
          public-private-public partnerships. The essence of this formation
          process lies in the fact that HSC is an open, innovative ecosystem
          aimed at the formation of social inclusion, growth of well-being, and
          environmental sustainability. Stakeholders -- municipal government,
          urban planners, universities, technology companies and financial
          institutions -- organize themselves into a dynamic, decentralized
          innovation ecosystem. By understanding what motivates a city’s
          residents' behavior, it is possible to get a more accurate and
          complete picture of how the city functions and develops.
        </p>
        <p>
          We should also not forget that the smart city concept is designed for
          a person with a modern gadget and all the installed applications, i.e.
          for a fairly wealthy part of society. Certain groups of people are
          simply not taken into account by this concept and this leads to a{" "}
          <a
            style={{ textDecoration: "none" }}
            href="http://www.cityofsound.com/blog/2013/02/on-the-smart-city-a-call-for-smart-citizens-instead.html"
            target="_blank"
          >
            new digital inequality
          </a>
          . That is why the focus should be on small or fairly inexpensive
          changes that can improve the quality of city residents' lives -
          especially those who are the most economically vulnerable.
        </p>

        <p>
          Given the consequences of the pandemic, there is a need to raise the
          question of forming new economic institutions in order to{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://wip.mitpress.mit.edu/pub/aps1hrbe/release/7"
            target="_blank"
          >
            build a new economy
          </a>
          . Furthermore, in a global world, with the advent of the internet and
          high technology, the boundaries of ideas and possibilities are being
          blurred. Information and knowledge are becoming more accessible. But
          do we want to live in such a world, or will we create barriers?
        </p>

        <p>
          Local and regional authorities are now a key driver of initiatives to
          make cities greener, more resource-efficient, and adapt quickly to
          change. Infrastructure is expensive and requires investment and
          maintenance over the long term. Building a system -- how a city
          prioritizes and communicates the needs and requirements of citizens --
          is not a short-term endeavor. This means that leaders need to focus on
          the long term, not on momentary ideas to get votes. Investing in a
          smart city is an investment in infrastructure, technology, monitoring
          and coordination systems. It is a way of expressing attitudes towards
          sustainable development and defining the role of government.
        </p>
      </section>
    </>
  );
};
export default SmartContent;
