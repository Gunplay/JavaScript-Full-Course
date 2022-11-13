'use strict';
//                                                              forEach
// names.forEach((name, i) => {
//     console.log(`${i + 1} ${name}`);
// })


//                                                              filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     // if (name.length <= 4) {
//     //     console.log(name);
//     // }

//     return name.length < 5;
// });

// console.log(shortNames);

//                                                              map

// const answers = ['IvAn', 'AnnA', 'HellO'];

// const newAnswers = answers.map((name, i) =>{
//    return  name[0].toUpperCase() + name.slice(1).toLocaleLowerCase();

// })
// console.log(newAnswers);

//                                              every / some возвращают Boolean(true/false);


// const some = [4, 'qwq', 'asdsadsfdf']; // хотя бы один элем соответствует условию
// const number = [4, 5, 6];

// console.log(some.some(item => typeof(item) === 'number')); // true

// console.log(number.every(item => typeof(item) === 'number')); // если каждый элементы все соответсвуют!


//                                              reduce - соберат массив в единое целое!!


// const arr = [4, 5, 1, 3, 2, 6];
// // //                    sum = 0;  current = 4,5,1,3,2,6
// // //                     sum = 4 + 5;
// // //                      sum = 9 + 1;
// // //                       .....
// const res = arr.reduce((sum, current) => sum + current, 3); // 3 параметр - начальное значение
// console.log(res);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     // console.log(i);
//     sum = sum + i;
// }
// console.log(sum);

// const arr = ['apple', 'pear', 'plum'];
//                 //    sum = 0;  current = 4,5,1,3,2,6
//                 //     sum = 4 + 5;
//                 //      sum = 9 + 1;
//                 //       .....
// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal',
// }
// // Цепочка (CHAIN);
// const newArr = Object.entries(obj) // массив
// .filter(item => item[1] === 'persone')
// .map((item) => item[0]);
// // .filter((item) => item === 'ivan');
// console.log(newArr);
// for ( let key in obj) {
//    if ( key === 'ivan' || key === 'ann') {
//     console.log(key);
//    }
// }


