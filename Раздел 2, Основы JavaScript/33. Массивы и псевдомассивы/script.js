'use strict'

const arr = [2, false, -99, 13, 26, 8, 10, -1, -23, '']

arr.sort(compareNum)
console.log(arr)

function compareNum(a, b) {
  return a - b
}
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[arr.length - 1 ]);
//   if (i === 0 || i === 4) {
//     newArr.push(arr[i] * 2)
//   }
// }
// console.log(newArr)

// const newArr = arr.concat(3, 4, 'Hi')
// const sumArr = arr.reduce((sum, num) => sum + num)
// const isPositive = arr.filter((num) => num == false || num < 0)
// console.log(sumArr)
// console.log(isPositive)
// console.log(newArr)
// // console.log(arr.sort()); // сортирует как строки

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

// const str = prompt('', '')
// let products
// function isPositive() {
//   // const products = str.split(', ')
// } // массив
// console.log(products)
// // products.sort() // alphabet сортирует строчный элелемент!
// const info = products.sort().join('; ') // строка

// const div = document.createElement('div')
// div.textContent = info
// document.body.append(div)
