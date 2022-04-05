import React, { useState } from "react";

import TextInput from "./Component/Textinput";
import Button from "./Component/Button";
import './Styles/Styles.css'
import img from './signupq.jfif'

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };

  return (
    <div className="App">
      {/* <img src={img}></img> */}
    <div className="container">
      <div
        style={{
          display: "block",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2> BMI Calculator!</h2>
      </div>
      <div className="row">
        <TextInput
          label="Height:"
          placeholder="Enter height in cm"
          handleChange={handleHeightChange}
          value={height}
        />
      </div>
      <div className="row">
        <TextInput
          label="Weight:"
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
          
        />
        
      </div>
      <div className="row">
        <Button label="CALCULATE" onClick={computeBmi} />
      </div>
      <div className="row">
        {
          isNaN(bmi)?null:<h3>Your BMI = {bmi}</h3> 
        }
        
      </div>
      <div className="row">
        <h3>You are {bmiClass}</h3>
      </div>
    </div>
    </div>
  );
};

export default App;
