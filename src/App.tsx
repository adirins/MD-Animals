import React, { useState } from "react";
import "flexboxgrid";
import { AnimalCarousel } from "./components/AnimalCarousel/AnimalCarousel";
import "./App.css";
import { animals } from "./animalData";
import { Checkbox } from "./components/Checkbox/Checkbox";

function App() {

  const [allAnimals] = useState([...animals])
  const [filteredAnimals, setfilteredAnimals] = useState([...allAnimals])





  const clickHandler = (value: any) => {
    const newFilteredAnimals = [...filteredAnimals];
    const newAllAnimals = [...allAnimals];
    
    let currentSpecies = newFilteredAnimals.map(item => item.species)
    
    if (currentSpecies.indexOf(value) < 0) {
      currentSpecies = [...currentSpecies,...[value]]
    }else{
      currentSpecies = currentSpecies.filter(item => item !== value).map(item => item)
    }   

    let onlyCheckedAnimals = newAllAnimals.filter(item => (currentSpecies).includes(item.species));

    setfilteredAnimals(onlyCheckedAnimals)
  };

  return (
    <div className="container container-fluid">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1>Izvēlies dzīvnieku!</h1>
        </div>
      </div>
      <div className="row center-xs">
        {allAnimals.map((item, i) => {
          return (
            <div key={i}>
              <Checkbox
                species={item.species}
                onFilterClick={() => clickHandler(item.species)}
              />
            </div>
          );
        })}

      </div>
      <div className="row center-xs margin--top--25">
        {filteredAnimals.length === 0 ? (
          <div>
            <b>Nav izvēlēts neviens dzīvnieks!</b>
          </div>
        ) : (
            <AnimalCarousel imageData={filteredAnimals} />
          )}
      </div>
    </div>
  );
}

export default App;
