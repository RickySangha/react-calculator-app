import React, { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

function App() {
  const [input, setInput] = useState("0");
  const [formula, setFormula] = useState("");
  const [isEval, setIsEval] = useState(false);
  const [ans, setAns] = useState("");

  let maxInput;

  function maxDigit() {
    setInput("Max Digits Limit Met");
    setTimeout(() => {
      setInput(maxInput);
    }, 1000);
  }

  function handleNumberClick(e) {
    e.persist();

    if (!input.includes("Met")) {
      if (input.length > 20) {
        maxInput = input;
        maxDigit();
        return;
      }

      if (!isEval) {
        if (input === "0" || /[-*/+]/.test(input)) setInput(e.target.value);
        else setInput(prevInput => prevInput + e.target.value);

        if (formula === "" || formula === "0" || /^[*/+]/.test(formula)) {
          setFormula(e.target.value);
        } else {
          setFormula(prevFormula => prevFormula + e.target.value);
        }
      } else {
        setInput(e.target.value);
        setFormula(e.target.value);
        setIsEval(false);
      }
    }
  }

  function handleOperator(e) {
    e.persist();
    if (!isEval && !/[-*/+]$/.test(formula)) {
      setInput(e.target.value);
      setFormula(prevFormula => prevFormula + e.target.value);
    } else if (isEval) {
      setInput(e.target.value);
      setFormula(ans + e.target.value);
      setIsEval(false);
    } else {
      setFormula(prevFormula => prevFormula.replace(/.$/, e.target.value));
      setInput(e.target.value);
    }
  }

  function handleDecimal(e) {
    e.persist();
    if (/^[+*/]/.test(formula)) {
      setFormula("0.");
      setInput("0.");
    } else if (formula === "") {
      setInput("0.");
      setFormula("0.");
    } else if (/[-+*/]$/.test(formula)) {
      setInput("0.");
      setFormula(prevFormula => prevFormula + "0.");
    } else if (!/[.]/.test(formula)) {
      setInput(prevFormula => prevFormula + e.target.value);
      setFormula(prevFormula => prevFormula + e.target.value);
    }
  }

  function handleAC() {
    setInput("0");
    setFormula("");
    setIsEval(false);
  }

  function handleEval() {
    let finalVal;
    if (!isEval) {
      if (/\d$/.test(formula)) {
        finalVal = eval(formula).toString();
      } else if (/[-*/+]$/.test(formula)) {
        finalVal = eval(formula.slice(0, -1)).toString();
      }
      setIsEval(true);
      setFormula(prevFormula => prevFormula + "=" + finalVal);
      setInput(finalVal);
      setAns(finalVal);
    }
  }

  return (
    <div className="calculator">
      <Display input={input} formula={formula} />
      <Buttons
        className="App"
        handleNumberClick={handleNumberClick}
        handleOperator={handleOperator}
        handleAC={handleAC}
        handleDecimal={handleDecimal}
        handleEval={handleEval}
      />
    </div>
  );
}

export default App;
