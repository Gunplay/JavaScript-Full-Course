'use strict';

function myModule() {
  this.hello = function() {
    console.log('hello');
  };

  this.goodbye = function() {
    console.log('bye!');
  };
}
// Commmon JS
myModule.exports = myModule;

// npx webpack - Запуск
// Важен пусть 


