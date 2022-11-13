// const obj = {
//     name: 'Adam',
//     work: 'C++',
//     old: '10',
// };

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);

// const els = [1];
// console.log(els);
// const newELs = [...els];
// newELs.push(4);
// console.log(newELs);

// function flatten(...stack) {
//     const result = [];
//     while (stack.length) {
//         const el = stack.shift(); //shift() позволяет удалить первый элемент из массива (элемент с индексом 0) и возвратить его значение.
//         if (Array.isArray(el)) { // проверка
//             stack.unshift(...el); // и вставляем обратно, только развёрнутый!
//             // continue; // после перебора всех элементов когда их развернули - возвращаемся обратно в while
//         } else {
//         result.push(el); // елси это не массив, то мы просто возвращаем этот элемент!
//         }
//     }    
//       return result;
// }
// console.log(flatten(1, [2, 3], 4, 5, [6, [7, [8]]]));
// console.log(flatten([[[[[1]]]]], ['a', [3, ['b']]], null, 5, 'c'));




// console.log([1, [2, 3], 4, 5, [6, [7, [8]]]].flat(3));
// console.log([[[[[[1]]]]], ['a', [3, ['b']]], null, 5, 'c'].flat(Infinity));
function calculate(expression) {
   const arr = expression.split(' ');
   const stack = [];
    
    //console.log(stack);

   while(arr.length) {
    const el = arr.pop();
    // console.log(el);
    const numberEl = Number(el);
    if (!isNaN(numberEl)) { // 1) false 2) if true/false (+)
        stack.push(numberEl);
        continue;
    } 

    const fisrtNum = stack.pop();
    // console.log(fisrtNum);
    const secondNum = stack.pop();
    // console.log(secondNum);

    switch(el) {
        case '+':
            stack.push(fisrtNum + secondNum);
            break;
        case '-':
            stack.push(fisrtNum + secondNum);
            break;
        case '/':
            stack.push(fisrtNum / secondNum);
            break;
        case '*':
            stack.push(fisrtNum * secondNum);
            break;        

    }
   
}
   return stack[0];

  }
// 3 2 2
console.log(calculate('+ 3 5.1'), 8);
console.log(calculate('* + 2 2 3'), 12);
console.log(calculate('/ + 3 5 * 2 2'), 2);
console.log(calculate('123.456'));


function calculate(expression) {
    const elements = expression.split(' ');
    const stack = [];
  
    while (elements.length) {
      const el = elements.pop();
      const numbered = Number(el);
      if(!isNaN(numbered)) {
        stack.push(numbered);
        continue;
      }
      const first = stack.pop();
      const second = stack.pop();
  
      switch (el) {
        case '+':
          stack.push(first + second)
          break;
  
        case '-':
          stack.push(first -second)
          break;
  
        case '*':
          stack.push(first * second)
          break;
  
        case '/':
          stack.push(first / second)
          break;
      
        default:
          break;
      }
    }
  
    return stack[0];
  }