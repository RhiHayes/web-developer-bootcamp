
// $("h1").css("color", "red");
// $("h1").addClass("big-title"); //Adds one class big-title from css file
$("h1").addClass("big-title margin-50"); //Adds class big-title AND margin-50 from css file
// $("h1").removeClass("big-title"); //Removes class big-title

console.log($("h1").hasClass("margin-50")); //will return true if it does have class, flase if not

$("h1").text("Bye"); //Change the text itself

$("button").html("<em>DON'T CLICK</em>"); ///Change the text itself & add HTML if needed


//NOTE FROM LESSON 177
//If you want your js files to load faster with the samefunctionality, use a minification
//software to crunch down the code and paste the new code into your js file!
