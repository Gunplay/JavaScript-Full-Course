'use strict';
// let id = Symbol('id');
// const obj = {
//     'name': 'Test',
//     // [id]: 1,
//     // getId: function() {
//     //     return this[id];
//     // }
//     [Symbol('id')]: 1, // скрытый дааже для перебра
//     [Symbol('id')]: function() {
//         console.log('I ivisible');
//     }
// }

// let id = Symbol('id');
// let id2 = Symbol('id');

// console.log(id === id2);
// obj[id] = 1;

// console.log(obj[id]);
// console.log(obj['name']);

// console.log(obj.getId());

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // метод для получения Symbol();
// console.log(obj[Object.getOwnPropertySymbols(obj)[1]]);
// // console.log(obj['id']); // обратиться мы не можем

// for ( let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123,
    [Symbol.for('id')]: 123,
    [Symbol.for('id2')]: 456,
    [Symbol.keyFor('id3') ]: 789,
}

// Сторонний код библиотеки

// myAwesomeDB.id = '23421';
// console.log(myAwesomeDB['id']);
// console.log(myAwesomeDB);
console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB[Symbol.for('id2')]);
console.log(myAwesomeDB[Symbol.keyFor()]);