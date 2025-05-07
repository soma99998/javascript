// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log("Before:", jessica1);
console.log("After:", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  familiy: ["Alice", "Bob"],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push("Mary");
jessicaClone.familiy.push("John");

console.log("Original:", jessica);
console.log("Clone:", jessicaClone);
