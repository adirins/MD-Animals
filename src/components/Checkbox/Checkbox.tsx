import React, { useState } from "react";

export const Checkbox = ({ id, species }:any) => {


  const [checkedData, setChecedkData] = useState(true);

  return (
    <div className="col-xs-4" key={id}>
      <input
        type="checkbox"
        id={id}
        checked={checkedData}
        onChange={() => setChecedkData(!checkedData)}
      ></input>      
        <label className="label" htmlFor={id}>
          zvērs: {species}
        </label>         
    </div>
  );
};
