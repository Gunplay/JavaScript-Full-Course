
'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    radius: 300,
    makeTest: function() {
        console.log('Tect');
    }
};


const car = {
    audi: 'RS8',
    mersedes: 'CLE',
    priceAudi: {
        color: 'black',
        price: '$55 000'
    },
    priceMersedes: {
        color: 'white',
        price: '$79 000',
    },
}
// options.makeTest();

// Деструктуризация
// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);


// const {color, price} = car.priceAudi;
// console.log(`Adudi RS 8 color: ${color}, price: ${price}`);
// const {colorM, priceM} = car.priceMersedes;
// console.log(`price Mersedes color: ${colorM}, price: ${priceM}`);
// console.log(Object.keys(options).length); // даёт массив

// console.log(options.name);
// console.log(options.colors['border']);
// console.log(options['colors']['border']);
// // delete options.name;
// console.log(options);

// let counter = 0;
// for ( let key in options) {

//     // перебираем вложенный объект colors
//     if ( typeof(options[key] === 'object')) {
//         for( let i in options[key]) {
//             console.log(`Свойство: ${i} и значение ${options[key][i]}`);
//             // counter++;
//         }
//     }   else {
//         console.log(`Свойство: ${key} и значение ${options[key]}`);
//     //     counter++;
//     // 
// }
//     counter++;
// }   
// console.log(counter);

const name = 'Kirill';
const work = "Java Script";
const number = +380342342312;

const infoKirill = {
    name,
    work,
    number: number,
}

console.log(infoKirill);

let telephoneKirill = function({number, work, name}) {
    // console.log(`Number Kirill: ${number}`)
    return [number, work] , `name: ${name}`
}
console.log(telephoneKirill(infoKirill));
