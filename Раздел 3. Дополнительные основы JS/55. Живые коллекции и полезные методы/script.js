'use strict';

const boxesQuery = document.querySelectorAll('.box'); // статическая коллекция
const boxesGet = document.getElementsByClassName('box'); // динамическая но без метода массивов!!!!

boxesQuery.forEach((box) => {
    if (box.matches('.this')) console.log(box);
})
console.log(boxesQuery[2].closest('.wrapper')); // closest ищем родителя!
// boxesQuery[0].remove();
// boxesGet[0].remove();

// // живая коллекция
// for ( let i = 0; i <= 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     // document.body.append(div);
//     boxesGet[boxesGet.length] = div; // c живой коллекцией изменения не сдлаешь, только если применить Array.from(boxesGet)
// }
// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));// Преобразование из динамической в статической, для дальнейшей работы!