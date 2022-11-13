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
// console.log(unique('Vladimir'))
// console.log(unique([1, 2, 2, 3, 3, 7, 7, 'Vova', 'Vova']));
// console.log(unique(arr));
// console.log(unique({name: 'Vova', name: 'Kirill', name: 'Jenya'})); need Symbol.iterator

// const bigint = 2323142232131312312312n;

// console.log(typeof(bigint));

// const sameBigint = BigInt(321311223323232324343434242432332);

// console.log(sameBigint);

// // console.log(5n + 1);

// // console.log(Math.round(5n));

// console.log(Math.round(4.5));

// console.log(1n +  2n);

// console.log(5n / 2n); // возвращает без дробной части

// console.log(2n > 1);

// console.log(2n > 5);

// console.log(2n === 2);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // конвертация
console.log(Number(bigint) + number);
console.log(+bigint + number);
// console.log(toString(123));