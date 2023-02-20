'use strict'

// const wrapper = document.querySelector('.wrapper')
// const boxesQuery = wrapper.querySelectorAll('.box') // статическая коллекция
// const boxesGet = wrapper.getElementsByClassName('box') // динамическая но без метода массивов!!!!

// const section = document.querySelectorAll('.section')

// const sectionArray = section.querySelectorAll('')

// console.log(one)
// boxesQuery[0].remove()
// boxesGet[0].remove()

// console.log(Array.from(boxesGet))
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.body.parentElement)

// boxesQuery.forEach((box) => {
//   // box.contains.classList()
//   if (box.matches('.thrid')) console.log(box)
// })
// console.log(wrapper)
// const cube = document.createElement('div')
// cube.classList.add('box')
// cube.style.backgroundColor = 'red'
// wrapper.insertBefore(cube, boxesQuery[3])
// const triangleUp = document.createElement('div')
// triangleUp.classList.add('triangle-up')
// wrapper.insertBefore(triangleUp, boxesQuery[1])
// console.log(boxesQuery[2].closest('.wrapper')) // closest ищем у родителя!

// // живая коллекция
// for (let i = 0; i <= 5; i++) {
//   const div = document.createElement('div')
//   div.classList.add('box')
//   div.style.backgroundColor = 'orange'
//   document.body.append(div)
//   //   boxesGet[boxesGet.length] = div // c живой коллекцией изменения не сдлаешь, только если применить Array.from(boxesGet)
// }
// console.log(boxesQuery)
// console.log(boxesGet)
// console.log(Array.from(boxesGet))
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));// Преобразование из динамической в статической, для дальнейшей работы!

// 1 1 3 5 9

const increase = (a, b, n) => {
  const arr = [a, b]
  for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i + 1]) + 1
  }
  // console.log(arr)
}
increase(1, 1, 5)

// function factotrial(n) {
//   let num = 1
//   for (let i = 0; i < n; i++) {
//     num += i * num
//   }
//   // console.log(num)
// }
// factotrial(3)

function factotrial(n) {
  return n ? n * factotrial(n - 1) : 1
  // console.log(num)
}
console.log(factotrial(5))

const degree = function (x, n) {
  if (n === 1) {
    return x
  } else {
    return x * degree(x, n - 1)
  }
}
// console.log(degree(2, 3))
