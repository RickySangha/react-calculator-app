import React from "react";

function Display(props) {
  return (
    <div className="display">
      <div className="formulaScreen">{props.formula}</div>
      <div className="inputScreen">{props.input}</div>
    </div>
  );
}
export default Display;
