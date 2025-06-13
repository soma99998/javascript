const question = new Map([
  ["question", "what is the best programming lanuage in the world ?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);

// Data needed for first part of the section
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
//convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = Object.entries(restaurant.openingHours);
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`anwser ${key}:${value}`);
  }
}
//const answer = Number(prompt("what is your anwser?"));
//console.log(answer);
//const userAnswer = Boolean(prompt("what is your anwser?"));
//console.log(userAnswer);
//console.log(question.get(question.get("correct") === answer));
//convert map to array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.entries()]);
console.log([...question.values()]);
