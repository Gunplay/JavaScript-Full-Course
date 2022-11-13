// (*) Продвинутые задания на использование функций
// В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

// TASK 1


// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }
//     let volume;
//     for ( let i = 0; i <= length; i++) {
//             if ( i === length) {
//                 volume += `${length * i}`;
//             }
//             console.log(volume);
//     }
   
//     let area  = 6 * (length * length);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// console.log(calculateVolumeAndArea(5));

// TASK 2

// function getCoupeNumber(number) {
 
//     // let arr = [];
//     // for ( let i = 1; i <= 36; i++) {
//     //    arr.push(i);
//     // }

//     if (number >= 1 && number <= 4) {
//         return ('1 купе ');
//     }

//     if (number >= 5 && number <= 8) {
//         return ('2 купе');
//     }

//     if (number >= 9 && number <= 12) {
//         return ('3 купе');
//     }

//     if (number >= 13 && number <= 16) {
//         return ('4 купе');
//     }
//     if (number >= 17 && number <= 20) {
//         return ('5 купе');
//     }

//     if (number >= 21 && number <= 24) {
//         return ('6 купе');
//     }

//     if (number >= 25 && number <= 28) {
//         return ('7 купе');
//     }

//     if (number >= 29 && number <= 32) {
//         return ('8 купе');
//     }

//     if (number >= 33 && number <= 36) {
//         return ('9 купе');
//     }
   

    
// }
// console.log(getCoupeNumber(30));


// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// console.log(getCoupeNumber(1));


// function getCoupeNumber(num) {
//     if (typeof num !== 'number' || num < 0 || num % 1 !== 0) {
//        return 'Ошибка. Проверьте правильность введенного номера места';
//    } else if (num < 1 || num > 36) {
//        return 'Таких мест в вагоне не существует';
//    }

//    switch (true) {
//        case num <= 4:
//            return 1;
//        case num <= 8:
//            return 2;
//        case num <= 12:
//            return 3;
//        case num <= 16:
//            return 4;
//        case num <= 20:
//            return 5;
//        case num <= 24:
//            return 6;
//        case num <= 28:
//            return 7;
//        case num <= 32:
//            return 8;
//        case num <= 36:
//            return 9;
//    }
// }
// console.log(getCoupeNumber(22));


// function getCoupeNumber(number) {

//    let arr = [];
   
// for ( let i = 1; i <= 36; i++) {

//  arr.push(i);
//  }
//  return arr;
// }

// console.log(getCoupeNumber(33));

// Место для первой задачи
// function getTimeFromMinutes(minutesTotal) {

//         if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//             return "Ошибка, проверьте данные";
//         }
   

//        let hours  = Math.floor(minutesTotal / 60);
        
//         let minutes  = minutesTotal % 60;

//         let hoursStr = '';

//         switch (hours) {
//             case 0:
//                 hoursStr = 'часов';
//                 break;
//             case 1:
//                 hoursStr = 'час';
//                 break;
//             case 2:
//             case 3:
//             case 4:
//                 hoursStr = 'часа';
//                 break;
//             default:
//                 hoursStr = 'часов';               
//         }

//         return `Это ${hours } ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(12230));


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// console.log(findMaxNumber(1, 5, 6.6, 10.5));
// console.log(findMaxNumber(1, 5, '6', '10'));


// (**) Задача с собеседований на числа Фибоначчи
// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.

// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"


// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0; // 1
//     let second = 1; // 1

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second; // 1 // 2
//         second = third; // 1 // 2
//     }

//     return result;
// }

// console.log(fib(5));

// function sum(a, b) {

//     let arr = [a, b];
 
//      for ( let i = 0; i < arr.length; i++){
 
//         arr.push(arr[i] + arr[i + 1] );
//          if( arr.length == 5) break;
//      }
//         return arr;
//  }
//  console.log(sum(0, 1));


// function fib(num) {
//     if (typeof num !== 'number' || num === 0  || !Number.isInteger(num)) {
//         return '';
//     }
//     if (num === 1) {
//         return '0';
//     }

//     let result = [0, 1];
//     for (let i = 2; i < num; i++) {
//         result.push(result[i - 2] + result[i - 1]);
//     }
//     return result.join(' ');
// }
// console.log(fib(5));

// function number () {

//     let arr = [];
//     for ( let i = 0; i < 5; i++ ) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(number());

