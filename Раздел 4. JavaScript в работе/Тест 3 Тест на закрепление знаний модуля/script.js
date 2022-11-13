'use strict'

// Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional) // ,без трёх точек это будет массав
    console.log(typeof(additional));
}
// setOptions(400, 500, 'red', 'top');


// Вопрос 2:
// Что будет выведено в консоль в результате работы функции?

// 'use strict';
 
// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5);


// Вопрос 4:
// Что выведет в консоль данный код?

// class Slider {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
 
//     showSliderWidth() {
//         console.log(this.width);
//     }
// }
 
// const slider = new Slider('500px', '150px');
 
// slider.showSliderWidth();

// Вопрос 9:
// Что выведет в консоль данный код?

// const urlObj = {
//     protocol: 'https',
//     domain: 'mysite.com',
//     showCurrentURL: function() {
//         const extractCurrDomain = () => {
//             return this.domain;
//         }
//         const extractCurrProtocol = () => {
//             return this.protocol;
//         }
 
//         console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
//     }
// }
 
// urlObj.showCurrentURL()


// Вопрос 10:
// Что выведет в консоль этот код при запуске?

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
}
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    }
    const extractCurrProtocol = () => {
        return this.protocol;
    }
 
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
}
 
const url = showCurrentURL.bind(urlObj);
 
// console.log(url);

// Вопрос 11:
// Свойство объекта события event.code позволяет получить...

// Код физической клавиши, которая была нажата. Вне зависимости от зажатых клавиш Shift или ALt!