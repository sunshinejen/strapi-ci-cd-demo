import React, { useState } from "react";
import "../../css/webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import WebinarCard from "./webinarCard";


export default function LatestWebinars({ webinars }) {

  const [webinarList] = useState(webinars);
  const [items, setItems] = useState(3);
  const firstThree = webinarList.slice(0, items);
  const [showMore, setShowMore] = useState(firstThree);
  const [displayButton, setdisplayButton] = useState(false);

  
  /* displays first three, then three more at a time */
  const handleOnClick = () => {
    if (items + 3 <= webinarList.length) {
      setItems(items+ 3);
      const list = webinarList.slice(0, items + 3);
      setShowMore(list);
      setdisplayButton(displayButton);
    }
    else {
      setShowMore(webinarList);
      setdisplayButton(!displayButton);
    }

    if (displayButton) {
      setItems(3);
      const list = webinarList.slice(0, 3);
      setShowMore(list);
    }
  }

  return (
    <section className="latestWebinars">
      <div className="container py-5">
        <div className="web-card-section">
          <div className="web-card-container">
            {showMore.map((webinar) => (
              <WebinarCard webinar={webinar} key={webinar.id}/>
            ))}
          </div>
        </div>
      </div>
      <div className="row pb-3 see-more-button-row">
        <button
          className="btn morebtn"
          id="see-more-button"
          onClick={handleOnClick}
        >
          {displayButton ? "Show less" : "Show More"} <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </section>
  );
}
