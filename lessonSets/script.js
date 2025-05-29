orderSet = new Set(["cheese", "cheese", "flour", "tomato"]);
console.log(orderSet);
console.log(new Set("kkkkkuuuytyt"));
console.log(orderSet.size);
console.log(orderSet.has("kkk"));
orderSet.add("olive ", "olive");
console.log(orderSet);
orderSet.delete("flour");
console.log(orderSet);
//orderSet.clear();
console.log(orderSet);
for (const order of orderSet) {
  console.log(order);
}

const staff = ["waiter", "chef", "manager ", "waiter", "chef"];
const staffSet = [...new Set(staff)];
console.log(staffSet);
console.log(new Set(["waiter", "chef", "manager ", "waiter", "chef"]).size);
console.log(new Set("hhhgggttuuuu").size);
