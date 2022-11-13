'use strict';

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block)

// console.log(block.textConetnt);

// if (block) {
//     console.log(block.textContent);
// } else {
//     console.log('Nothin!');
// }

// console.log(block?.textContent);

// block?.textContent = '123';
// box?.textContent = '456';

// console.log(1 + 2);

// let one;
// console.log(one);
// console.log(two);

const userData = {
    name: 'Ivan',
    age: null,
   say: function () {
        console.log("Hello");
    },
    // skills: {
    //     js: {
    //         one: '123',
    //     }
    // }
};

// userData.say();
// console.log(userData.hey?.());

if ( userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
} else {
    console.log('Nothin!')
}

// console.log(userData?.skills?.js)