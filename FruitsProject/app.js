const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema ({
	name: {
  type: String,
  required: [true, "No name specified!"]
},
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
	review: String
})

const Fruit = new mongoose.model ("Fruit", fruitSchema)

const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Great!"
})

// fruit.save()

const personSchema = new mongoose.Schema ({
	name: String,
	age: Number,
  favoriteFruit: fruitSchema

})

const Person = new mongoose.model ("Person", personSchema)

// const pineapple = new Fruit ({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit!"
// })
//
//
// const person = new Person ({
//   name: "Amy",
// 	age: 12,
//   favoriteFruit: pineapple
// })

person.save()

const mango = new Fruit ({
  name: "Mango",
  score: 7,
  review: "Pretty good!"
})

mongo.save();

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err) {

  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }

})

// const kiwi = new Fruit ({
// 	name: "Kiwi",
// 	rating: 10,
// 	review: "AMAZING!"
// })
//
// const orange = new Fruit ({
// 	name: "Orange",
// 	rating: 5,
// 	review: "It's ok."
// })
//
// const banana = new Fruit ({
// 	name: "Banana",
// 	rating: 2,
// 	review: "Weird texture."
// })
//
//
// // Fruit.insertMany([kiwi, orange, banana], function(err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("All fruits add to DB!")
// //   }
// //
// // });


Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });

  }
});

//
// Fruit.updateOne({_id: "6230e33cb689afddd581ad75"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated document!")
//   }
// })

Fruit.deleteOne({_id: "6230e33cb689afddd581ad75"}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully deleted document!")
    }
})
