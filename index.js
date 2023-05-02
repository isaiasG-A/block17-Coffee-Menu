const coffeeArray = require("./coffee_data");

          // Step 3
//Method 1: Using a Regular function and passing it to forEach()
function printCoffeeName(coffeeObject) {
  console.log(coffeeObject.name)
}

//coffeeArray.forEach(printCoffeeName);


//Method 2: Explicit Arrow function
//forEach() method will execute the arrow function that has a console.log once for each of the objects inside the array.

    // coffeeArray.forEach((coffeeObject) => {
       //   console.log(coffeeObject.name)
    // });


//Method 3: Implicit Arrow function
    coffeeArray.forEach(coffeeObject => console.log(coffeeObject.name));


      //Step 4: Drinks that cost $5 and under.

  //Explicit Arrow function
let filteredDrinks = coffeeArray.filter((coffeeObject) => {
  return coffeeObject.price <= 5;
}).map((filteredObject) => {
  return `${filteredObject.name} costs $${filteredObject.price}`
});

console.log(filteredDrinks)

        //Step 5: Array of drinks priced at an even number

 let evenPricesArr = coffeeArray.filter((ArrayObject) => {
  return (ArrayObject.price % 2) === 0;
}).map((filteredObject) => {
  return ({name:filteredObject.name, price:filteredObject.price});
});

  console.log(evenPricesArr);


    //Step 6: Print total
    let total = 0;
    coffeeArray.forEach((coffeeObject) => {
      total += coffeeObject.price;
    });

    console.log("Grand total $",total);

//Step 7: Array with seasonal drinks

let seasonaDrinks = coffeeArray.filter((coffeeObject) => {
  return coffeeObject.seasonal;
}).map((filteredObject) => {
  return ({name:filteredObject.name, price:filteredObject.price});
})

console.log(seasonaDrinks);

//Step 8
  let importedSeasonalDrinks = coffeeArray.filter((filteredObject) => {
    return filteredObject.seasonal;
  }).map((filteredObject) => {
    return `${filteredObject.name} with imported beans ☕️`
  });

  console.log(importedSeasonalDrinks)
