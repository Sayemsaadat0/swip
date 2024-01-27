import Image from "next/legacy/image";
import React, { FC } from "react";

export type SliderCard1Type = {
  image: string;
};

const SliderCard1: FC<SliderCard1Type> = ({ image }) => {
  return (
    <div className="sliderContent">
      <Image
        className="rounded-[15px] object-cover "
        src={
          image ||
          '"https://i.pinimg.com/564x/c5/29/cb/c529cbc911a38eddbd64b159e870cc05.jpg"'
        }
        alt="hello"
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default SliderCard1;
