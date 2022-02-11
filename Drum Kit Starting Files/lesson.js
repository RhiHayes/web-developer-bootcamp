
//NOTES FROM LESSON 163-164

//Passing functions as arguments

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) { //operator is the function being passed in
  return operator(num1, num2);
}

console.log(calculator(3, 3, add)) //Returns 6
console.log(calculator(3, 3, subtract)) //Returns 0
console.log(calculator(3, 3, multiply)) //Returns 9
console.log(calculator(3, 3, divide)) //Returns 1


//NOTES FROM LESSON 166

// var houseKeeper1 = {
//   name: "Jane",
//   yearsOfExpirence: 12,
//   cleaningRoute: ["bathroom", "lobby", "bedroom"]
// }
//
// console.log(houseKeeper1.name);

//Constructor function

function HouseKeeper (yearsOfExpirence, name, cleaningRoute) {
  this.name = yearsOfExpirence;
  this.name = name;
  this.cleaningRoute = cleaningRoute;
  this.clean = function () {
    alert("Cleaning in progress...")
  }
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);

console.log(houseKeeper1.name);
// houseKeeper1.clean(); using constructor function on housekeeper variable
