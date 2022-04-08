import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="image"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
      />
      <img
        className="image"
        src="https://m.media-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
      />
      <img
        className="image"
        src="https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
