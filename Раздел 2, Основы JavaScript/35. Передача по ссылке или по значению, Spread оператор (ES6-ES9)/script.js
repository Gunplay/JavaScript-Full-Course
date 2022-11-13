
'use strict';

// let a = 5;
// let b = a; // по значению!

// b = b + 5;
// console.log(a);
// console.log(b);


// const obj = { 
//     a: 5,
//     b: 1,
// };

// const copy = obj; // По ссылке!
// const copyNew = copy;
// copy.a = 10;
// copyNew.a = 15;

// console.log(obj);


// CREATE FUNC COPU OBJECT
function copy(mainObj) {
    let objCopy = {};

    
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}




const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 12;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20,
}
// соеденение оюъектов - копия объектов
// console.log(Object.assign(numbers, add));
// поверхнастная копия!
const clone = Object.assign({}, add);
// console.log(add);
// clone.d = 30;
// clone.c = 40;
// console.log(clone);


const oldArray =['a','b','c'];
// cсылка!
// const newArray = oldArray;
// реальная копия!
const newArray = oldArray.slice();
newArray[1] = 'Ukraine';
// console.log(newArray);
// console.log(oldArray);

// Оператов разворота! spread!

// const threeNumber = ['1', '2', '3'];
// const nextNumbers = ['4', '5', '6'];

// const allNumbers = [...threeNumber, ...nextNumbers, '7', '8', '9'];
// console.log(threeNumber);
// console.log(allNumbers);    

// const names = ['Kirill', 'Andrey', 'Kolya']
// const surname = ['Trin', 'hert', 'Hutrop'];
// const string = 'HelloWorld';
// const fullName = [...names, ...surname, ...string];
// console.log(fullName);


function log(a, b, c, d, p) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(p);
}

const num = [2, 5, 7, 9, 10];
log(...num);


const array = ['a', 'b'];

const newAarray = [...array];

console.log(newAarray);

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

console.log(newObj);