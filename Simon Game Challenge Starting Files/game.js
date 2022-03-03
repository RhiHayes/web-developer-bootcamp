var buttonColors = ["red", "blue", "yellow", "green"]; //simon colors

gamePattern = []; //the actual game pattern is stored here
userClickedPattern = []; //the player's pattern is stored here
var started = false; // Game is not started by default
var level = 0; //Level is at 0


function nextSequence() { //determines the game's next move

userClickedPattern = []; //Resetting user clicked pattern; IMPORTANT!!!
//If you remove this, the functionality of simon doesn't work as intended.

  level++; //increments level
  $("#level-title").text("Level " + level); //updates level

  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];

  gamePattern.push(randomChosenColor);

  //NEW ADDITION: This loop allows the game pattern to be repeated

  for (let i = 0; i < gamePattern.length; i++) { //don't use var, it throws an error. use let


      setTimeout(function () { //This function plays each sound/animation one at a time

        console.log(gamePattern[i]);

        animatePress(gamePattern[i]);
        playSound(gamePattern[i]);

      }, (i + 1) * 500); 


  }

}

function playSound(name) { //plays the corresponding sound

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) { //Animating the press

  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
      $("#" + currentColor).removeClass("pressed");
   }, 100);

}

$(document).keydown(function() {

  if (!started) {
    $("#level-title").text("Level " + level); //Default level
    nextSequence();
    started = true;
  }

});

$(".btn").on("click", function() { //tracks player's choice

  var userChosenColor = $(this).attr('id');
  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern)

  checkAnswer(userClickedPattern.length-1); //checking most recent addition to array
});



function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");

      $("#level-title").text("Game Over! Press any key to restart."); //updates level

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function(){
          $("body").removeClass("game-over");
     }, 200);

     startOver();

  }

}

function startOver() {

  $(document).keydown(function() {

    gamePattern = []; //the actual game pattern is stored here
    started = false; // Game is not started by default
    level = 0; //Level is at 0

    nextSequence();

  });

}
