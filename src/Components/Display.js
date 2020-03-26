import React from "react";
import "/Users/rickysangha/Desktop/calculator/src/App.css";

function Display(props) {
  return (
    <div className="display">
      <div className="formulaScreen">{props.formula}</div>
      <div className="inputScreen">{props.input}</div>
    </div>
  );
}
export default Display;
