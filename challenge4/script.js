// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀
//  document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('button'));

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// // const btn = document.querySelector("button");

// // const text = document.querySelector("textarea");

// // btn.textContent = "convert";

// // btn.addEventListener("click", function () {
// //   const rows = text.value.split("\n");
// //   console.log(rows);

// //   for (let [i, n] of rows.entries()) {
// //     [first, second] = n.trim().toLowerCase().split("_");
// //     //console.log(first);
// //     //console.log(second);
// //     const word = first + second.replace(second[0], second[0].toUpperCase());
// //     console.log(word.padEnd(20, " ") + "✅".repeat(i++));
// //   }
// // });
// const btn = document.querySelector("button");
// const text = document.querySelector("textarea");
// btn.addEventListener("click", function () {
//   const line = text.value.split("\n");
//   for (let [i, n] of line.entries()) {
//     let [first, second] = n.trim().toLowerCase().split("_");
//     // console.log(first, second);
//     const whole = first + second.replace(second[0], second[0].toUpperCase());
//     //console.log(whole);
//     console.log(whole.padEnd(20, " ") + "$".repeat(i));
//     i++;
//   }
// });

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  //console.log(flight.split(";"));
  const [type, from, to, time] = flight.split(";");
  //console.log(type, from, to, time);
  // console.log(type);
  const output = ` ${type.startsWith("_Delayed") ? "*" : ""}${type.replaceAll(
    "_",
    " "
  )}  ${getCode(from)}  ${getCode(to)} (${time.replace(":", "h")})`.padStart(
    35
  );
  console.log(output);
}
