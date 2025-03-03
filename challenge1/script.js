"use strict";

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);
