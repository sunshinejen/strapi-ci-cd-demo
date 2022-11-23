import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../css/main.css";

export default function CarouselHeader({ slides }) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel style={{ display: "block" }} activeIndex={index} onSelect={handleSelect}>
        {
          Object.values(slides).map((element) => (
            Object.values(element).map((slide, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={slide.url} alt={slide.alt} />
              </Carousel.Item>
            ))
          ))
        }
      </Carousel>
    </>
  )
}


