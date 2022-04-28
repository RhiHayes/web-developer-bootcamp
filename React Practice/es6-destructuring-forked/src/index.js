import animals, { useAnimals } from "./data";

// console.log(animals);

// //Destructuring Arrays

// const [cat, dog] = animals;
// console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound } = cat;

// // const {name: catName, sound: catSound } = cat

// // console.log(sound);

// // console.log(catSound); //same output as top

// // const { name = "Fluffy", sound = "Purr" } = cat;
// //-------------------------------------------------
// //The code above ONLY works if the name and sound property is
// //absent in the original data.

// const { name, sound, feedingRequirements: { food, water } } = cat;

// // console.log(food);

//EX: if you delete the sound property in data.js, "Purr" will take its place.

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
//Don't use = sign like this: topSpeed = teslaTopSpeed. It doesn't work.

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
//hondaTopColour + teslaTopColour grabs the first item of the array by DEFAULT.

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
