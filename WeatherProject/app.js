const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res) {

  const query = req.body.cityName;
  const key = "1e4e7c99682810752acbabe9604f1fd4";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + key + "&units=" + unit;

    https.get(url, function(response) {
      console.log(response.statusCode);

      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        console.log(weatherData);
        console.log(temp);
        console.log(weatherDescription);

        res.write('<head><meta charset="utf-8"></head>');
        res.write("<h1> The weather is currently: " + weatherDescription + "</h1>");
        res.write("<h2> The temeraure in " + query + " is " + temp + " F. </h2>");
        res.write("<img src=" + imageURL + ">") ;

        res.send();
      })

    })

})


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
