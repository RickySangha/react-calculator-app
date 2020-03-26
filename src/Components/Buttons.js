import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <button className="AC" value="AC" onClick={e => props.handleAC(e)}>
        AC
      </button>
      <button value="/" onClick={e => props.handleOperator(e)}>
        /
      </button>
      <button value="*" onClick={e => props.handleOperator(e)}>
        X
      </button>

      <button value="7" onClick={e => props.handleNumberClick(e)}>
        7
      </button>
      <button value="8" onClick={e => props.handleNumberClick(e)}>
        8
      </button>
      <button value="9" onClick={e => props.handleNumberClick(e)}>
        9
      </button>
      <button value="-" onClick={e => props.handleOperator(e)}>
        -
      </button>

      <button value="4" onClick={e => props.handleNumberClick(e)}>
        4
      </button>
      <button value="5" onClick={e => props.handleNumberClick(e)}>
        5
      </button>
      <button value="6" onClick={e => props.handleNumberClick(e)}>
        6
      </button>
      <button value="+" onClick={e => props.handleOperator(e)}>
        +
      </button>

      <button value="1" onClick={e => props.handleNumberClick(e)}>
        1
      </button>
      <button value="2" onClick={e => props.handleNumberClick(e)}>
        2
      </button>
      <button value="3" onClick={e => props.handleNumberClick(e)}>
        3
      </button>
      <button className="eq" value="=" onClick={e => props.handleEval(e)}>
        =
      </button>

      <button
        className="AC"
        value="0"
        onClick={e => props.handleNumberClick(e)}
      >
        0
      </button>
      <button value="." onClick={e => props.handleDecimal(e)}>
        .
      </button>
    </div>
  );
}

export default Buttons;
