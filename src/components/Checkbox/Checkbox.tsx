import React, { useState } from "react";

type Props = {
  species: string;
  onFilterClick: () => void;
};

export const Checkbox = ({ species, onFilterClick }: Props) => {

const [checkedData, setChecedkData] = useState(true);

  return (
    <div>
      <label >
        <input
          type="checkbox"
          checked={checkedData}
          onChange={() => {
            setChecedkData(!checkedData);
            onFilterClick();
          }}
        />
        {species}
      </label>
    </div>
  );
};
