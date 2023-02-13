'use strict'

// let a = 5;
// let b = a; // по значению!

// b = b + 5;
// console.log(a);
// console.log(b);

const obj = {
  a: 5,
  b: 1,
}

// const copy = obj // По ссылке!

// copy.a = 10

// console.log(copy)
// console.log(obj)

// CREATE FUNC COPU OBJECT
function copy(mainObj) {
  let objCopy = {}

  for (let key in mainObj) {
    objCopy[key] = mainObj[key]
  }
  return objCopy
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const newNumbers = copy(numbers)
newNumbers.a = 10
newNumbers.c.x = 12

// console.log(newNumbers)
// console.log(numbers)

const add = {
  d: 17,
  e: 20,
}
// соеденение оюъектов - копия объектов
// console.log(Object.assign(numbers, add));
// поверхнастная копия!
const clone = Object.assign({}, add)
// console.log(add);
// clone.d = 30;
// clone.c = 40;
// console.log(clone);

// const oldArray = ['a', 'b', 'c']
// // cсылка!
// // const newArray = oldArray;
// // реальная копия!

// const newArray = oldArray.slice()
// newArray[1] = 'Ukraine'
// newArray[3] = 'Winner'
// console.log(newArray)
// console.log(oldArray)

// Оператов разворота! spread!

// const threeNumber = ['1', '2', '3'];
// const nextNumbers = ['4', '5', '6'];

// const allNumbers = [...threeNumber, ...nextNumbers, '7', '8', '9'];
// console.log(threeNumber);
// console.log(allNumbers);

// const names = ['Kirill', 'Andrey', 'Kolya']
// const surname = ['Trin', 'hert', 'Hutrop'];
// const string = 'HelloWorld';
// const fullName = [...names, ...surname, ...string];
// console.log(fullName);

// function log(a, b, c, d, p) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(p)
// }

// const num = [2, 5, 7, 9, 10, 11]
// log(...num)

const array = ['a', 'b']

const newAarray = [array]

// console.log(newAarray)

const q = {
  one: 1,
  two: 2,
}

// const newObj = { ...q }
// newObj.three = 'Ukrain'
// console.log(newObj)
// console.log(q)

// const arrOne = ['Pixel', 'OnePlus', 'Iphone', 'Samsung']
// const arrTwo = [1, 2, 3, 4]
// const arrThree = [{ name: 'Nastya' }, { name: 'Kirill' }, { name: 'Ann' }]

// const mergeArr = (a, b, c) => {
//   const stream = [...a, ...b, ...c, 'Phone']
//   const newStream = stream.slice(0, 4).concat('Redmi').sort().join(', ')

//   console.log(stream)
//   console.log(newStream)
// }
// mergeArr(arrOne, arrTwo, arrThree)

const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  fullName: 'Yankers',
  skills: {
    languages: ['ukr', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
      typeScript: '10%',
      redux: '0%',
    },
    exp: '1 month',
  },
  // showAgeAndLangs: function (plan) {
  //   const { age } = plan
  //   const { languages } = plan.skills
  //   let str = `Мне ${age} и я владею языками: `

  //   languages.forEach(function (lang) {
  //     str += `${lang.toUpperCase()} `
  //   })

  //   return str
  // },
  showDetails: function (plan) {
    const { fullName } = plan
    const { languages } = plan.skills
    const { programmingLangs } = plan.skills

    let strNew = `My name is ${fullName} я знаю язык на: `
    languages.forEach(
      (language) => (strNew = strNew + `${language.toUpperCase()}`)
    )
    let strTypeScript = ''
    for (let key in programmingLangs) {
      if (key === 'typeScript' || key === 'redux') {
        strTypeScript += `launguague: ${key},  ${programmingLangs[key]}`
      }
    }
    return [strTypeScript, strNew]
  },
}
console.log(personalPlanPeter.showDetails(personalPlanPeter))

function showExperience(plan) {
  const { exp } = plan.skills
  return exp
}

console.log(showExperience(personalPlanPeter))

// function showProgrammingLangs(plan) {
//   let str = ''
//   const { programmingLangs } = plan.skills
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//   }

//   return str
// }

// console.log(showProgrammingLangs(personalPlanPeter))
