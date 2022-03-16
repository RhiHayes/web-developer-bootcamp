const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
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
	age: Number

})

const Person = new mongoose.model ("Person", personSchema)

const person = new Person ({
  name: "John",
	age: 37
})

// person.save()

const kiwi = new Fruit ({
	name: "Kiwi",
	rating: 10,
	review: "AMAZING!"
})

const orange = new Fruit ({
	name: "Orange",
	rating: 5,
	review: "It's ok."
})

const banana = new Fruit ({
	name: "Banana",
	rating: 2,
	review: "Weird texture."
})


Fruit.insertMany([kiwi, orange, banana], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("All fruits add to DB!")
  }

});
