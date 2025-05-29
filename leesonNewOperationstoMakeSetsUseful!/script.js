const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFood = mexicanFoods.intersection(italianFoods);
console.log("intersection :", commonFood);
console.log([...commonFood]);
const unionFood = mexicanFoods.union(italianFoods);
console.log(unionFood);
console.log(new Set([...mexicanFoods, ...italianFoods]));
console.log([...new Set([...mexicanFoods, ...italianFoods])]);
const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log("difference italan:", uniqueItalianFood);
const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log("difference mexican :", uniqueMexicanFood);
const uniqueItalianAndMexicanFood =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFood);
console.log(italianFoods.isDisjointFrom(mexicanFoods));
