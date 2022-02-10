

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //first, assigning a vaariable that tells us how
//many buttons with a class of drum there are total

for (var i = 0; i < numberOfDrumButtons; i++) { //then we loop through the buttons, with the loop ending at the last
//number of buttons

//we add an event listener to each button; [i] selects each button individually as the loop increases.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //Anonymous function
      alert("I got clicked!");
  });

}
