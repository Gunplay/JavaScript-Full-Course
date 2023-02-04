'use strict';

// try {
//     function mult(one, two) {
//         return one * two;
//     }
//     // console.log(mult(3, 4));
//     let uns = mult(3, 4);
//     console.log(uns);

//     const dev = () => {
//         setTimeout(function() {
//             console.log(uns / 2);
//         }, 2000);
//     }
//     dev();

//     console.log('hi');
//     console.log(b);
//     console.log(result);
// } catch (error){
//     console.log(error.name);
//     console.log(error.messege);
//     console.log(error.stack);
// }

// console.log('Normal');

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch (e) {
    console.log(e);
}

console.log('normal');