import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Old Way
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// })

//Arrow Way - good for one parameter (x)
// const newNumbers = numbers.map((x) => {
//   return x * x;
// })

////Map -Create a new array by doing something with each item in an array.
const multiplyBy2 = numbers.map((x) => {
  return x * 2;
});

console.log(multiplyBy2);

//////Filter - Create a new array by keeping the items that return true.
const numbersLessThan10 = numbers.filter((num) => {
  return num < 10;
});

console.log(numbersLessThan10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});

console.log(newNumber);

////Find - find the first item that matches from an array.
const newNumberGreaterThan10 = numbers.find((num) => {
  return num > 10;
});

console.log(newNumberGreaterThan10);

////FindIndex - find the index of the first item that matches.
const newNumberGreaterThan10Index = numbers.findIndex((num) => {
  return num > 10;
});

console.log(newNumberGreaterThan10Index);
