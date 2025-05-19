const arr = [1, 2, ...[3, 4]]; //spread operator cause used in right side of =
const [a, b, ...other] = [1, 2, 3, 4, 5]; //rest cause used in left side of =
console.log(other);
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  //openingHours,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizze: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};
const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood);
//objects
const { sat, ...otherObject } = restaurant.openingHours;
console.log(sat, otherObject);
//function

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(2, 3, 4, 5, 6);

const x = [23, 55, 8];
add(...x);
restaurant.orderPizze("mushroom", "olives", "cheese");
