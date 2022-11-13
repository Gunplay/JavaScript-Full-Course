'use strict'

// console.log(Boolean(''));

// console.log(undefined && 4);
// console.log('' || 'Java Script');
// console.log(null || undefined);

// let c = 20;

// console.log(c)|| console.log('done');

// console.log( 4 && 3 && false && true); // first false
// console.log( 4 && 3 && true && 10);
// console.log(false || '' || true || 0);

// console.log(true && false || 5);

// console.log(true || false && 5);


// ОПЕРАТОР ...
const button = {
    width: 200,
    height: 100,
}

const redButton = {
    ...button,
    color: 'red',
}
// console.log(button);
// console.table(redButton);

const infoStyle = {
    background: 'image',
    fontSize: 33,
}

const objFull = {
    ...redButton,
    ...infoStyle,
};

// console.table(objFull);
// console.log(button);


const vova = (a, b) => {
    return `${a} ${b}`;
}

console.log(vova('Rozhko', 'Vladimir'));


const sum = (a, b) => a + b; // не явный возврат функцци, т е без return!
console.log(sum(3, 2));

const multByFactor = (value, multiplier = 2) => {
    return value * multiplier;
}

console.log(multByFactor(10));
console.log(multByFactor(3, 4));