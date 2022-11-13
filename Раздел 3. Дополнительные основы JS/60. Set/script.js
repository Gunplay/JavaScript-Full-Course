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


// const arr = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 'a', 'a', 'c', 'c', 'z', 'z'];
// const last = arr.pop();
// console.log(`Last word: ${last}`);

// const set = new Set(arr);
// console.log(set);


const arr = ['Alex', 'Ann', 'Artur', 'Kirill', 'Artur', 'Andrey', 'Vladimir'];

const set = new Set(arr);
// set.delete('Vladimir');
// set.has('Kirill');
// set.clear(arr);
// set.size;

// set.add('Vova')
//     .add('Nastya')
//     .add('Nastya')
//     .add('Nikita');

// console.log(set);

// for(let value of set) console.log(value);

// set.forEach((value, valueAgain, set)=> {
//     console.log(value, valueAgain);
// })

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

function unique(arr) {
    return Array.from(new Set(arr)); // uniq and Array from - создание их массиво подобного в массив!!!
}
console.log(unique('Vladimir'))
console.log(unique([1, 2, 2, 3, 3, 7, 7, 'Vova', 'Vova']));
console.log(unique(arr));
// console.log(unique({name: 'Vova', name: 'Kirill', name: 'Jenya'})); need Symbol.iterator