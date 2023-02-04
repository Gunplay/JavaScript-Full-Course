'use strict'

// console.log(1)

// // async func and server requests
// setTimeout(() => {
//   console.log('timeout')
// }, 4000)

// setTimeout(() => {
//   console.log('timeout 4000')
// }, 4000)

// console.log(2)

// let k = 0
// function count() {
//   for (let i = 0; i < 1e9; i++) {
//     k++
//   }
//   console.log(k)
//   alert('done')
// }
// count()

setTimeout(() => {
  console.log(1)
}, 0) // default === 4ms for browser compatibility

console.log(2) // sync code always works first
