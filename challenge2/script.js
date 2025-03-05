"use strict";

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's BMI ${johnBmi} `);
} else console.log(`john's BMI  ${johnBmi}is higher than mark'sBMI ${markBmi}`);

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's BMI ${johnBmi} `);
} else console.log(`john's BMI  ${johnBmi}is higher than mark'sBMI ${markBmi}`);
