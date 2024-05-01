import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    if (!input || /[+\-*/]$/.test(input)) {
      setResult("Error: Incomplete expression");
    } else {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="input-field" />
      <div className="result">{result}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClear} className="clear-button">
            C
          </button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handleCalculate} className="equals-button">
            =
          </button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
