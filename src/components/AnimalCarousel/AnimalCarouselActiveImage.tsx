import React, { useState } from "react";

export const AnimalCarouselActiveImage = ({ imgSrc, name, discription, id }: any) => {

  const [showName, setShowName] = useState(false);

  return (
    <div className="col-xs-4" style={{ height: 200 }} onClick={() => setShowName(!showName)}>
      {!showName ? (
        <div className="atctiveImage__wrapper"> 
        <img
          className="activeImage"
          alt={name}
          key={id}
          src={imgSrc}
          onClick={() => setShowName(!showName)}
        ></img>
        </div>
      ) : (
          <div key={id} className="activeText">
            <h1 onClick={() => setShowName(!showName)}>{name}</h1>
            <p onClick={() => setShowName(!showName)}>{discription}</p>
          </div>
        )}
    </div>
  );
};
