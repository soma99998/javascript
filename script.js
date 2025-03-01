// const doplinSocre = (97 + 112 + 101) / 3;
// const koalasSorce = (109 + 95 + 106) / 3;

// console.log(doplinSocre, koalasSorce);

// if (doplinSocre > koalasSorce) {
//   console.log("doplin is winner");
// } else if (koalasSorce > doplinSocre) console.log("koalas  is winner");
// else if (doplinSocre === koalasSorce) console.log("both win ");

// const doplinSocre = (97 + 112 + 101) / 3;
// const koalasSorce = (109 + 95 + 106) / 3;

// console.log(doplinSocre, koalasSorce);

// if (doplinSocre > koalasSorce && doplinSocre > 100) {
//   console.log("doplin is winner");
// } else if (koalasSorce > doplinSocre && koalasSorce > 100)
//   console.log("koalas  is winner");
// else if (
//   doplinSocre === koalasSorce &&
//   doplinSocre >= 100 &&
//   koalasSorce >= 100
// )
//   console.log("both win ");
// else console.log("no one win ");

//const day = "friday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     break;
//   case "tuesday":
//     console.log("prepare theory viedos");
//     break;
//   case "wednesday":
//   case "thursay":
//     console.log("write code example");
//     break;
//   case "friday":
//     console.log("record viedo");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("n't an valid day");
// }

// if (day === "monday") console.log("plan course structure");
// else if (day === "tuesday") console.log("prepare theory viedos");
// else if (day === "wednesday" || day === "thursay")
//   console.log("write code example");
// else if (day === "friday") console.log("record viedo");
// else if (day === "saturday" || day === "sunday")
//   console.log("enjoy the weekend");
// else console.log("n't an valid day");
//
//
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// console.log(`the bill ${bill} the tip ${tip} the total ${tip + bill}`);
// "use strict";
// let hasDrivingLicense = false;
// const passTest = true;

// if (passTest) hasDrivingLcense = true;
// if (hasDrivingLicense) console.log("i can drive");

// const interface = "uuu";
// function declaration
// const age1 = ageCalc(1999);
// function ageCalc(birthYear){
//   return 2999 - birthYear;

// }

// console.log(age1);
// function expression
// const ageCalc2 = function (birthYear){
//  return 2999 - birthYear;
// }

// const age2 = ageCalc2(1999);
// console.log (age2);

// arrow function : special form of function expression

// const ageCalc3 = birthYear => 2999 - birthYear ;
//  const age3 = ageCalc3(1999);
//  console.log(age3);

//  const ageOfRetirent = (birthYear , firstName) => {
//   const age = 2037 - birthYear;
//   const retirementAge = 65 - age;
// return `${firstName} retired in ${retirementAge} years`;
//  }
// console.log (ageOfRetirent(1999 ,'ahmed'));

// const fruit = function (fruit){
//   return fruit * 4 ;
// }

// const fruitProcessor = function  ( apples , organe ){
//   const applePieces = fruit (apples);
//   const organePieces = fruit (organe);
// const juice = `juice with ${applePieces} and ${organePieces}`;
// return juice;
// }
// console.log (fruitProcessor (4,6));
// const calAge = function (birthYear){
//   return  2037 - birthYear ;
// }

// const yearsUntilRetirement = function (birthYear , firstName){
//  const age = calAge (birthYear);
//   const retirementAge = 65 - age;
//   if (retirementAge > 0){
//     console.log(`${firstName} retires in ${retirementAge} years`);
//     return retirementAge;
//   }
//   else {console.log(`${firstName} already retired `);
//     return -1 ;

//   }}
//  console.log(yearsUntilRetirement (1960, 'ahmed'));

// const average = (a, b, c) => (a + b + c) / 3;

// const checkWinner = function (doplinAverage, koalasAverage) {
//   if (doplinAverage >= 2 * koalasAverage) {
//     console.log(`doplin wins (${doplinAverage} vs ${koalasAverage})`);
//   } else if (koalasAverage >= 2 * doplinAverage)
//     console.log(`koalas wins (${koalasAverage} vs ${doplinAverage})`);
//   else console.log(`no one wins ${doplinAverage} vs ${koalasAverage}`);
// };

// let doplinAverage = average(85, 54, 41);
// let koalasAverage = average(23, 34, 27);

// checkWinner(doplinAverage, koalasAverage);

// const friends = ["asmaa", "nour", "omar"];
// console.log(friends);
// const years = new Array(1999, 1989, 1977);
// console.log(years);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "yoyo";
// console.log(friends);

//friends = ["eoeo", "ali"];

// const firstName = "joans";

// const joans = [firstName, "schctman", 2070 - 1991, "teacher", friends];
// console.log(joans);
// console.log(joans.length);

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const year = [1999, 1990, 1980, 1988];
// const result = calAge(year[0]);
// console.log(result);

// const ages = [calAge(year[0]), calAge(year[1]), calAge(year[year.length - 1])];
// console.log(ages);
// add element to array
// const friends = ["asmaa", "beto", "beta", "marvat"];
// const newLength = friends.push("marwa");
// console.log(friends);
// console.log(newLength);

// friends.unshift("sabah");
// console.log(friends);

// // remove element from array
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);
// friends.unshift(23);
// console.log(friends.indexOf("asmaa"));
// console.log(friends.indexOf("bob"));
// console.log(friends.includes("asmaa"));
// console.log(friends.includes("bob"));
// console.log(friends.includes(23));
// if (friends.includes("asmaa")) {
//   console.log("asmaa is here");
// }

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// };

