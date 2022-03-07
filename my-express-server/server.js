
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello");
})

app.get("/about", function(req, res) {
  res.send("My name is Rhiannon!");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
