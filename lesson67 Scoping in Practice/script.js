"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = ` ${firstName}you are ${age} , born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var milllenial = true;
      const str = `you are milllenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(milllenial);
    add(2, 3);
  }
  printAge();
  return age;
}
const firstName = "joans";
calcAge(1990);
//console.log(age);
//printAge();
