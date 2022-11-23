'use strict';
// function require
const myModule = require('./main'); // требование
// instead - вместо
// instance - экземпляр

const myModuleInstance = new myModule;

myModuleInstance.hello();
myModuleInstance.goodbye();
// при помощи GULP мы можем запускать в определённое время Weboack
