import React, { useState } from "react";

export const AnimalCarouselActiveImage = ({ imgSrc, name, discription, id }:any ) => {
  const [showName, setShowName] = useState(false);

  return (
    <div className="col-xs-6" style={{ height: 200 }}>
      {!showName ? (
        <img
          alt={name}
          key={id}
          src={imgSrc}
          height="200"
          onClick={() => setShowName(true)}
        ></img>
      ) : (
          <div key={id}>
            <h1 onClick={() => setShowName(false)}>{name}</h1>
            <p onClick={() => setShowName(false)}>{discription}</p>
          </div>
        )}
    </div>
  );
};
