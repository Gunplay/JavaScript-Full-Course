'use strict'

// let user = {name: 'Ivan', surname: 'ysada'};

// // const arr = [user];

// // user = null;
// // let map = new Map();
// let map = new WeakMap(); // WeakMap - видит глобально что объект удалён
// map.set(user, 'data');

// // console.log(map);

// user = null;

// // console.log(arr);
// // console.log(map.keys());
// // console.log(map.has(user));
// console.log(map);

// let cache = new WeakMap();
// // Weak - keys, values, add, has, delete, get
// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};
// // lena = null;

// cacheUser(lena);
// cacheUser(alex);

// lena = null;
// console.log(cache.values());
// console.log(cache.key(lena));
// console.log(cache.has(alex));

// WeakSet - add, has, delete


let messages = [
    {text: 'hello',from: 'John'},
    {text: "world", from: 'Alex'},
    {text: '...', from: 'M'},
];

let readMessages = new WeakSet(); // Как и Set берёт уникальные значения и хранит их как помеченные
// console.log(readMessages);
// отмечаем
readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]); // Это уже не добавиться, как и Set берёт уникальные значения и хранит их как помеченные
messages.shift(); // 
console.log(readMessages.has(messages[0]));


