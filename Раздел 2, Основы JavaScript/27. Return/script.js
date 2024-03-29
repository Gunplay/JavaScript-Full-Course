'use strict'

// const usdCurr = 28;
// const eurCurr = 39;

// const discount = 0.9;

// function convert( amount, currency) {
//     return currency * amount;
// }

// function prommotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// prommotion(res);
// // convert(500, eurCurr);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//     if (i === 3) {
//       return
//     }
//   }
//   console.log('DONE')
// }
// test()

// function doNothing() {}
// console.log(doNothing() === undefined) //true

// Задание на работу с функциями
// В этих заданиях мы с вами потренируемся создавать небольшие полезные функции. Это основа всего в JS и дальше по курсу вы будете в этом убеждаться :)

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// Место для первой задачи
// function sayHello(person, text) {
//   return `Hi, ${person} ${text}!`
// }
// console.log(sayHello('Anton!', 'Hello my dear friend'))

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// Место для второй задачи
// function returnNeighboringNumbers(intNum) {
//   let arr = []

//   arr.push(intNum - 1)
//   arr.push(intNum)
//   arr.push(intNum + 1)
//   return arr
// }
// console.log(returnNeighboringNumbers(5))

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1]
// }

// console.log(returnNeighboringNumbers(5))

// Место для третьей задачи
// function getMathResult(num, n) {
//   let result

//   for (let i = num; i < n; i++) {
//     result = num * n
//   }
//   return result
// }

// console.log(getMathResult(3, 10))

function getMathResult(num, n) {
  if (typeof n !== 'number' || n <= 0) {
    return num
  }

  let str = ''

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      //6) 10 * 6
      str = str + `${num * i}, done`
    } else {
      str += `${num * i}---` // 1) 10 * 1    2) 10 * 2   3) 10 * 3    4) 10  * 4    5) 10 * 5
    }
  }

  return str
}
console.log(getMathResult(10, 6))
