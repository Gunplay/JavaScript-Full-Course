'use strict';
// console.log(document.body.childNodes);
// console.log(document.body.childElementNodes);
// let parent = document.querySelectorAll('.wrapper').forEach((item, i ) => {
//     console.log(item);
// });
// console.log(parent);

const boxOne = document.querySelector('.descr__one_box'),
        btnOne = document.querySelector('.btn_one');

// const width = boxOne.clientWidth;
// const height = boxOne.clientHeight;

// const width = boxOne.offsetWidth;
// const height = boxOne.offsetHeight;


const width = boxOne.scrollWidth;
const height = boxOne.scrollHeight;
console.log(width, height);   

btnOne.addEventListener('click', () => {
    // инлайн стили и они более приоритетные чем CSS
    boxOne.style.height = boxOne.scrollHeight + 'px';
    console.log(boxOne.scrollTop); // сколько пролистано текста
});
// DOMRect {x: 279, y: 58, width: 400, height: 350, top: 58, …}
// bottom
// : 
// 408
// height
// : 
// 350
// left
// : 
// 279
// right - в CSS от левого угла, в js от правого!!!!
// : 
// 679
// top
// : 
// 58
// width
// : 
// 400
// x
// : 
// 279
// y
// : 
// 58
console.log(boxOne.getBoundingClientRect());
console.log(boxOne.getBoundingClientRect().top);

// скрытые элементы и уже применены
const style = window.getComputedStyle(boxOne, ''); // и можно получить всевдо-стили
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400); // от текущней позиции

window.scrollTo(0, 400); // от самого начало


