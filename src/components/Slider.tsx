"use client";
import React, { useState } from "react";
import SLiderCard, { SlideData } from "./SLiderCard";

interface CarouselProps {
  data: SlideData[];
  activeSlide: number;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [activeSlide, setActiveSlide] = useState<number>(props.activeSlide);

  const handleClick = (index: number) => {
    setActiveSlide(index);
  };

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px)",
        transition: "transform 1s ease",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transition: "transform 1s ease",
        transform: "translateX(-240px) translateZ(-200px)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transition: "transform 1s ease",
        transform: "translateX(240px) translateZ(-200px)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transition: "transform 1s ease",
        transform: "translateX(-480px) translateZ(-500px) ",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transition: "transform 1s ease",
        transform: "translateX(480px) translateZ(-500px)",
        zIndex: 8,
      };
    return {};
  };

  return (
    <>
      <div className="slideC cursor-pointer ">
        {props.data.map((item, i) => (
          <React.Fragment key={item.image}>
            <div
              className="slide"
              style={{
                ...getStyles(i),
              }}
              onClick={() => handleClick(i)}
            >
              <SLiderCard {...item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Carousel;
