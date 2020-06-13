import './utils';

import subtract, { square, add } from './utils';

console.log("app.js is runningggg");
console.log(square(4));
console.log(add(3, 4));
console.log(subtract(10, 4));

import './person';

import isSenior, { isAdult, canDrink } from './person';

console.log(isAdult(18));
console.log(isAdult(17));
console.log(canDrink(21));
console.log(canDrink(20));
console.log(isSenior(65));
console.log(isSenior(21));