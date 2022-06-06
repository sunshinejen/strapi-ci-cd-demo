import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carou1 from "../images/landingpage carousels/1.png";
import carou2 from "../images/landingpage carousels/2.png";
import carou3 from "../images/landingpage carousels/3.png";
import carou4 from "../images/landingpage carousels/4.png";
import carou5 from "../images/landingpage carousels/5.png";
import { useState } from "react";

const CarouselHead = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel style={{display: "block"}} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={carou1} alt="First" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carou2} alt="Second" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carou3} alt="Third" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carou4} alt="Fourth" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carou5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default CarouselHead;
