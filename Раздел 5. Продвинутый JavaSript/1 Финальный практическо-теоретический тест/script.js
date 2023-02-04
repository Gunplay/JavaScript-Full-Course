// Вопрос 1:
// Что будет содержаться в переменной result после завершения кода?

function foo(a, b) {
  const [first, second] = a
  const { eng, ru } = b

  return `${second}, ${ru}`
}

const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' })
// console.log(result)

// Вопрос 2:
// Что будет выведено в консоль в результате работы функции?

function getSum(a, b) {
  function sum() {
    // console.log(this.a);
    return a + b
  }

  //   console.log(sum())
}

getSum(4, 5)

// Вопрос 3:
// Какое значение будет выведено в консоль при выполнении этого кода?

// let c = 4
// function addX(x) {
//   return function (n) {
//     return n + x
//   }
// }

// const addThree = addX(3)

// let d = addThree(c)
// let res = addThree(c)

// console.log(res)

// Вопрос 4:
// Event loop - это...

// Вопрос 5:
// Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, length, ...additional) {
  //   console.log(height, width, length, ...additional)
}
setOptions(400, 500, 700, 'red', 'top', 'green')

// Вопрос 6:
// Какие из методов массивов возвращают новый массив в результате своей работы?

// P.S. Это важно знать перед частью с react'ом, да и в работе тоже. Попробуйте вспомнить, мы все их обсуждали и использовали.
// filter, map, slice

// Вопрос 7:
// Какая основная проблема этого кода?

async function makeRequest() {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(json => console.log(json))
    .then((json) => json.parse())
    .then((json) => console.log(json))
}
// makeRequest()

// Вопрос 8:
// Какой формат экспорта/импорта ES6 модулей в JS записан синтаксически правильно?

// Вопрос 9:
// Какой итоговый результат мы получим в консоли, если запустить этот код?

// (Постарайтесь решить без запуска, проанализировав код. Именно так дают его на собеседовании)

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay))

const a = () => promisify('a', 100) // 1
const b = () => promisify('b', 5000) // 3
const c = () => promisify('c', 3000) // 2

async function one() {
  const promises = [a(), b(), c()]
  const [outpu1, outpu2, outpu3] = await Promise.all(promises)
  return `one is done: ${outpu1} ${outpu2} ${outpu3}`
}

async function two() {
  const promises = [a(), b(), c()]
  const outpu1 = await Promise.race(promises)
  return `two is done: ${outpu1}`
}

async function three() {
  const outpu1 = await a()
  const outpu2 = await b()
  const outpu3 = await c()
  return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

// one().then(console.log);
// two().then(console.log);
// three().then(console.log);

// Вопрос 10:
// Что будет результатом выполнения этого кода на странице?

// const msg = 'Заявка №231'

// const div = document.createElement('div')
// div.style.background = 'red'
// div.setAttribute('data-msg', true)
// div.textContent(msg)

// document.body.append(div)

// Вопрос 11:
// Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?
// textContent

// Вопрос 12:
// Что будет выведено в консоль?

// if (0) {
//     console.log('first')
// } else if (NaN) {
//     console.log('second');
// } else if (' ') {
//     console.log('third');
// } else if (null) {
//     console.log('fourth');
// }

// console.log(Boolean(0))

// Вопрос 13:
// Как правильно задать наследование одного класса от другого?
// class Slider extends Element

// 4/30
// 40:38
// Вопрос 14:
// a = [1, 2, 3]
// b = [1, 2, 3]

// Правда ли что a == b ?

// Вопрос 15:
// Какой командой можно удалить элемент со страницы?
// div.remove()

// Вопрос 16:
// Какой результат работы функции combineUrls в данном случае?

// console.log(combineUrls('https', 'mysite.com'))
const combineUrls = (protocol, domain) => {
  return `${protocol}://${domain}`
}

// function combineUrls(protocol, domain) {
//   return `${protocol}://${domain}`
// }

// /30
// 35:57
// Вопрос 17:
//Какой из команд можно создать элемент на странице?

// Вопрос 18:
// Как отменить стандартное поведение браузера при работе со ссылками, формами и тп?

// Вопрос 19:
// Что выведет этот код:

// let y = 1
// let x = (y = 2)
// console.log(x)

// Вопрос 20:
// Микрозадачи в событийном цикле - это...
// .then/catch/finally

// Вопрос 21:
// Что будет содержаться в переменной unswer в результате работы кода?

// const arr = [
//   {
//     name: 'Alex',
//     salary: 500,
//   },
//   {
//     name: 'Ann',
//     salary: 1500,
//   },
//   {
//     name: 'John',
//     salary: 2500,
//   },
// ]

// const unswer = arr
//   .map((item) => Object.entries(item)[1][1])
//   .reduce((sum, item) => sum + item)
// // .join(', ')
// console.log(unswer) // 4500

// Вопрос 22:
// Какого метода не существует у свойства classList? includes()

//Вопрос 23:
// Сколько аргументов может быть у функции?
//Имя аргумента, передаваемого в функцию. У функции может быть не более 255

// Вопрос 24
//Объект Event описывает событие, произошедшее на странице. Одной из причин возникновения событий являются действия пользователя, такие как клики мышкой MouseEvent или ввод с клавиатуры KeyboardEvent . Существует множество различных событий с разным набором информации.

// Вопрос 25:
// Что выведет в консоль данный код?

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo')
//   }, 1000)
//   setTimeout(() => {
//     reject('bar')
//   }, 900)
// })

// promise
//   .then((value) => {
//     console.log(value)
//   })
//   .catch((e) => console.log(e))
// bar

// Вопрос 26:
// Как называется прием из кода ниже?

// const user = {
//   name: 'Alex',
//   age: 25,
// }
// const { name, age } = user
// console.log(user.name) // Destructing

// Вопрос 27:
// Какой из вариантов получения этого элемента со страницы будет правильным?

{
  /* <div id="hi">Hello</div> */
}

// Вопрос 28:
// Какой результат даст этот код?

// console.log(0 || 1) // 1
// console.log(0 && 1) // 0
// console.log(0 || NaN || false || null) //null

// Вопрос 29:
// У вас есть функция, которая скрывает номер телефона и имя пользователя до определенного действия. Эта функция выглядит вот так:

// const msg = 'My number +12345678, name: Oleg'

// function transformMsg(str) {
//   // Пропущенная часть

//   return b
// }

// transformMsg(msg)
// Результатом вызова этой функции сейчас будет:

// My number *****, hidden
// Какой код подходит на место пропущенной части функции?

// Вопрос 30:
// Код ниже работает без ошибки. Но опытный разработчик считает его плохим. В чем причина?

const price = 500
const money = 400

switch (true) {
  case price > money:
    console.log('Мне не хватает денег')
  case price < money:
    console.log('Мне хватает денег!')
}
