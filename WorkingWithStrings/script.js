const airline = "tap air Cairo";
let plane = "a320";

console.log(plane[0]);
console.log(plane[1]);
console.log("s333"[0]);
console.log(airline.length);
console.log("e333".length);
console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("c"));
console.log(airline.indexOf("C"));
console.log(airline.slice(3));
console.log(airline.slice(3, 5));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //A and E are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log(" you get middle seat");
  else console.assertlog("you don't get middle seat");
};
checkMiddleSeat("11B");
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// fix capitalization in name

const passenger = "jOnAs"; // jonas

const passengerLower = passenger.toLowerCase();

console.log(passengerLower);

const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//compare email

const email = "hello@joans.io";
const loginEmail = "  Hello@Joans.Io\n";
//const lowerEmail = loginEmail.toLocaleLowerCase();
//console.log(lowerEmail);

// remove white space ,\n consider as white space

//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);
const normalizationEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizationEmail);
console.log(email === normalizationEmail);

//replace

const priceGB = "288,97#";
const priceUs = priceGB.replace(",", ".").replace("#", "$");
console.log(priceUs);

const announcement =
  "all passengers come to barding door 23 . boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
//booleans

plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing "));
console.log(plane.startsWith("Air"));
if (plane.startsWith("Airbus ") && plane.endsWith("neo")) {
  console.log("part of airbus family ");
}
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knif") || baggage.includes("gun")) {
    console.log("you aren' allowed to board");
  } else console.log("you are allow on board ");
};
checkBaggage("i have a loptop ,some Food and a packet Knief");
checkBaggage("Socks and camera");
//split and joint
console.log("a+very+nice+string".split("+"));

console.log("asmma abd".split(" "));

const [firstName, secondName] = "asmma abd  ".split(" ");
console.log(firstName, secondName);

const newName = ["Mr.", firstName, secondName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameUupper = [];
  for (const n of names) {
    //nameUupper.push(n[0].toUpperCase() + n.slice(1));
    nameUupper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUupper.join(" "));
};
capitalizeName("jessica smith ann");

//padding

const message = "go to gate 23";
console.log(message.padStart(25, "+").padEnd(33, "="));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
const result = maskCreditCard(556677889887);
console.log(result);
// repeat

const message2 = "bad weather all departuers delayed";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line $.repeat{n}}`);
};
