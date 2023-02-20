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

// function User (name, id) {
//     this.name= name;
//     this.id = id;
//     this.human = true;
// }

// const ivan = new User('Ivan', 28);
// const ann = new User('Ann', 20);

// console.log(ivan);
// console.log(ann);

// function CarCreate(mark, color, price) {
//     this.mark = mark;
//     this.color = color;
//     this.price = price;
//     this.auto = true;
//     this.hello = function() {
//         console.log(`Hello ${this.mark}`);
//     };
//     this.bmwConfig = function() {
//         console.log(`Color BMW: ${this.color}, Price: ${this.price}`);
//     }
// }
// // наследование от потомка
// CarCreate.prototype.exit = function() {
//     console.log(`User ${this.mark} exit`);
// }

// const bmw = new CarCreate('Bmw', 'white', "$99000");
// const audi = new CarCreate('Audi', 'black', "$89000");
// const audiNew = new CarCreate('Audi', 'black', "$89000");

// audi.exit();

// // console.log(audi);
// // console.log(audiNew);

// bmw.hello();
// audi.hello();

// bmw.bmwConfig();

// const objAudi = Array.from(audi);
// console.log(objAudi);
// const unique = new Set(objAudi);
// console.log(unique);

//                                      THIS

// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this); //undefined
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 29,
//     b: 15,
//     sum: function() {
//        function shout() {
//         console.log(this); // потеряла свой контекст вызова!
//        }
//        shout();
//     }
// };

// obj.sum();

// debugger
// function User (name, id) { debugger
//     this.name = name; debugger
//     this.id = id; debugger
//     this.human = true; debugger
// } debugger
// debugger
// const ivan = new User('Ivan', 28); debugger
// console.log(ivan); debugger

// function sayName(surname, surnameTwo) {
//     console.log(this);
//     console.log(this.name + ' ' + surname + ' ' +  surnameTwo);

// }

// const user = {
//     name: 'John',
// }

// sayName.call(user, 'Smith', 'Intain');
// sayName.apply(user, ['Smith', 'Intain']);
// debugger
// function count(num) { debugger
//     return this * num; debugger
// }debugger
// debugger
// const double = count.bind(2); debugger
// console.log(double(3)); debugger
// console.log(double(13));
// 1) Обычеая функция вызывает: this = window, но если use strict - indefined!
// 2) Контекст у метотод объекта - сам объект!
// 3) this в конструкторах и классах  - это новый экземпляр объекта!
// 4) Ручная привязка this: call, apply, bind!

// const btn = document.querySelector('button')

// когда через function declaration объект события сам элемент!
// через functional expression - нету своего this, и это будет window!
// btn.addEventListener('click', (event) =>{
//     // console.log(this);
//     // this.style.backgroundColor = 'red';
//     event.target.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this.num); // у  functional expression нету своего this, оно ищет у свого родителя!
//         };
//         say();
//     }
// }

// obj.sayNumber();

// const double = (a, b) => a * 2 / b;
// const one = c => c * 1;

// console.log(double(4, 8));
// console.log(one(9));

// function showThis(a, b) {
//   console.log(this)
//   function sum() {
//     console.log(this)
//     // return a + b
//     return this.a + this.b
//   }
//   console.log(sum())
// }
// showThis(4, 5)

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     // console.log(this)
//     function shout() {
//         console.log(this)
//     }
//     shout()
// }

// obj.sum()

// function User(name, id) {
//   this.name = name
//   this.id = id
//   this.human = true
//   this.hello = function () {
//     console.log('Hello!' + this.name)
//   }
//   this.hello()
// }

// let ivan = new User('Ivan', 23)

// console.log(ivan)

function sayName(surname) {
  console.log(this)
  console.log(this.name + ' ' + surname)
}

const user = {
  name: 'John',
}

sayName.call(user, 'TwT')
sayName.apply(user, ['TwT'])

function count(num) {
  return this * num
}

const double = count.bind(2) //  =>  return this * num
console.log(double(3))
console.log(double(13))

function mult(number) {
  return this * number
}

const multOn = mult.bind(2)
console.log(multOn(10))
// 1) Simply func: this = window, but if use 'use strict' - undefined
// 2) Contex у методов объекта - сам объект
// 3) this в конструкторах и классах это новый экземпляр объекта
// 4) Ручаня привязка this: call, apply, bind

// const btn = document.querySelector('button')

// btn.addEventListener('click', (e) => {
//   // undefined
//   this.style.backgroundColor = 'red'
//   //   e.target.style.backgroundColor = 'red'
//   console.log(this) // cам жлеменет на котором произошло событие - button
// })

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this) // Arrow dont have himself this
//     }
//     say()
//   },
// }

// obj.sayNumber()

// const double = (a, b) => a * 2 * b
// console.log(double(2, 3))
