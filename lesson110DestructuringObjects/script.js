const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at${address}in ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "maadi",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({ address: "madnit naser" });
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
//rename
const { name: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);
//default values
const { menu = {}, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//nested object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
