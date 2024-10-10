"use strict";

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1.concat(' and ', fact2.slice(0, 1).toLowerCase(), fact2.slice(1));
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);