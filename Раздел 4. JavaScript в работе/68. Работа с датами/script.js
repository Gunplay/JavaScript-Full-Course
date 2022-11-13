'use strict';

// const now = new Date();
// const now = new Date("2022-10-29");
// const now = new Date(2020, 5 , 1, 20); // Месяцы в Date считаются с январая (0) + 3 = 17
// const now = new Date(0); // c 1970 начало отсчёта - 1970-01-01T00:00:00.000Z
// const now = new Date(-9999999); 

const now = new Date('2022-10-29');
// console.log(now);
const nowParse = new Date.parse('2022-10-29');
console.log(nowParse);

// console.log(now.setHours(40)); // UTC
// console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());

// console.log(now.getDay()); // Нумерация с Воскрсенья

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());


// let start = new Date();

// for(let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// for(let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// for(let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// for(let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллискинуд`);