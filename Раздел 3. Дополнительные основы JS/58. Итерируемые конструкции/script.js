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



const objJavaObject = JSON.parse(JSON.stringify(obj));
console.log(objJavaObject);

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

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    'vova': 10000,
    sayHello: function() {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else{
                return {done: true}
            }
        }
    }
}

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for ( const key of salaries) {
//     console.log(key);
// }
