const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const x = arr[0];
const y = arr[1];
const z = arr[2];

console.log(x, y, z);
const [a, b, c] = arr;
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
//console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

//console.log(temp, main, secondary);
[main, secondary] = [secondary, main];
//console.log(main, secondary);
//console.log(restaurant.order(2, 1));
// recieve 2 return 2 value from a function
const [f, u] = restaurant.order(2, 2);
console.log(f, u);

const nested = [5, 6, [3, 4]];

//const [i, , h] = nested;
//console.log(i, h);
const [i, , [h, o]] = nested;
console.log(i, h, o);

//default values

const [t, r, e = 3] = [5, 9];
console.log(t, r, e);
