// const value = (a) => Math.random() + a
// console.log(value(5))
// console.log(value(5))
// console.log(value(5))

// const value = (a, b) => b + a
// console.log(value(5, 4))
// console.log(value(5, 4))
// console.log(value(5, 4))

let num = 10
const value = (a) => (num += a)

const res = value(5, num)
num = res
console.log(value(5, num))
console.log(value(5, num))
console.log(value(5, num))
