
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

  const items = ["Buy Food", "Cook Food", "Eat Food"];
  const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {

  const day = date.getDate(); //my module

  res.render("list", {listTitle: day, newListItems: items}); //Render in the get, not the post

});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work"); //Refreshes WORK page once item is submitted
  } else {
    items.push(item);
    res.redirect("/"); //Refreshes page once item is submitted
  }


})

app.get("/work", function(req, res) {

  res.render("list", {listTitle: "Work List", newListItems: workItems})

})

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about");
})


app.listen(3000, function() {
  console.log("server started on port 3000.")
})
