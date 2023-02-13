let box = document.querySelector('.box')
wrapper = document.querySelector('.wrapper')
console.log(wrapper)
hearts = wrapper.querySelectorAll('.heart')
console.log(hearts)
circles = document.querySelectorAll('.circle')

const div = document.createElement('div')
div.classList.add('black')
// wrapper.removeChild(hearts[2])
// wrapper.removeChild(circles[0], hearts[1])
div.textContent = 'Hello World'
// console.log(div)
wrapper.insertBefore(div, hearts[1])

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>')
