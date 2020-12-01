import React, {useState} from "react";
import "flexboxgrid";
import { AnimalCarousel } from "./components/AnimalCarousel/AnimalCarousel";
import "./App.css";
import { animals } from "./animalData";
import { Checkbox } from "./components/Checkbox/Checkbox";

function App() {

  const [activeAnimals, setActiveAnimals]=useState([...animals])
   
 
  const clickHandler = (value:any) => { 
      const newAnimals=[...activeAnimals];
      const currentAnimal=(activeAnimals).indexOf(value);
      console.log(newAnimals)
      console.log(currentAnimal)

      if (currentAnimal===-1) {
        newAnimals.push(value)
      }else{
        newAnimals.splice(currentAnimal,1)
      }
      setActiveAnimals(newAnimals)
  };

  return (
    <div className="container container-fluid">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1>Izvēlies dzīvnieku!</h1>
        </div>
      </div>
      <div className="row center-xs">
        {activeAnimals.map((item) => {
          return (
            <div key={item.id}>
              <Checkbox checkboxData={item} onChange={() => clickHandler(item.species)} />
            </div>
          );
        })}
      </div>
      <div className="row">
        <AnimalCarousel imageData={activeAnimals} />
      </div>
    </div>
  );
}

export default App;
