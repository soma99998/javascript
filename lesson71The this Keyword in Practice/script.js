"use strict";

// The this Keyword in Practice
//console.log(this); //

const calcAge = function (birthYear) {
  console.log(2037 - birthYear); //
  console.log(this); // this is undefined when use strict mode
};
calcAge(1991);

//  function add(){
//     let  x= 2;
//     console.log (this);
//  }
//  add();
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

const jonas = {
  year: 1991,

  calcAge: function () {
    console.log(this); //
    let x = 2037 - this.year;
    //console.log(2037 - this.year);
    return x;
  },
};
jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // browwing method
// matilda.calcAge();
// jonas.calcAge();
const f = jonas.calcAge;
f(); //
