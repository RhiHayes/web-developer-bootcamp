
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

  var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: items}); //Render in the get, not the post

});

app.post("/", function(req, res) {

  var item = req.body.newItem;

  items.push(item);

  res.redirect("/"); //Refreshes page once item is submitted

})

app.listen(3000, function() {
  console.log("server started on port 3000.")
})
