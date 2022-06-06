import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useWebinarListingQuery } from "../hooks/useWebinarListingQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import WebinarCardDemo from "./webinarCardDemo";



export default function Webinars({webinars}) {
  //console.log(webinarData);
  // const web = webinarData;
  
  const webinarList = [];
  const [showMore, setShowMore] = useState(false);

  const getWebinars = () => { 
    webinars.forEach(webinarEdge => {
      webinarList.push({
        webinarId: webinarEdge.node.id,
        title: webinarEdge.node.webinar_title,
        date: webinarEdge.node.date,
        description: webinarEdge.node.webinar_description,
        videoUrl: webinarEdge.node.webinar_url,
        registration: webinarEdge.node.registration_url,
        summary: webinarEdge.node.summary,
        time: webinarEdge.node.time,
      });
      
    })
    return webinarList;
  }
  
    getWebinars();


  
  
  var firstThree = webinarList.slice(0, 3);
  /* this shows only the first three webinars */
  

return (
  <section className="latestWebinars">
    <div className="container py-5">
      <div className="webinar-grid">
      
        <div className="wrapper-grid">
          {showMore ? <WebinarCardDemo webinarList={webinarList} /> : <WebinarCardDemo webinarList={firstThree}/>} 
        </div>
        <div className="row pb-3 see-more-button-row">
            <button
              className="btn morebtn"
              id="see-more-button"
            onClick={() => setShowMore(!showMore)}
            
          >
            {console.log(webinarList)}
              {showMore ? "Show less" : "Show More"} <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
      </div>
    </div>
  </section>
);
}
