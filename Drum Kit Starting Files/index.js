

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //first, assigning a vaariable that tells us how
//many buttons with a class of drum there are total

for (var i = 0; i < numberOfDrumButtons; i++) { //then we loop through the buttons, with the loop ending at the last
//number of buttons

//we add an event listener to each button; [i] selects each button individually as the loop increases.
document.querySelectorAll(".drum")[i].addEventListener("click", function() { //Anonymous function

console.log(this); //gets the identity of the button that was clicked
  this.style.color = "white"

  });

}




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();







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
