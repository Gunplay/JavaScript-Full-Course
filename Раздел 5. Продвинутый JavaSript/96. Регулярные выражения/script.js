'use strict'

// new RegExp('pattern', 'flags');
// /patter/flags

// let text = document.querySelector('.text');

// const ans = prompt('Введите ваше имя', '');


// const reg = /n/i;
// const reg = /n/igm;
// const reg = /n/ig;
// i - в независимости регистра (если будет введно ANN, то i все-ровно найдёт n)
// g - global - найти несколько вхождений
// m - многостроный режим

// Ann = 1 (true), sdsad = false -1
// console.log(ans.search(reg));

//                                              Методы которые относяться к строкам
// search - метод который ищем только первое совпадение и флаг "g" - не работает с ним
// text.innerHTML = ans.search(reg);

// match - работает с "g", более мощный инструмент
// console.log(ans.match(reg));
// const ans = prompt('Введите ваше имя', '');
// console.log(ans.match(reg))  //вы воводи все совпадения в массив

//                                                          Метод replace

// const pass = prompt('Введите пароль');
// Метод имеет два аргумента: что мы заменяем и на что
// console.log(pass.replace(/./g, '*'));
// Экранирование символа, если это спец символ "." и др
// console.log(pass.replace(/\./g, '*'));
// console.log(pass.replace(/\\/g, '*'));
// console.log(pass.replace(/\&/g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));
// const manes = 'Kirill, Vova, Anton, Vova, Vova, Nastya, Nastya, Kirill';
// console.log(manes.replace(/Nastya/ig, '*'));
// console.log(manes.replace(/,/ig, '-'));
//                                                          Метод test (true, false)

// const ans = prompt('Введите ваше имя', '');

// const reg = /n/ig;
// console.log(reg.test(ans));

// const ans = prompt('Только число', '');
                                                            // Классы
                                                            // \d - digits - Цифры
                                                            // \w - слова, все буквы
                                                            // \s - пробелы

// const reg = /\d/g;

// console.log(ans.match(reg));
// const numbers = ans.match(reg);
// console.log(numbers.join(', '));

// const str = 'My name is R2D2';
// const reg = /\w\d\w\d/i;

// console.log(str.match(reg));

//                                          Обратные классы 
// \D -  не цифры
// \W - не буквы
// \S  - не пробелы

const str = 'My name is R2D2';
// const reg = /\W/ig;
const reg = /\D/ig;

console.log(str.match(reg));