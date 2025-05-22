const rest1 = { name: "capr", numGuest: 22 };
const rest2 = { name: "la pizza", owner: "givoanni rossi" };
//rest1.numGuest = rest1.numGuest || 10;
rest1.numGuest ||= 10;
console.log(rest1.numGuest);
rest2.numGuest ||= 10;
//rest2.numGuest = rest2.numGuest || 10;
console.log(rest2.numGuest);

//nullish assisgment operator

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1.numGuest);
console.log(rest2.numGuest);

//rest2.owner = rest2.owner && "anonyomous";

//console.log(rest2.owner);
//and assisgment opeator

rest1.owner &= "anonyomous";

console.log(rest1.owner);

rest2.owner &= "anonyomous";
console.log(rest2.owner);
