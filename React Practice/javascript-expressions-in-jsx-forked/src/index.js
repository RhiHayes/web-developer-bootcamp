import React from "react";
import ReactDOM from "react-dom";

// const name = "Rhiannon";

const fName = "Rhiannon";
const lName = "Hayes";

const num = 15;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
