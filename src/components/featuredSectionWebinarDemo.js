import React from 'react'
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/webinar/ai-on-battlefield-flyer.png"
import { graphql, useStaticQuery } from 'gatsby';


export default function FeaturedSectionWebinarDemo({data}) {

    const webinarFeaturedList = [];
    
   
  return (
<>
    <section className="page-section clearfix">
          <div className="container">
            <div className="intro">
              <img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src={img}
                alt="..."
              />
              <div className="intro-text left-0 bg-faded p-4 rounded">
                <h6 className="text-muted">{webinarFeaturedList[0].date }{webinarFeaturedList[0].time}</h6>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    <h4> { webinarFeaturedList[0].title}</h4>
                  </span>
                </h2>
                <p className="mb-3">
                  {webinarFeaturedList[0].description}
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
    </>  
  )
}
