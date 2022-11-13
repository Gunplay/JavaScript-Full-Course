"use strict"

if (1 == 3) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;

// if ( num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Very much');
// } else {
//     console.log('OK!')
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');


const num = 50;

// switch - строгое сравнение!!!!!!!
switch(num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот враз!');
        break;                
}
