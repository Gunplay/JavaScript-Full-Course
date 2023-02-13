'use strict'

const box = document.getElementById('box')
// console.log(box);

const btns = document.getElementsByTagName('button')
console.log(btns[3])
const btnNumberTwo = document.getElementsByTagName('button')[1]
// console.log(btnNumberTwo);

const circles = document.getElementsByClassName('circle')
// console.log(circles);

const hearts = document.querySelectorAll('.heart') // uset to . selector
// console.log(hearts[1])

hearts.forEach((item) => {
  console.log(item)
})

const oneHeart = document.querySelector('.heart')
const divOne = document.querySelector('div')
// console.log(oneHeart);
// console.log(divOne);
