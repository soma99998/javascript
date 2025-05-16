const arr = [6, 7, 8];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
const newArr = [1, 2, ...arr];
console.log(newArr);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPaste(ing1, ing2, ing3) {
    console.log(`there are decliuios paste ${ing1},${ing2},${ing3}`);
  },
};
const newMenu = [...restaurant.mainMenu, "fool"];
console.log(newMenu);
//copy array
const mainMeunCopy = [...restaurant.mainMenu];
console.log(mainMeunCopy);
//join 2 array
const meun = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(meun);
//ierables : strings,array,maps,ssets but n't object

//const str = "joans";
//const letters = [...str, "k"];
//console.log(letters);
// const ingredients = [
//   prompt("let' make some paste ingredient1?"),
//   prompt("let' make some paste ingredient2?"),
//   prompt("let' make some paste ingredient3?"),
// ];

//restaurant.orderPaste(...ingredients);
//console.log(ingredients);
//object
const newRestaurant = { ...restaurant, founder: "soma" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "ddd";
console.log(restaurantCopy);
