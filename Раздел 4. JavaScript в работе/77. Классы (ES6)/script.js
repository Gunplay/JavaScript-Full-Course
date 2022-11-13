'use strict'
// const obj = {
//     name: 'Adam',
//     work: 'C++',
//     old: '10',
// };

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);

// writable - перезапись
// enumerable - нумерация
// configurable - удаление

//                                                  FUNKCTION CONSTRUCTOR   ES 5                                           


// const num = new Number(3);
// console.log(num);

// function User (name, id, height) {
//     this.name= name;
//     this.id = id;
//     this.human = true;
//     this.height = height;
// }

// const ivan = new User('Ivan', 28);
// // const ann = new User('Ann', 20);
// const vova = new User('Vova', 28, 180);

// console.log(ivan);
// // console.log(ann);
// console.log(vova);

// function CarCreate(mark, color, price) {
//     this.mark = mark;
//     this.color = color;
//     this.price = price;
//     this.auto = true;
//     this.hello = function() {
//         console.log(`Hello ${this.mark}`);
//     };
//     this.bmwConfig = function() {
//         console.log(`Color BMW: ${this.color}, Price: ${this.price}`);
//     }
// }
// // наследование от потомка
// CarCreate.prototype.exit = function() {
//     console.log(`User ${this.mark} exit`);
// } 

// const bmw = new CarCreate('Bmw', 'white', "$99000");
// const audi = new CarCreate('Audi', 'black', "$89000");
// const audiNew = new CarCreate('Audi', 'black', "$89000");

// audi.exit();

// // console.log(audi);
// // console.log(audiNew);

// bmw.hello();
// audi.hello();

// bmw.bmwConfig();

// const objAudi = Array.from(audi);
// console.log(objAudi);
// const unique = new Set(objAudi);
// console.log(unique);


//                                                  Class ES 6

class Reactanle {
// концепт    
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

Extands - наследование
class ColoredRectangWithText extends Reactanle {
    constructor(height, width, text, bgColor) {
        super(height, width); // active parent
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, BackGroundColor: ${this.bgColor}`);
    }
}

// // Экземпляр
let div = document.createElement('div');

div = new Reactanle(40, 40),
console.log(div);


const square = new Reactanle(10, 10);
console.log(square.calcArea());
// const long = new Reactanle(20, 100);
// // Экземпляр
// const div = new ColoredRectangWithText(25, 10, 'Hello World', 'red');
// div.showMyProps();
// console.log(div.calcArea());

// console.log(square.calcArea());
// console.log(long.calcArea());



// ООП 1) Абстракция - отделение от экземпляра
//     2) Наследование