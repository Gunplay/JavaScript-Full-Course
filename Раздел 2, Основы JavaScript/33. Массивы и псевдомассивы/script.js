
'use strict';

const arr = [2, 13, 26, 8, 10];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[arr.length - 1 ]);
        console.log(arr[i] + arr[i + 4]);
}
// console.log(arr.sort()); // сортирует как строки

// function compareNum (a, b) {
//     return a - b;
// }
// console.log(arr.sort(compareNum));
// console.log(arr.length);
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);



// arr.forEach(function(item, i, arr) {
//     console.log(`${item} по индексу: ${i}, в массиве: ${arr}`);
// }) 

// Удаляет с конца
// arr.pop();
// добовляет в конец!
// arr.push(10);
// console.log(arr);

// shift and inshift - use very rarery. because Elem move on, change on one key

// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// // }
// console.log(`Длина массива: ${arr.length}`);

// ПЛЮС метода for of - можно использовать break and continue!!!!!!!!
// for ( let value of arr) {
//     console.log(value);
// }

// const str = prompt ("", "");
// const products = str.split(", "); // массив
// products.sort(); // alphabet сортирует строчный элелемент!
// console.log(products.join('; '));// строка
