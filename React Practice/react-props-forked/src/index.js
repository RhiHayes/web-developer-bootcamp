import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://images.immediate.co.uk/production/volatile/sites/3/2021/10/Kiefer_Sutherland_24_jack_bauer-28ac8d1.jpg?quality=90&resize=620,413"
      tel="+579 875 120"
      email="j@bauer.com"
    />
    <input id="fName" />
  </div>,
  document.getElementById("root")
);
