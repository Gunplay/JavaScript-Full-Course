'use strict';

// cвойство данные (описание объекта) и свойства акцессоры(получение объекта)

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age;
    },
    get userName() {
        return this.name;
    },

    set userAge(num) {
        this.age = num;
    },
    set userName(name) {
        this.name = name;
    },
}
persone.userAge = 30;
console.log(persone.age);

console.log(persone.name = 'Kirill');


