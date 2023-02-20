'use strict'
// const obj = {
//     name: 'Adam',
//     work: 'C++',
//     old: '10',
// };

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);

// writable - перезапись
// enumerable - нумерация
// configurable - удаление

//                                                  FUNKCTION CONSTRUCTOR   ES 5

// const num = new Number(3);
// console.log(num);

// function User(name, id) {
//   this.name = name
//   this.id = id
//   this.human = true
// }

// const ivan = new User('Ivan', 28)
// const ann = new User('Ann', 20)
// const jenya = new User('Jenya', 23) // object

// console.log(ivan)
// console.log(ann)
// console.log(jenya)

// function CarCreate(mark, color, price) {
//   this.mark = mark
//   this.color = color
//   this.price = price
//   this.auto = true
//   this.hello = function () {
//     console.log(`Hello ${this.mark}`)
//   }
//   this.bmwConfig = function () {
//     console.log(`Color BMW: ${this.color}, Price: ${this.price}`)
//   }
// }
// // наследование от потомка
// CarCreate.prototype.exit = function () {
//   console.log(`User ${this.mark} exit`)
// }

// const bmw = new CarCreate('Bmw', 'white', '$99000')
// const audi = new CarCreate('Audi', 'black', '$89000')
// const audiNew = new CarCreate('Audi', 'black', '$89000')

// audi.exit()

// // console.log(audi);
// // console.log(audiNew);

// bmw.hello()
// audi.hello()

// bmw.bmwConfig()

// const objAudi = Array.from(audi)
// console.log(objAudi)
// const unique = new Set(objAudi)
// console.log(unique)

let x = 0
let y = 1
x = y
console.log(y)
