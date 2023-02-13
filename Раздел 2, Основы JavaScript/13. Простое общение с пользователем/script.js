// alert('Hi');

// const include = confirm('Are you here?');
// console.log(include);

// const answer = +prompt('How old are you?', '20');
// console.log(answer + 10);

const answers = []
answers[0] = prompt('What is your name?', '')
answers[1] = prompt('How old are you?', '20')
answers[2] = prompt('What is your family?', '')

alert(answers)
console.log(answers)
document.write(answers)

// let one
// console.log(one)
// console.log(2 ** 53)

// console.log(2 * { color: 'blue' }) //NaN
// console.log(4 / 0) // infinity

// let a, b, rest
// ;[a, b, ...rest] = [1, 2, 3, 4, { Paul: true }]
// console.log(a) // 1
// console.log(b) // 2
// console.log(rest[2])

// ;({ a, b } = { a: 1, b: 2 })

// console.log(a) // 1
// console.log(b) // 2
// ;({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 })
// console.log(rest)

// const foo = ['one', 'two', 'three']
// const [...rest] = foo
// console.log(rest[2])

// let a = 1
// const b = 3

// a = b
// console.log(a)

// let a = 1
// let b = 3

// ;[a, b] = [b, a]
// console.log(a)

// function f() {
//   return [1, 2, 3]
// }

// let a, b, c
// ;[a, b, c] = f()
// console.log('A is ' + a + ' B is ' + b)

// const number = () => {
//   return [5, 10, 12, 14, 15]
// }

// let r, t
// ;[r, t, ...rest] = number()
// console.log(r, t, rest)

// Игнорирование некоторых значений
// Вы также можете проигнорировать не нужные значения:

// function f() {
//   return [1, 2, 3, 4]
// }

// var [a, , b] = f()
// console.log('A is ' + a + ' B is ' + b + ' B is ' + c)

// var url = 'https://developer.mozilla.org/en-US/Web/JavaScript'

// var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
// var [, protocol, fullhost, fullpath] = parsedURL

// console.log(fullpath) // выведет "https"

// Разбор объектов
// Простой пример
// let o = { p: 42, q: true }
// let { p, q } = o
// console.log(p)
// console.log(q)

// // Объявление новых переменных
// let { p: foo, q: bar } = o

// console.log(foo) // 42
// console.log(bar) // true

// let { p: one, q: two } = o
// console.log(one)
// console.log(two)

// two = false
// console.log(two)

// console.log(o)

// Вложенный объект и разбор массива
// let metadata = {
//   title: 'Scratchpad',
//   titleNum: [1, 2, 3, 4, 5],
//   translations: [
//     {
//       locale: 'de',
//       localization_tags: [],
//       last_edit: '2014-04-14T08:43:37',
//       url: '/de/docs/Tools/Scratchpad',
//       title: 'JavaScript-Umgebung',
//     },
//   ],
//   language: [
//     {
//       Deutsch: 'Germany',
//       Born: ' 1050 годах в конце V века',
//     },
//   ],
//   url: '/en-US/docs/Tools/Scratchpad',
// }

// var {
//   title: englishTitle,
//   titleNum: arrayNum,
//   translations: [{ title: localeTitle }],
//   language: [{ Deutsch: Germany, Born: year }],
// } = metadata

// console.log(englishTitle) // "Scratchpad"
// console.log(localeTitle) // "JavaScript-Umgebung"
// console.log(arrayNum)
// console.log(`${Germany}: ${year}`)

//Деструктурирование во время обхода
// const people = [
//   {
//     name: 'Mike Smith',
//     family: {
//       mother: 'Jane Smith',
//       father: 'Harry Smith',
//       sister: 'Samantha Smith',
//     },
//     age: 35,
//   },
//   {
//     name: 'Tom Jones',
//     family: {
//       mother: 'Norah Jones',
//       father: 'Richard Jones',
//       brother: 'Howard Jones',
//     },
//     age: 25,
//   },
// ]

// for (let {
//   family: { father: f },
// } of people) {
//   console.log(f)
// }
// for (let {
//   age: a,
//   family: { sister: s },
// } of people) {
//   console.log(`${a}, ${s}`)
// }
// const sortByName = people.map((name) => Object.keys(name))
// console.log(people.family.mother)
// console.log(mother)
// console.log(sortByName)
// console.log(sortFamilyBrother)
// for (var {
//   name: n,
//   family: { father: f },
// } of people) {
//   console.log('Name: ' + n + ', Father: ' + f)
// }

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// Difernet  beetween array and obj

// const arr = [1, 2, 3]
// arr[10] = '3456'
// console.log(arr)
// const arrObj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   4: 'd',
//   t: 'e',
//   Kasandra: true,
//   abc: {
//     def: {
//       film: 'Avatar',
//       actor: ['Imbragim', 'Yohan'],
//     },
//   },
// }
// console.log(arrObj.abc.def.actor[0])

// for (let {
//   abc: {
//     def: { actor: imb },
//   },
// } of people) {
//   console.log(`My name is ${imb[0]}`)
// }
// arrObj.u = '1234'
// let Renat
// arrObj['Renat'] = 'client'
// const phone = 'OnePlus'
// arrObj[phone] = '9 PRO'

// console.log(arrObj['Kasandra'])
// console.log(arrObj)
// const four = arr.push(4)
// console.log(arr)
// const [a, b, c] = arr
// console.log(arr[2])
// console.log(c)

// const obj = {
//   Ann: 500,
//   Alice: 800,
//   Adam: 1032,
// }

// let Kirill
// obj['Kirill'] = 1000
// console.log(obj)
