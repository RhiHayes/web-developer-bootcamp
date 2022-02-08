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
