const express= require("express");
const bodyParser = require("body-parser");
const request =  require("request");
const https = require("https");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+ "/signup.html");
});


app.post("/", function(req,res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName

        }
      }
    ]
  };

  const jsonData =  JSON.stringify(data);

  const url= "https://us14.api.mailchimp.com/3.0/lists/f2e13a5a2e";

  const options = {
    method: "POST",
    auth: "bilale1:4ac86684790c14ea214254d26a1c2ab9-us14"
  };

  const request = https.request(url, options, function(response){

    if (response.statusCode ===200) {
      res.sendFile(__dirname+"/success.html");
    } else {
      res.sendFile(__dirname+"/failure.html");
    }

    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running.");
});


// // 4ac86684790c14ea214254d26a1c2ab9-us14
// // f2e13a5a2e
