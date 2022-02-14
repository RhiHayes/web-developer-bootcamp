
// $("h1").css("color", "red");
// $("h1").addClass("big-title"); //Adds one class big-title from css file
$("h1").addClass("big-title margin-50"); //Adds class big-title AND margin-50 from css file
// $("h1").removeClass("big-title"); //Removes class big-title

console.log($("h1").hasClass("margin-50")); //will return true if it does have class, flase if not

$("h1").text("Bye"); //Change the text itself

$("button").html("<em>DON'T CLICK</em>"); ///Change the text itself & add HTML if needed


console.log($("img").attr("src")); //Logs the name of the img file

$("a").attr("href", "https://www.yahoo.com"); //Changes the value of the href

console.log($("h1").attr("class")); //Gives you all the classes attatched to h1


// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });

$("input").keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});


$("h1").before("<button>Before</button"); //Add a new button element using ONLY js BEFORE h1
$("h1").after("<button>After</button"); //Add a new button element using ONLY js AFTER h1


$("h1").prepend("<button>Inside (left)</button"); //Added the button INSIDE the h1 element on the left. Inspect for details.
$("h1").append("<button>Inside (right)</button"); //Added the button INSIDE the h1 elemnt on the right. Inspect for details.


// $("button").remove() //Removes ALL buttons, including HTML and js buttons


$("button").on("click", function() {

// $("h1").hide(); //hides element from page on click
// $("h1").toggle(); //toggles element on and off on each click

// $("h1").fadeIn(); //Fade in on click
// $("h1").fadeOut(); //Fade out on click

// $("h1").animate({opacity: 0.5}); //.animate is good to animate anything with a numeric value

$("h1").slideUp().slideDown().animate({opacity: 0.5}); //chaining works here

});


//NOTE FROM LESSON 177
//If you want your js files to load faster with the samefunctionality, use a minification
//software to crunch down the code and paste the new code into your js file!
