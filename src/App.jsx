import React, { useState } from "react";
import "./App.css";
import ButtonSet from "./components/ButtonSet/ButtonSet";

const App = () => {
  let [calVal, setCalVal] = useState("");

  let handleButton = (btnValue) => {
    // console.log(btnValue);
    if (btnValue === "C") {
      setCalVal("");
    } else if (btnValue === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + btnValue);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="mainHeading">Calculator</h1>
        <input type="text" placeholder="start calculation" value={calVal} />
        <br />
        <ButtonSet onButton={handleButton}></ButtonSet>
      </div>
    </>
  );
};

export default App;
