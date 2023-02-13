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

// •Какое будет выведено значение:
// let x = 5;
// alert( x++ ); // 5
// •	Чему равно такое выражение:
//console.log([] + false - null + true); //NaN
// console.log([] + false);// [] === '' = 'string'
// console.log([] + false - null); / NaN

// •	Что выведет этот код:
// let y = 1;
// let x = y = 2; // справа на лево!!!!!!!!!
// alert(x);  //2

// •	Чему равна сумма
// console.log([ ] + 1 + 3);
// console.log([ ] + 1 + 2);
// console.log([]);
// console.log(1 + 2 + [ ]);

// •	Что выведет этот код:
// console.log('12'[0]) //2

// •	Чему равно действия выполняются слева на право с полученым результатом
// console.log(2 && 1 && null && 0 && undefined); //null
// console.log(1 && null);
// console.log(null && 0);
// console.log(0 && undefined);

// •	Есть ли разница между выражениями?
// console.log(!!(1 && 2) === (1 && 2))
// console.log(typeof !!2) // boolean
//•	Что выведет этот код:
//alert( null || 2 && 3 || 4 ); // 3
// console.log(null || 2);

//•
//Правда ли что a == b ?

// const a = [1, 2, 3]
// a.push(4)
// console.log(a[2])
// const b = [1, 2, 3]
// console.log(a == b)
// console.log(a)
//•	Что выведет этот код:
// alert(+'Infinity')
console.log(typeof +'Infinity')

// •	Верно ли сравнение: ?

console.log('Ёжик' > 'яблоко') //false

// •	Чему равно
console.log(0 || '' || 2 || undefined || true || falsе)
// console.log(0 || "") ;
// console.log("" || 2);

// •	Чему равно действия выполняются слева на право с полученым результатом
//           2)    3    1) 3
// console.log(null || (2 && 3) || 4) // on true 3

console.log({ car: 'blue' } > ['sadad'])
// [] + 'str' = str
