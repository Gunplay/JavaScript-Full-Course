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


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, 
        {name: 'John', age: 24},
    ],
    averageLunchPrice: '20$',
    openNow: true,
};


function isOpen(prop) {
    // let answer = '';
    // prop.openNow ? answer = 'Открыто' : answer = 'Закрыто';

    const {openNow} = restorantData;
    if (openNow === true) {
        return 'Открыто!'
    } else {
        return 'Закрыто!'
    }
    // return answer;
}

console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     console.log(fDish);
//     console.log(sDish);
//     console.log(average);
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
//         // console.log(+fDish.price.slice(0, -1));
//         console.log(+sDish.price.slice(0, -1));
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);
//     console.log(copy);
//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }
// console.log(transferWaitors(restorantData));


