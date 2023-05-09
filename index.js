

// d. Connect the coffee_data.js file to the index.js file.
const coffeeMenu = require("./coffee_data.js")

//print an array of all the drinks on the menu
console.log(coffeeMenu)
console.table(coffeeMenu)

//print an array of all the drinks that cost 5 and under
const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5)
console.log(cheapDrinks)
console.table(cheapDrinks)


//print an array of drinks that are priced at an even number
const evenDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0)
console.log(evenDrinks)
console.table(evenDrinks)

//print an array with all the drinks that are seasonal
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal === true)
console.log(seasonalDrinks)
console.table(seasonalDrinks)

//print all the seasonal drinks with the words "with imported beans" after the item name.For example:"affogato with imported beans"
const withImportedBeans = seasonalDrinks.map(drink => drink.name + "with imported beans")
console.log(withImportedBeans)
console.table(withImportedBeans)


  