// function triBonachi(startValue, n) {
 
//     for ( let i = 0; i < n - 3; i++) {
//         startValue.push(i[3] - 1)
//     }

// }
// console.log(triBonachi([1, 1, 1], 5));

// 1, 1, 1, 3, 5

// function copyArr (arr) {

//     let newArr = [];

//     for ( let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(copyArr([2,5,2,23,121,11,13]));

// function copyArr (obj) {

//     let newArr = {};


// }
// console.log(copyArr());


// function number () {

//     const arr = [];
//     let i = 5;
//     for ( i ; i > 0; i-- ) {

//         arr.push(i
//     }
//     return arr;
// }
// console.log(number());



// function triBonachi(startValue, n) {
 
    
//     for ( let i = 0; i < n; i++) {
//         startValue.push(startValue[i] + startValue[i + 1]);
//     }

//         return startValue;
// }
// console.log(triBonachi([], 8));

//1, 1, 1, 3, 5



// Задача №1
//  с помощью цикла заполни пустой массив пятью '+'. Это как метод fill, но с помощью цикла
// [ ] -> ['+', '+', '+', '+', '+']

// function plusFive(n) {

//     const arr = [];
    
//     for (let i = 0; i < n; i++) {
//         arr.push('+');
//     }

//     return arr;
// }
// console.log(plusFive(5));

// const arr = [1, 2, 3, 4];
// console.log(arr.fill('+'));


// Задача №2
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// function sum () {
//     const arr = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for ( let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// }
// console.log(sum());
// с помощью цикла получи сумму элементов массива. Т.е. переменная sum сейчас 0, но потом должна ретёрнуть общую сумму


// Задача №3
// есть массив например [5, 123, 14, -10, -2, 0, 11, -23, 35]
// Нужно вернуть массив, но с положительными числами

// function positiveNumber () {

//     const arr = [5, 123, 14, -10, -2, 0, 11, -23, 35];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 ) {
//             arr[i] = arr[i] * (-1);
//         }
//     }

//     return arr;
// }

// console.log(positiveNumber());

// Задача №4
// есть массив например [5, 123, 14, -10, -2, 0, 11, -23, 35]
// Нужно вернуть массив нечётный чисел

// function negativeNumber () {

//     const arr = [5, 123, 14, -10, -2, 0, 11, -23, 35];
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// console.log(negativeNumber());




// Ну так вот бонус Задача #5 со звездочкой
// [1, 23, 'World', 14, 5, 8, 27, 'Hello', 29] -> 'Hello World'


// Т.е. на вход ты получаешь массив с цифрами и двумя словами, но по итогу должен получить строку 'Hello World'

// function onlyText () {
//     const arr = [1, 23, 'World', 14, 5, 8, 27, 'Hello', 29];
//     const newArr = [];

//     for ( let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === 'string') {
//         newArr.push(arr[i]);
//         }
//     }

//     return newArr.reverse().join(' ');
// }
// console.log(onlyText());

// ('CodEWaRs'), [0,3,4,6] лови задачу на цикл, если хош можешь попробовать сделать
// в строке 'CodEWaRs'  нужно найти Заглавные буквы и на выходе создать массив с индексами этих заглавных букв  [0,3,4,6]

// function capitalLetter (str) {

//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         // const character = str.charAt(i);
//         // console.log(character);
//         if ( str[i] == str[i].toUpperCase()){
//        arr.push(i);
       
//     }
//     }

//    console.log(arr.join(' '));

//     return arr;
// }
// console.log(capitalLetter('CodEWaRs'));



// 
// и ещё вот хорошая задача на циклы 
// ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// ('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// ([1,2,2,3,3]) == [1,2,3]

// 
// т.е. на вход ты получаешь перебираемый тип данных (либо массив, либо строку). Как можешь заметить там буквы, либо цифра повторяются. Вот нужно создать массив, но, чтобы было по одной букве, либо цифре


// function uniqueValue(date){

//     for ( let i = 0; i< date.length; i++) {
//         if ( date[i] !== date[i + 1] ) {
//         console.log(date[i]);
//         }
//     }
// }
// console.log(uniqueValue('AAAABBBCCDAABBB'));
// console.log(uniqueValue([1,2,2,3,3]));


const str = [1,2,2,3,3];
// только для массива и строки!!!!!!!!!!!!!!!!!!!!!!
for ( let item of str) {
    console.log(item);
}