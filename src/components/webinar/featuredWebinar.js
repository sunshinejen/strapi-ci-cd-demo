import React, { useState } from "react";
import "../../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";

export default function FeaturedWebinar({ webinar }) {

  const [webinarFeatured] = useState(webinar);
  //const url = flyer_img.url;

  return (
    <div className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={webinarFeatured.flyer_img.url}
            alt="..."
          />
          <div className="intro-text left-0 bg-faded p-4 rounded">
            <h6 className="text-muted">{webinarFeatured.date}</h6>
            <h6 className="timeSubtitle">{webinarFeatured.time}</h6>
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">
                <h4> {webinarFeatured.webinar_title}</h4>
              </span>
            </h2>
            <ReactMarkdown className="mb-3">{webinarFeatured.webinar_description}</ReactMarkdown>
            <a
              style={{ textDecoration: "none" }}
              type="button"
              target="_blank"
              className="button"
              href={webinarFeatured.registration}
              data-testid = 'registration-link'
            >
              Webinar Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
