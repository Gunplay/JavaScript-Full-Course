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

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}
// log('basic', 'rest', 'operation', 'usage');

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; // старый вариант
    console.log(number * basis);
}
calcOrDouble(3); 