'use strict';

const box = document.getElementById('box');
//console.log(box);

const btns = document.getElementsByTagName('button');
const btnNumberTwo = document.getElementsByTagName('button')[1];
//console.log(btnNumberTwo);
//console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
//console.log(circles);

const hearts = wrapper.document.querySelectorAll('.heart'); // uset to . selector
//console.log(hearts);

const wrapper = document.querySelector('.wrapper');
hearts.forEach(item => {
    // console.log(item);
});

const oneHeart = wrapper.document.querySelector('.heart');
const divOne = document.querySelector('div');
// console.log(oneHeart);
// console.log(divOne);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: yellow; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     if (hearts[i] === hearts[2] || hearts[i] === hearts[3]) {
//     hearts[i].style.backgroundColor = 'blue';
//     hearts[i].style.borderRadius = '50%';
//     }
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
console.log(div);

// const text = document.createElementNode('Тут я был');

// создание классов спомощью classList

div.classList.add('black');
// div.classList.add('red');
// newDiv.classList.add('orange');

// document.body.append(div); // в самый конец Body
// document.body.prepend(newDiv); // в начало

wrapper.append(div);
// div.innerHTML = 'Hello World';
div.innerHTML = "<h1>Hello World</h1>"; // текст и структура HTML!!
// div.textContent = "Hello World"; // только текстом!
// СТАРЫЙ МЕТОД
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[3]);

// hearts[0].before(div);
// hearts[2].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// заменяем один элемент другим!

// hearts[0].replaceWith(circles[0]);

// Старый метод!!!
// wrapper.replaceChild(circles[0], hearts[0]);

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');