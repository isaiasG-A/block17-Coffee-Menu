const coffeeArray = require("./coffee_data");

          // Step1
//Method 1: Regular function
function printCoffeeName(coffeeObject) {
  console.log(coffeeObject.name)
}

//coffeeArray.forEach(printCoffeeName);


//Method 2: Simplified using arrow function syntax
//forEach() method will execute the arrow function that has a console.log once for each of the objects inside the array.

// coffeeArray.forEach((coffeeObject) => {
//   console.log(coffeeObject.name)
// });


//Method2: An even more simplified version of an arrow function
coffeeArray.forEach(coffeeObject => console.log(coffeeObject.name));


