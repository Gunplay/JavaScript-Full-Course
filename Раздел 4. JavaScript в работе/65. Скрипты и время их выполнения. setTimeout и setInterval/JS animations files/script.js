'use strict'
const btn = document.querySelector('.btn');
let timer;  
let i = 0;

function myAnimationOne() {
    const elem = document.querySelector('.box');
    console.log(elem);
    let  pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
            elem.style.top = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimationOne);

function myAnimationTwo() {
    const elemTwo = document.querySelector('.box_two');
    console.log(elemTwo);
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos++;
            elemTwo.style.right = pos + 'px';
            elemTwo.style.top = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimationTwo);

function welcome () {
    const elem = document.querySelector('.box');

    setTimeout(() => {
        elem.style.textAlign ='center',
       elem.style.color = 'white';
       
        elem.innerHTML = 'WELCOME';
    }, 3500);
   
}
welcome ();

function twoUkaraine () {
    const elem = document.querySelector('.box_two');

    setTimeout(() => {

        elem.style.textAlign ='center',

        elem.style.color = 'black';
        elem.innerHTML = 'to Ukraine';

    }, 3500);

}
twoUkaraine ();
// btn.addEventListener('click', () => {
//     // const timer = setTimeout(logger, 2500); // в переменной сохраняем время
//      timer = setInterval(logger, 1000);
// });



// const logger =  () => {
//     if ( i === 3 ) {
     
//         clearInterval(timer);
//         // console.log('function complited')
//     }
//     // console.log('text');
//     alert('Hello')
   
//     i++;
// }


// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 1500);
// console.log(unswerLogger);
// const timerId = setTimeout((text, text1)=> {
//     // console.log('Hello');
//     console.log(text, text1);
// }, 2000, 'Hello', 'Vova');

// const timerId = setTimeout(()=> {
//     // console.log('Hello');
//     console.log('Hello');
// }, 2000);

// const timer = setTimeout(logger, 2500); // в переменной сохраняем время
// console.log(timer);
// clearInterval(timer); // очищаем сразу после выполнения
// function logger () {
//     console.log('text');
// }