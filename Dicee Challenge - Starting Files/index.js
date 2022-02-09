var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Player 1's role

if(randomNumber1 == 1) { //first check if number is one
  document.querySelector(".img1").setAttribute("src", "images/dice1.png"); //replace image with corresponding dice
  console.log("1: The number is one!"); //double checking here
} else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png"); //replace image with corresponding dice
  console.log("1: The number is two!"); //double checking here
} else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png"); //replace image with corresponding dice
  console.log("1: The number is three!"); //double checking here
} else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png"); //replace image with corresponding dice
  console.log("1: The number is four!"); //double checking here
} else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png"); //replace image with corresponding dice
  console.log("1: The number is five!"); //double checking here
} else if (randomNumber1 == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png"); //replace image with corresponding dice
  console.log("1: The number is six!"); //double checking here
} else {
  console.log("ERROR!")
}

//Player 2's role

if(randomNumber2 == 1) { //first check if number is one
  document.querySelector(".img2").setAttribute("src", "images/dice1.png"); //replace image with corresponding dice
  console.log("2: The number is one!"); //double checking here
} else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png"); //replace image with corresponding dice
  console.log("2: The number is two!"); //double checking here
} else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png"); //replace image with corresponding dice
  console.log("2: The number is three!"); //double checking here
} else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png"); //replace image with corresponding dice
  console.log("2: The number is four!"); //double checking here
} else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png"); //replace image with corresponding dice
  console.log("2: The number is five!"); //double checking here
} else if (randomNumber2 == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png"); //replace image with corresponding dice
  console.log("2: The number is six!"); //double checking here
} else {
  console.log("ERROR!")
}

//Who wins?

if (randomNumber1 > randomNumber2) {
  console.log("Player one wins!");
  document.querySelector("h1").textContent = "🚩 Player One wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player Two wins! 🚩";
  console.log("Player two wins!")
} else {
  document.querySelector("h1").textContent = "Draw!";
  console.log("Draw!")
}


// Notes for me:
//
// - If you use code more than three times in js, store it into a variable. I could've
// done this for random dice image and random image source and stored them in seperate variables
// instead of using querySelector over and over again
