'use strict'

// let num = 20;

// function showFirstMessage(text, text1) {
//     console.log(text, text1);
//     console.log(num);
// }

// showFirstMessage('Hello World!', 232);
// console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
//     // console.log('sadasad') - после Return не работает ничего!
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     return 50;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// logger();
// const logger = function () {
//     console.log("Hello!");
// };
// logger();

// const calc = (a, b) => {
//   console.log('1')
//   return a + b
// }
// console.log(calc(3, 4))

// function sayHi() {
//   return `WOW`
// }
// function field(text, ...rest) {
//   console.log(text, rest)
// }
// field('Hi', 'Name', true, sayHi(), [
//   {
//     car: 'Shkoda',
//   },
// ])

const result = calculator(3, 40)
console.log(result)
function calculator(a, b) {
  // declaration - exists before declaration
  return a + b
}

// FUNCTION EXPRESSION - only after declaration

const logger = function () {
  console.log('Hello')
} // semicolon!!!
logger()

// arrow function - has no calling context
const calc = (a, b) => {
  return a + b
}
