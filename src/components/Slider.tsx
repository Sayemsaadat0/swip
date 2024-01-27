"use client";
import React, { FC, useState } from "react";
import SliderCard1, { SliderCard1Type } from "./SliderCard1";

interface CarouselProps {
  data: SliderCard1Type[];
  activeSlide: number;
}

const Carousel: FC<CarouselProps> = (props) => {
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
        transform: "translateX(-240px) translateZ(-200px)",
        transition: "transform 1s ease",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-200px) ",
        transition: "transform 1s ease",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) ",
        transition: "transform 1s ease",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,

        transform: "translateX(480px) translateZ(-500px) ",
        transition: "transform 1s ease",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,

        transform: "translateX(-480px) translateZ(-500px) ",
        transition: "transform 1s ease",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,

        transform: "translateX(480px) translateZ(-500px) ",
        transition: "transform 1s ease",
        zIndex: 7,
      };

    return {};
  };

  return (
    <>
      <div className="slideC cursor-pointer ">
        {props.data.map((item, i) => (
          <React.Fragment key={item.image}>
            <div
              className="slide "
              style={{
                ...getStyles(i),
              }}
              onClick={() => handleClick(i)}
            >
              <SliderCard1 {...item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Carousel;
