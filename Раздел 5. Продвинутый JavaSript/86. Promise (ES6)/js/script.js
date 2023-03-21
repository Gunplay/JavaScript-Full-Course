'use strict'

// function myPC(proc, callback) {
//     console.log(`${proc}`);
//     callback();
// };

// myPC('Ryzen 5 4600H', function() {

//     const pricePC = {
//         price: 43000,
//         name: 'LEGION',
//     }
//     setTimeout(() => {
//         console.log('RTX 2060');
//     }, 2000);
//     setTimeout(() => {
//         console.log('lenovo Legion');
//         setTimeout(() =>{
//             console.log(pricePC);
//         }, 2000);
//     }, 4000);

// });

// function calc() {
//     console.log(3 + 4);
//     done();
// }

// function done() {
//     setTimeout(() => {
//         console.log('Done!');
//     }, 2000);
//     };
// calc();

//                                              Promise (ES6)

// console.log('Data request...') // запрос

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Data preparation...') // Подготовка

//     const product = {
//       name: 'TV',
//       price: 2000,
//       done: 'Your order has been completed',
//     }

//     resolve(product)
//     //    reject();
//   }, 2000)
// })

// // then - For resolve!
// req
//   .then((product) => {
//     // const req2 = new Promise((resolve, rejecte) =>

//     return new Promise((resolve, rejecte) => {
//       setTimeout(() => {
//         product.status = 'order'
//         resolve(product)
//       }, 2000)
//     })
//   })
//   .then((data) => {
//     data.modify = true
//     return data
//     console.log(data)
//     // req2.then(data => {
//     //     console.log(data);
//     // });
//   })
//   .then((data) => {
//     data.phone = 'OnePlus 11 PRO'
//     return data
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(() => {
//     // For rejecte
//     console.error('An error has occurred')
//   })
//   .finally(() => {
//     // действия которые должны происзодить всегда // например очустить Form
//     console.log('Finally')
//   })

// const test = (time) => {
//     console.log(test);
//     return new Promise((resolve, rejecte) =>{
//         setTimeout(()=> {
//             resolve();
//         }, time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
// // Promise.all - ждёт все Promise
// Promise.all([test(1000), test(2000), test[5000]]).then(() => {
//     console.log('All');
// })
//Promise.race - работает когда отработал первый  Promise
// Promise.race([test(1000), test(2000), test[5000]]).then(() => {
//     console.log('All');
// })

// function time(time) {
//     setTimeout(() => {
//        console.log('Hi all 3000 ms');
//     }, time);
// };

// time(3000);

//========================================================================

// console.log('Loading data...')

// const res = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparation data...')

//     const obj = {
//       name: 'Karl',
//       old: '23',
//     }

//     resolve(obj)
//   }, 2000)
// })
// //          resolve
// res
//   .then((obj) => {
//     // instead of const res2 =
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         obj.house = 'House with 3 stage'
//         resolve(obj)
//         // reject()
//       }, 2000)
//     })
//   })
//   .then((data) => {
//     data.car = 'TOYOTA'
//     return data
//   })
//   .then((data) => {
//     return data
//     console.log(data)
//   })
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.phone = 'Samsung'
//         resolve(data)
//       }, 2000)
//     })
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(() => {
//     console.error('Error')
//   })
//   .finally(() => {
//     console.log('finally')
//   })

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}
// test(1000).then(() => console.log('1000 ms'))
// test(3000).then(() => console.log('3000 ms'))

// Promise.all([test(1000), test(3000)]).then(() => {
//   console.log('ALL')
// })

Promise.race([test(1000), test(3000)]).then(() => {
  console.log('ALL')
})
