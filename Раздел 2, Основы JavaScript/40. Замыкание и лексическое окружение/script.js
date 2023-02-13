'use strict'

// let number = 5; debugger
// // logNumber();
// function logNumber() {

//     console.log(number); debugger
// }
// // logNumber();

// number = 6;
// logNumber(); debugger

// number = 8;
// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() { debugger
//         counter = counter + 1; debugger

//         return counter; debugger

//     }
//     return myFunction;
// }
// debugger

// // console.log(createCounter());
// const increment = createCounter(); debugger
// const c0 = increment(); debugger
// const c1 = increment(); debugger
// const c2 = increment(); debugger
// const c3 = increment(); debugger

// console.log(c0, c1, c2, c3);

// console.log(typeof(NaN));

// console.log(0 || 1);

// console.log(0 && 1);

// console.log("a" > "b");

// console.log(0 || NaN || false || null);

// console.log(0 || NaN);
// console.log(NaN || false);
// console.log(false || null);

// console.log(typeof(null));

// for (let i = 1; i < 5; i++) {
//     console.log(i + 2)
// }

// Что будет содержаться в переменной result после завершения кода?

// function foo(a,b) {
//     const [first] = a;
//     const {eng} = b;

//     return `${first} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
// console.log(result);

// Что будет содержаться в переменной time?

// let time = '';
// 0 || false ? time = 'Day' : time = 'Night'
// console.log(5 > 3 || 2 );
// console.log(0 || 0);
// console.log(time)

// Что вам следует проверить
// Лекция 25 Функции, стрелочные ф-ции (ES6)
// Лекция 33 Массивы и псевдомассивы
// Лекция 32 Объекты, деструктуризация объектов (ES6)

// const unswer = countNum(); // держим внутренню функциюю в переменной
// let three;
//  setTimeout(() => {
//     three = unswer();
//     console.log(three);

//     setTimeout(() =>{
//         let four = unswer();
//         console.log(four);
//     }, 3000)
//  }, 2000)
// const one = unswer();
// const two = unswer();
// console.log(one, two);

let bonus = 10
const createCounter = () => {
  let counter = 0

  const myFunction = () => {
    counter = counter + 1 + bonus
    return counter
  }

  return myFunction
}

const increase = createCounter()
const c1 = increase()
const c2 = increase()
const c3 = increase()

function array(...arr) {
  console.log(arr)
  // let sum = 0
  const newArr = arr.map((num, i) => (num > 12 ? num + 1 : delete arr[num]))
  console.log(newArr)
}
array(c1, c2, c3)

// console.log([c1, c2, c3])
