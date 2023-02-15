'use strict'

// function first() {
//     // Do something
//     console.log('Hi');
//     setTimeout(function() {
//         console.log('My name is Adam');
//     }, 1500);
// }

// // function second() {
// //     console.log(2);
// // }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('я прошёл этот урок!');
// }

// learnJS('Java Script', function() {
//     console.log('я прошёл этот урок!')
// })

// learnJS('Java Script', done);

// function myHome (town, callback) {
//     console.log(`Я живу в городе ${town}`);
//     callback();
// }

// function yearsOldTown() {
//     console.log('Him 25 yearsOld!')
// }

// myHome('Dnepr', yearsOldTown);

// function mult() {
//     let oneNumber = 3;

//     const twoNumber = function() {
//         oneNumber = oneNumber * 4;
//         return oneNumber;
//     }

//     return twoNumber;
// }

// const result = mult();
// const count = result();

// console.log(count);

// function createCounter() {
//     let counter = 3;

//     const myFunction = function() { debugger
//         counter = counter * 4; debugger

//         return counter; debugger

//     }
//     return myFunction;
// }
// debugger

// // // console.log(createCounter());
// const increment = createCounter(); debugger
// console.log(increment());
//  const c0 = increment(); debugger
//  console.log(c0);

// Call-back function - это когда функция которая должна быть выполнена после того как другая функция завершила своё выполнение!

// function one() {
//     // do something
//     let two = setTimeout(function() {
//         console.log('hi')
//     }, 1000);
// };

// function two() {
//     console.log(`I'm first!`);
// }

// // one();
learnJS('JavaScript', function () {
  setTimeout(function () {
    console.log('I have done this lesson!')
  })
})
// // two();

function learnJS(lang, callback) {
  console.log(`I learn ${lang}`)
  callback()
}

// function drive(car, callback, func, finished) {
//   console.log(`My car is ${car}`)
//   func()
//   callback()
//   finished()
// }

// function done() {
//   setTimeout(function () {
//     console.log('done')
//   }, 6000)
// }
// drive(
//   'Mazda',
//   function () {
//     setTimeout(function () {
//       console.log('Im already home')
//     }, 5000)
//   },
//   function () {
//     setTimeout(function () {
//       console.log('Driving...')
//     }, 200)
//   },
//   done
// )
