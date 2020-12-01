import React, { useState } from "react";
import { AnimalCarouselActiveImage } from "./AnimalCarouselActiveImage"

export const AnimalCarousel = ({ imageData }:any) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="container">
      <div className="row center-xs">
        <AnimalCarouselActiveImage
          imgSrc={imageData[activeIndex].imgSrc}
          name={imageData[activeIndex].name}
          discription={imageData[activeIndex].discription}
        />
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 margin--top--25">
          {imageData.map(({ id, imgSrc, name }:any, i: number) => {
            return (
              <img
                className="image"
                key={id}
                src={imgSrc}
                height="100"
                alt={name}
                onClick={() => setActiveIndex(i)}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};
