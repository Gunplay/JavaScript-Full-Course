'use strict'

const box = document.querySelector('.box');

let newHeight = 0;
let newWidth =  400;

function changePArams (elem, h, w) {
    elem.style.height  = `${h ?? 200}px`;
    elem.style.width = `${w || 200}px`;
    elem.innerHTML = (h || 200) * w ?? 200;
}
changePArams(box, newHeight, newWidth);

// let userName = 0;
// // для ?? ноль это true
// console.log(userName ?? 'User');
// let userNameNew = NaN;
// console.log(userNameNew ?? 'User');
// // ?? работает только Null and undefaind
// // если будет Null or undefaind - то будет true
// console.log(null ?? 'User');
// console.log(userName ?? 'User');


let userName = null;
let userKey = NaN;

// console.log(userName ?? userKey ?? 'User');
console.log(userName && userKey ?? 'User');





// const circle = document.querySelector('.circle');
// console.log(circle);
// // const circleHeight = 200;
// // const circleWeight = 200;
// // circle.style.color = 'orange';
// // circle.style.borderRadius = '50%';

// // circle.style.height = '200px';
// // circle.style.width = '200px';
// // circle.style.backgroundColor = 'orange';
// // circle.style.borderRadius = '50%';

// const circleHeight = 200;
// const circleWidth = 200;
// const borderRad = "20%";
// // circle.style.backgroundColor = 'orange';


// function createCircle (elem, h, w, border) {
//     elem.style.height = `${h}px`;
//     elem.style.width = `${w}px`;
//     elem.style.backgroundColor = 'red';
//     elem.style.borderRadius = `${border}`;
     
// }
// createCircle(circle, circleHeight, circleWidth, borderRad);