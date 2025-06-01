const rest = new Map();
rest.set("name", "totococo");
console.log(rest);
rest.set(1, "cairo egypt");
console.log(rest.set(2, "ksa keda"));
console.log(rest);
rest
  .set("categories ", ["italian", "pizzer", "vegetarian"])
  .set("open", 11)
  .set("close", 12)
  .set(true, "we are open ")
  .set(false, " we are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("open"));
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.get(2));
console.log(rest.size);
console.log(rest.set([1, 2], "test"));
console.log(rest.get([1, 2]));
const arr = [1.2];
console.log(rest.set(arr, "test"));
console.log(rest.get(arr));
rest.set(document.querySelector("h1"), "heading");
console.log(rest.get("h1"));
