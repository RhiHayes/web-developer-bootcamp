

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //first, assigning a vaariable that tells us how
//many buttons with a class of drum there are total

for (var i = 0; i < numberOfDrumButtons; i++) { //then we loop through the buttons, with the loop ending at the last
//number of buttons

//we add an event listener to each button; [i] selects each button individually as the loop increases.
document.querySelectorAll(".drum")[i].addEventListener("click", function() { //Anonymous function

// console.log(this); //gets the identity of the button that was clicked
  // this.style.color = "white"

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML); //makes sound for button press

buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key); //makes sound for key press

  buttonAnimation(event.key);
});




function makeSound(key) { //function that takes in key, then plays sound based on key

  switch (key) {

    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    default: console.log(key);

}

}

function buttonAnimation(currentKey) {

 var activeButton = document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function() {
   activeButton.classList.remove("pressed");
 }, 100);

}
