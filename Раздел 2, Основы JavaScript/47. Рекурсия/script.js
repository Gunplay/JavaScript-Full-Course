// function pow(x, n) {
//     return x ** n;
// }

// function pow(x, n) {
//      let result = 1;
//      console.log(typeof(result));
//      for ( let i = 0; i < n; i++) {
//         result = result * x; 
//      }
//      return result;
    
//     }     
    
// console.log(pow(2, 3));
// function pow(x, n) { debugger // 3) ШАГ - ОБЩЕЕ КОЛИЧЕТСВО ВЫЗОВОВ (ГЛУБИНА 10.000 MAX) - n
// 1) n ВСЕГДА ПРИХОДИТ К БАЗЕ! к ОДНОМУ!
//    if ( n == 1) { debugger
//         return x; 
//    } else { debugger
   
//     return x * pow(x, n - 1); // 2) ШАГ РЕКУРСИИ!!!
//    } 
 
// }      debugger
// // console.log(pow(2, 1));
// // console.log(pow(2, 2)); // 4
// console.log(pow(2, 3));
// console.log(pow(3, 2));

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100,
//      }, {
//         name: 'Ivan',
//         progress: 60,
//      }],

//      html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20,
//         }, {
//             name: 'Ann',
//             progress: 18,
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10,
//         }],
//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100,
//             }]
//         }
//      }
// };

// function getTotalProgerssByRecursion(data) {
//     if (Array.isArray(data)) {

//         // console.log(data);
//         let total = 0;
      
//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
           
           
//         }
//         // console.log([total, data.length]);
//         return [total, data.length];
        
//     } else {
//         let total = [0, 0];
       
//         for ( let subData of Object.values(data)) {
//             // console.log(subData);
//             const subDataArr = getTotalProgerssByRecursion(subData);
//            console.log(subDataArr);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
        
//         return total;
//     }
// }
// const result = getTotalProgerssByRecursion(students);
// console.log(result[0] / result[1]);



// function getTotalProgerssByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students = students + course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total = total + course[i].progress;
//             }
//         } else {
//             for ( let subCourse of Object.values(course)) {
//                 students = students + subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total = total + subCourse[i].progress;
//             }
//         }
//     }
//     }
//     return `[Total percentage: ${total / students}]`;
// }


// console.log(getTotalProgerssByIteration(students));


// function factorial(n) { 
//   if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//       return "Ошибка, проверьте данные";
//   }

//   if (n >= 1) {
//       return n * factorial(n - 1);
//   } else {
//       return 1;
//   }

//   // Более короткий вариант, который вы можете встретить
//   // Но не учитывает отрицательные значения
//   return n ? n * factorial(n - 1) : 1;
// }

// factorial(5)

// function factorial(n){
   
//     if ( 5 <= 0) {
//         return 1;
//     } else {
//       return 5 * factorial(5 - 1);
//           // 1        
//           // 2 * 1! 
//           // 3 * 2!
//           // 4 * 3!
//           // 5 * 4! +
//     }
   
// }
// console.log(factorial(5));


// function factorial(n){
   
//     if ( 0 <= 0) {
//         return 1;
//     } else {
//       return 1 * 1;
//           // 1        
//           // 2 * 1! 
//           // 3 * 2!
//           // 4 * 3! +
//           // 5 * 4!
//     }
   
// }
// console.log(factorial(5));

// function fibonachi(n) {
//   if ( n <= 1 ) {
//     return n;
//   } else {
//     return fibonachi(n - 1) + fibonachi( n - 2);
//   }

// }
// console.log(fibonachi(7));

// function ciclefactorial(n) {
    
//   let result = 1;

//         if ( n === 0) {
//             return 1;
//         } else {
//             for ( let i = 1; i <= n; i++) {
//               result = result * i;
//             }
//         }
//         return result;
// }
// console.log(ciclefactorial(5));

// function fact (arr) {

//   let result = 1;
//   for ( let i = 1; i <= arr.length; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(fact([1, 2, 3, 4, 5, 6]));


// function fib(n) {
  
//   let result = '';
//   for (let i = 0; i <= n; i++) {
//    result +=(n - 1) + ( n - 2);
//   }
//   return result;
// }
// console.log(fib(4));


function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }

  let result = '';

  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
   
      if (i + 1 === num) {
       
          result += `${first}`; // 1, 2, 3, 4, 5
         console.log(result);
          // Без пробела в конце
      } else {
          result += `${first} `;
          // console.log(first);
      }

      let third = first + second; // 1 искомое
      first = second; // 1 
      second = third; // 1
  }

  return result;
}

console.log(fib(5));


// function sum(a, b) {

//     let arr = [a , b];
     
//      for ( let i = 0; i < arr.length; i++){
 
//         arr.push(arr[i] + arr[i + 1] );
//          if( arr.length == 7) break;
//      }
//         return arr;
//  }
//  console.log(sum(0, 1));