
'use strict';

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    },
    power: function() {
        console.log('My power 1798!');
    }
};

const soldierUpdate = {
    newPower: function() {
        console.log('My power update to 2777!');
    }
}

const john = Object.create(soldier); // new method
const johnUpdate = Object.create(soldierUpdate);
// const john = {
//     health: 100,
// };

// john.__proto__ = soldier; // old method, dont used 

// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
soldier.sayHello();
soldier.power();
johnUpdate.newPower();