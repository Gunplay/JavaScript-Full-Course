'use strict';

// cвойство данные (описание объекта) и свойства акцессоры(получение объекта)

// const persone = {
//     name: "Alex",
//     age: 25,

//     get userAge() {
//         return this.age;
//     },
//     get userName() {
//         return this.name;
//     },

//     set userAge(num) {
//         this.age = num;
//     },
//     set userName(name) {
//         this.name = name;
//     },
// }
// persone.userAge = 30;
// console.log(persone.age);

// console.log(persone.name = 'Kirill');


//                                      Инкапсуляция на constructor object this

// function User (name, age) {
//     this.name = name;
// // Переменная userAge - не доступна в глоб видимости    
//     let userAge = age;

//     this.say = () => {
//         console.log(`Name user: ${this.name}, age ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     }
//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('You have entered a weekly value');
//         }
//     }
// }

// const vova = new User('Vova', 28);
// console.log(vova.name);
// console.log(vova.getAge());

// vova.setAge(33);
// console.log(vova.getAge());
// vova.setAge(333);
// console.log(vova.userAge);

// vova.say();


//                                      Инкапсуляция на class
// class User{
//     constructor (name, age) {
//         this.name = name;
//         // Переменная userAge - не доступна в глоб видимости    
//         this._age = age; // _age - догов между программистами свойство которое не следует менять!
//     }
//     //Приватное свойство
//     #surname = ' Petrychenko';


//     say = () => {
        
//         console.log(`Name user: ${this.name}, ${this.#surname} age ${this._age}`); //  userAge - не доступно, потому что это не свойство объекта!
//     }
// // Старый метод который раньше использовали
//     // getAge = function() {
//     //     return this._age;
//     // }
// // Новый    
//     get age() {
//         return this._age;
//     }
//     // setAge = function(age) {
//     //     if (typeof age === 'number' && age > 0 && age < 110) {
//     //         this._age = age;
//     //     } else {
//     //         console.log('You have entered a weekly value');
//     //     }
//     // }
//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('You have entered a weekly value');
//         }
//     }
// }

// const vova = new User('Vova', 28);
// console.log(vova);
// vova.age = 33; //set age
// console.log(vova.age); //get age
// vova.say();
// console.log(vova.surname);

//                                              Home work

class Man {
   

    constructor(name, age) {
      
        this._name = name;
        this.age = age;
       
    }
    #surname = 'Yankers';
    // #surname = 'Yankers';
  

    say = () => {
        console.log(`Name is: ${this.name}, surmane ${this.#surname} age ${this.age}`)
       
    }
    
    get uniqName() {
        return this.surname; 
    }
    set uniqName(surname) {
        console.log(surname);
      if( typeof surname === 'string' && surname.length < 3){
        this.#surname = surname;
      } else {
        console.log('Error');
      }
    }


    // get name() {
    //     return this._name;
    // }

    // set name(name) {
    //   this._name = name;
    // }
}

const igor = new Man('igor', 24);
igor.name = 'Kirill';
igor.say;
console.log(igor.name);
console.log(igor.age);
console.log(igor);
// console.log(igor.uniqName());
console.log(igor.uniqName);
igor.surname = 'Ilizobeth';
console.log(igor.surname);