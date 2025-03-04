"use strict";

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  " i'am " + firstName + ".a " + (year - birthYear) + " years old " + job;
console.log(jonas);

const jonasNew = `i'am ${firstName} a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log(
  "String with \n\
    multiple \n\
    lines"
);

console.log(`String
    multiple
    lines`);
