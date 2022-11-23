'use strict';

const a = 'lib';

((...data) => {
  return data;
})();
console.log(1, 2, 3, 4);


const number = 1;
// Анониманя без имени
// если сделаем без скобок, то получиться func declaration, но declaration не может существовать без переменной
(function(){ // func - exprassion (() => {}()); - могут не иметь имени
    const number = 2;
    console.log(number);
    console.log(number + 3);
}()); // самовызов

console.log(number);

const user = (function(){
  const privat = function(){
    console.log('I am privat!');
  };
// Объектный интерфейс
  const password = (...data) => {
      return data;
  }
  // console.log(password('Kirill', 'Vova', 'Dima'));

  return {
    say: privat, // ссылка на нашу приватную функцию
  }
}());

user.say();
console.log(password('Kirill', 'Vova', 'Dima'));