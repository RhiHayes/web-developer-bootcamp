var heading = document.firstElementChild.lastElementChild.firstElementChild; //Selecting element from DOM and storing it into a variable

heading.innerHTML = "Goodbye"; //manipulating it by calling the variable

heading.style.color = "red"; //makes heading red

document.querySelector("input").click(); //searches entire document for input, then .click automatically checks it.

// Properties vs Methods
//
// Using a car as an example...
//
// Properties of car:
//
// - color
// - Number of doors
// - Number of seats
//
// Methods of car:
//
// - Drive
// - Park
// - Brake
//
// car.color //getter: tells you what color the car already is
//
// car.numberOfDoors = 0; //setter: changes the number of door the car has
//
// car.drive(); //Calling method: calling this method will allow the car to move
//
// ------------------------------------------------------------------------------
//
// Button Element
//
// Properties of Button:
//
// - innerHTML
// - style
// - firstChild
//
// Methods of Button:
//
// - .click()
// - .appendChild()
// - .setAttribute()
// ------------------------------------------------------------------------------

document.getElementsByTagName("li")[2].style.color = "orange"; //selects list item, [2] selects the third
//list item (0, 1, 2), then we change the color of the third list item to orange.

document.getElementsByTagName("li").length; //output = 3

document.getElementsByClassName("btn")[0].style.color = "red"; //you have to use the square brackets
//if you want to select the first of that class, even if there is juts ONE element with that class name

document.getElementById("title").innerHTML = "New Title";

//Query Selector will bring back tag, class or id, it doesn't matter which you pick!

document.querySelector("h1"); //tag
document.querySelector("#title"); //id
document.querySelector(".btn"); //class

document.querySelector("li a").style.color = "green"; //styles the link *inside* the li tag
document.querySelector("li.item").style.color = "blue"; //styles the li with a class of item

// document.querySelector("#list a").style.color = "pink"; //styles the first anchor tag in id of "list"

//document.querySelector("#list .item") //only gives you back the first element with a class of .item inside id of "list",
//even if there are multiple .item elements inside of "list"

document.querySelectorAll("#list .item")[1].style.color = "red"; //selects all elements with class of item inside of
//id of list, [1] grabs the second element and turns it red
