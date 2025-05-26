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
};

console.log(restaurant.openingHours.Mon?.open);
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const item of weekdays) {
  const open = restaurant.openingHours[item]?.open ?? "closed";
  console.log(`on ${item} , we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? "method doesn't exist");
//array

//const users = [{ name: "joans ", email: "hello@yahoo.com" }];
const users = [];
console.log(users[0]?.name ?? "user undefined");
if (users.length > 0) {
  console.log(users[0].name);
} else console.log("array is empty ");
