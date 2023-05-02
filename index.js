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
const filteredDrinks = coffeeArray.filter((coffeeObject) => {
 let filteredArray = coffeeObject.price === 5;

 filteredArray.map((filteredObject) => {
    return `${filteredObject.name} costs $${filteredObject.price}`
 })
});

console.log(filteredDrinks)

        //Step 5: Array of drinks priced at an even number

 coffeeArray.filter((ArrayObject) => {
  return (ArrayObject.price % 2) === 0;
});


    //Step 6: Print total

  
  

