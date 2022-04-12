import React from "react";
import ReactDOM from "react-dom";

import pi, { doublePi, triplePi } from "./math.js";
import * as PI from "./math.js";

console.log(PI);

ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>

    <ul>
      <li>{PI.default}</li>
      <li>{PI.doublePi()}</li>
      <li>{PI.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
