'use strict';

// Задачи:

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// Пример:

// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];


// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//       film.id = i;
//      return film;
//     })
// }
// // console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

// function checkFilms(arr) {
//     return arr.every((item, i) => {
//         return item.id === i;
//     });    
// };
// console.log(checkFilms(tranformedArray));

// const film = {
//     name: 'Titanic',
//     rating: 9
// };

// film.id = 0;
// console.log(film);
// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc},  ${curr.name}`);

// //    let str = '';
//    let str = [];

//     for ( let i = 0; i < films.length; i++) {
//         // str = str + ", " + films[i].name;
//         str.push(films[i].name);
//     }
//     const newArr = str.join(', ');
//     // return str.slice(2);
//     return newArr;
// }

// console.log(showListOfFilms(films));

// const arr = [0, 1, 2, 3, 4,];

// console.log(arr.reduce((acc, cur) => acc + cur, 5));

// function showGoodFilms(arr) {
    
//   arr.map((item, i) => {
//     if ( item.rating >= 8) {
//         console.log(item);
//     }
//   })
// }
// showGoodFilms(films);

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }
// console.log(showGoodFilms(films));


//  N2
// function showListOfFilms(arr) {
    
//     arr.map(film => {
//         const newArr = [];
//       const onlyName = film.name;
//         console.log(onlyName);
    
//     });


// }
// showListOfFilms(films);

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// console.log(showListOfFilms(films));

// let a = 5 > 0 ? 1 : 0;
// console.log(a);

// const sum = () => {
//     return 100 + 4;
// }
// const devide = () => {
//     return 100 / 5;
// }
// console.log(devide());

// let a = sum() > devide() ? true : false;
// console.log(a);

// let cool = true;
// let fu = true;

// let messege = 'This is - ' + (cool && fu ? 'good' : 'bed');
// console.log(messege);

// Задачи:

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// Пример:

// getPositiveIncomeAmount(funds) => 13300

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];






const getPositiveIncomeAmount = (data) => {
    return data.filter((item) => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};
console.log(getPositiveIncomeAmount (funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:

// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
  
  return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
  
};
console.log(getTotalIncomeAmount(funds));



