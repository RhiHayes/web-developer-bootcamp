// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// //Using Map
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log("Using map: " + newNumbers);

// //Using plain JS
// var newNumbersArray = [];

// numbers.forEach(function (x) {
//   newNumbersArray.push(x * 2);
// });

// console.log("Plain JS: " + newNumbersArray);

// //Filter - Create a new array by keeping the items that return true.

// //Using Filter
// const greaterThanTenNums = numbers.filter(function (x) {
//   return x > 10;
// });

// console.log("Numbers greater than 10: " + greaterThanTenNums);

// //Using plain JS
// var newNumbersArray2 = [];

// numbers.forEach(function (x) {
//   if (x < 10) {
//     newNumbersArray2.push(x);
//   }
// });

// console.log("Plain JS: " + newNumbersArray2);

// //Reduce - Accumulate a value by doing something to each item in an array.

// //Using Reduce
// numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

// //Using plain JS
// var newNumber = 0;

// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

// console.log("Plain JS: " + newNumber);

// //Find - find the first item that matches from an array.

// const firstNum = numbers.find(function (x) {
//   return x > 10;
// });

// console.log(firstNum);

// //FindIndex - find the index of the first item that matches.

// const firstNumIndex = numbers.findIndex(function (x) {
//   return x > 10;
// });

// console.log(firstNumIndex);

//Challenge

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
