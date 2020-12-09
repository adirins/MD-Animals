import React, { useState } from "react";
import "flexboxgrid";
import "./App.css";
import { Button } from "./components/Button";
import { CheckedButton } from "./components/CkeckedButton";

const currency: string[] = ["eur", "pln", "gel", "dkk", "czk", "gpb", "sek", "usd", "rub"]

function App() {
  const [checkedCurrency, setCheckedCurrency] = useState<string[]>([])

  const clickHandler = (value: string) => {
    let newCheckedCurrency: string[] = [...checkedCurrency];
    newCheckedCurrency.indexOf(value) < 0 ?
      newCheckedCurrency = [...newCheckedCurrency, ...[value]]
      :
      newCheckedCurrency = newCheckedCurrency.filter(item => item !== value).map(item => item)
    setCheckedCurrency(newCheckedCurrency);
  }
  
  return (
    <div className="container container-fluid">
      <div className="row center-xs middle-xs row--full-height">
        <div className="col-xs-6 ">
          <div className="wrapper">
            <div className="checkbox--wrapper ">
              {checkedCurrency.length >= 0 &&
                checkedCurrency.map((item, i) => {
                  return (
                    <CheckedButton key={i} item={item} onClick={() => clickHandler(item)} />
                  )
                })
              }
            </div>
            <div className="checkbox--wrapper ">
              {currency.map((item, i) => {
                return (
                  <Button key={i} item={item} onClick={() => clickHandler(item)} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
