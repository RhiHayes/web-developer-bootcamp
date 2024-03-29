//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const lodash = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://rhiannon-hayes:todo12345@cluster0.3ehch.mongodb.net/todolistDB", {useNewUrlParser: true})

//Creates Item Model/Layout (aka all items must look like this.)
const itemsSchema = {
  name: String
}

//Creates Item Object
const Item = mongoose.model("Item", itemsSchema);

//Using Item Object to create Item
const item1 = new Item({
  name: "Welcome to your To-Do List!"
})

const item2 = new Item({
  name: "Hit the + button to add a new item."
})

const item3 = new Item({
  name: "<-- Hit this to delete a new item."
})

//Storing Items into an array
const defaultItems = [item1, item2, item3];


//Creating List Model/Layout (aka all lists must look like this.)
const listSchema = {
  name: String,
  items: [itemsSchema]
}


//Creates List Object
const List = mongoose.model("List", listSchema);



////----FUNCTIONS SECTION----

//This function removes duplicate names
function removeDuplicates(arr) {
let unique = [];
let trash = []

arr.forEach(element => {
    if (!unique.includes(element.name)) {
        unique.push(element.name);
    }

});
return unique;
}

//This function removes whatever value I input
  function arrayRemove(arr, value) {

         return arr.filter(function(ele){
             return ele != value;
         });
     }

////----FUNCTIONS SECTION END----


app.get("/", function(req, res) {

//Grabbing all foundItems
Item.find({}, function(error, foundItems) {

//if there are no items...
if(foundItems.length === 0) {
  //Insert default items
  Item.insertMany(defaultItems, function(err) {
    //If err
    if(err) {
      //Log
      console.log(err)
    } else {
      //Otherwise, log success
      console.log("Success!")
    }
  });
  //After checking for errors, redirect to homepage
  res.redirect("/");
} else {
  //If there ARE items...

//Find all list names
  List.find({}, function(err, lists) {
    if (err) {
      console.log(err);
    } else {
    //Clean up
         let removedDupArr = removeDuplicates(lists);
         let removedFav = arrayRemove(removedDupArr, "Favicon.ico")

//Then render items + list names
      res.render("list", {listTitle: "Today", newListItems: foundItems, listLinks: removedFav});
    }
    });

}

  });

});


//Grabs whatever the user types in for customList name
app.get("/:customListName", function(req, res) {

  //Stores customListName
  const customListName = lodash.capitalize(req.params.customListName);

//List.findOne is just looking for one match for a listName.
  List.findOne({name: customListName}, function(err, foundList) {
    //If there is no error
    if (!err) {
      //then, if the foundList doesn't exist
      if (!foundList) {
        //Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        })

        list.save();
        res.redirect("/" + customListName);
      } else {
        //if list DOES exist

        //Find all list names
        List.find({}, function(err, lists) {
          if (err) {
            console.log(err);
          } else {
            //clean up
               let removedDupArr = removeDuplicates(lists);
               let removedFav = arrayRemove(removedDupArr, "Favicon.ico")

               //Then show the existing list that was found + list names
               res.render("list", {listTitle: foundList.name, newListItems: foundList.items, listLinks: removedFav})
          }
          });
      }
    }
  })

})


//Creates new item
app.post("/", function(req, res){

  const itemName = req.body.newItem; //Store itemName
  const listName = req.body.list;

  const newListName = lodash.capitalize(req.body.newList);

  const item = new Item({
    name: itemName //Pass it into item Object
  })

  if (listName == "Today") { //First check if list is "Today"
    item.save(); //Save it
    res.redirect("/"); //Refresh page
  } else if(newListName.length !== 0) { //Then check if new list has been created via the text input
    res.redirect("/" + newListName);
  }
  else {
    //Find a list that matches the user's input
    List.findOne({name: listName}, function(err, foundList) {
      //Push the new item into the found list
      foundList.items.push(item); //Push new item into foundList
      foundList.save();
      res.redirect("/" + listName); //Redirect to proper listname
    })
  }
});

app.post("/delete", function(req,res) {
  const checkedItemId = req.body.checkbox; //Grabs id value of checkbox
  const listName = req.body.listName;

  if (listName === "Today") {
    //Removes item based on id
      Item.findByIdAndRemove(checkedItemId, function(err) {
        //If no error
        if (!err) {
          //Log deleted item and refresh page to update visual data
          console.log("Deleted item!");
          res.redirect("/");
        }

      });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList) {
      if(!err) {
        res.redirect("/" + listName);
      }
    })
  }

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running.");
});
