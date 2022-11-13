'use strict'
// const obj = {
//     name: 'Adam',
//     work: 'C++',
//     old: '10',
// };

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);

// writable - перезапись
// enumerable - нумерация
// configurable - удаление

// Object.is() - являются ли два значения различными (то есть , одинаковыми) 

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        // console.log(`${this.name} ${this.surname}`);
    }
}
user.work = 'JavaScript';
const car = 'bmw';
user[car] = 99000;
const userMap = new Map(Object.entries(user));// карта (массив с массивами)


const newUserObj = Object.fromEntries(userMap); // из массива в объект!!!
console.log(newUserObj);

// for (const key of user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// Array.prototype.nextMethod = function() {};
// console.dir(arr);
// for (const key in arr) {
//     // for of - не показывает методы!
//     console.log(key);
// }

const str = 'string';
console.dir(str);
// for (const key in str) {
//     console.log(str[key]);
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// }

// salaries[Symbol.iterator] = function() {
//     return {
//         current: this.john,
//         last: this.ann,

//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current}
//             } else{
//                 return {done: true}
//             }
//         }
//     }
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for ( const key of salaries) {
//     console.log(key);
// }


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    // console.log(shop);
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[1], 25000);

// console.log(map);
// console.log(map);
// console.log(map.has(shops[2])); // Проверка на наличие

// map.delete(key);
// map.clear();
// map.size;

// Map - это интерируемый объект
// console.log(map.keys());
// for ( let shop of map.keys()){
//     console.log(shop);
// }

const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }


// let count = 0;
// for (let price of map.values()) {
//     count = count + price;
//     // goods.push(price);
   
// }
// console.log(count);
// console.log(goods);

// for (let price of map.entries()) {
//    console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
//  }

// map.forEach((value, key, map)=> {
//     console.log(key, value);
// })