// // arrow function

// const calTips = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const joansArray = ['joans',
//   'schadmann',
//   2037 - 1991 ,
//   'teacher',
//   ['asmaa','beto','beta']
// ];

// const joans = {
//   firstName: "joans",
//   lastName: "schadmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["asmaa", "beto", "beta"],
// };

// console.log(joans);
// console.log(joans.firstName);
// console.log(joans["lastName"]);
// const nameKey = "Name";
// console.log(joans["first" + nameKey]);
// console.log(joans["last" + nameKey]);

//console.log(joans."last" + nameKey);

// const userInput = prompt(
//   "what do you want to know about joans firstName,lastName,job,age and friends"
// );
// console.log(userInput);
// //console.log(joans.userInput);
// console.log(joans[userInput]);

// if (joans[userInput]) {
//   console.log(joans[userInput]);
// } else console.log("wrong input try again");

// joans.location = "egypt";
// joans["email"] = "@soma.com";
// console.log(joans);

// console.log(
//   joans.firstName +
//     " has " +
//     joans.friends.length +
//     " friends and his best friend is " +
//     joans.friends[0]
// );
// console.log(
//   `${joans.firstName} has ${joans.friends.length} friends and his best friend is ${joans.friends[0]}`
// );
// const joans1 = {
//   firstName: "joans",
//   lastName: "schadmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["asmaa", "beto", "beta"],
//   hasLicense: true,
//   ageCalc: function () {
//     console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.ageCalc()} year-old ${
//       this.job
//     } , and he has a  ${this.hasLicense ? "a" : "no"} drive license `;
//   },
// };
// // },
// // function agCalc (birthYear){
// //   return 2037 - 1991;}

// console.log(joans1.ageCalc());
// console.log(joans1.age);
// console.log(joans1.getSummary());

// // console.log(joans["ageCalc"](1990));

// const mark = {
//   firstName: "mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   firstName: "john",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const compare = function () {
//   return john.calcBMI() > mark.calcBMI()
//     ? `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi}).`
//     : `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi}).`;
// };
// console.log(john.calcBMI());
// console.log(mark.calcBMI());

// console.log(compare());
// const greet = function greetFunction() {
//   const x = 4 * 7;
//   return x;
// };
// // console.log(greetFunction());
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`hello ${rep}`);
// }
// const joansArray = [
//   "asmaa",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["asmaa", "beto", "beta"],
// ];
// // const type = [];
// // for (let x = 0; x < joansArray.length; x++) {
// //   console.log(joansArray[x]);
// //   type.push(typeof joansArray[x]);
// // }
// // console.log(type);
// // const years = [1991, 2007, 2008, 1998];
// // const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //   ages.push(years[i]);
// // }
// // console.log(ages);
// //continue with string
// // for (let x = 0; x < joansArray.length; x++) {
// //   if (typeof joansArray[x] !== "string") continue;
// //   console.log(joansArray[x]);
// // }
// // console.log("--------------------with break -----------"); // break with number
// // for (let x = 0; x < joansArray.length; x++) {
// // //   if (typeof joansArray[x] == "number") break;
// // //   console.log(joansArray[x], typeof joansArray[x]);
// // // }
// // const joans = [
// //   "joans",
// //   "schedtmann",
// //   2037 - 1990,
// //   "teacher",
// //   ["asmaa", "beto", "beta"],
// // ];

// // for (let i = joans.length - 1; i >= 0; i--) {
// //   console.log(joans[i]);
// // }
// // for (let exercise = 1; exercise < 4; exercise++) {
// //   console.log(`---------------- starting exercise ${exercise}`);

// //   for (let rep = 1; rep < 6; rep++)
// //     console.log(`${exercise}lifting weight reptition ${rep}`);
// // // }

// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`  lifting weight reptition ${rep}`);
// // }

// // console.log("--------------------------------");
// // let rep = 1;
// // while (rep < 10) {
// //   console.log(` lifting weight reptition ${rep}`);
// //   rep++;
// // }
// // let dice = Math.trunc(Math.random() * 6) + 1;
// // while (dice !== 6) {
// //   console.log(`you rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// //   if (dice === 6) {
// //     console.log(" end loop");
// //   }
// // }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const total = [];
// const tips = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(tips[i] + bills[i]);
// }
// console.log(tips, total);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage(total));
'use strict';
/*
const x = 6;
const calcAge = birthYear => 2037 - birthYear;
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);*/
//document.querySelector('.guess').value = 1;
//console.log(document.querySelector('.guess').value);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// //document.querySelector('.number').textContent = secretNumber;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   displayMessage(' Correct number');
//   // when there is no input
//   if (!guess) displayMessage('no number');
//   // when player wins
//   else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('body').style.backgroundColor = ' yellow';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
//   // too high
//   // when guess is wrong
//   else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       //   guess > secretNumber ? 'too high' : 'too low ';
//       displayMessage(guess > secretNumber ? 'too high' : 'too low ');
//     }
//   }
//   //  else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '! too high';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'lossing game';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'too low';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'lossing game';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
//   document.querySelector('.again').addEventListener('click', function () {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.highscore').textContent = '0';
//   });
// });
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const openModal = function () {
  console.log(' button click ');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].addEventListener('click', openModal));
}

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);
