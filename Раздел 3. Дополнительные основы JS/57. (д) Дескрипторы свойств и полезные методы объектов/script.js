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
        console.log(`${this.name} ${this.surname}`);
    }
}

console.log(Object.keys(user)); // массив ключей объекта

// user.birthday = '2323wd';
// Object.defineProperty(user, 'birthday', {writable: false});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// user.birthday = '2323wd';

// Object.defineProperty(user, 'birthday', {qustion: prompt('Date?'), enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {writable: false});
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'gender', {value: 'male', writable: true});

// console.log(user['gender']);
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// for ( let key in user) console.log(key);

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false},
// })
