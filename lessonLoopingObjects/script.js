const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  // openingHours,

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

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const temp = Object.keys(restaurant.openingHours);
console.log(temp.length);
console.log(temp);
//for (const day of Object.keys(restaurant.openingHours)) {
//console.log(day);
//}
let openStr = `we are open on ${temp.length} days :`;

//
console.log(temp.length);
console.log(temp);
for (const day of temp) {
  console.log(day);
  openStr += `${day},`;
}
console.log(openStr);

//property values

const values = Object.values(restaurant.openingHours);
console.log(values);

//entire object

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on${key} we open at ${open}and close at ${close}`);
}
