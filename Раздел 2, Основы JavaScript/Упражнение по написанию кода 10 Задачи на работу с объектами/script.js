
'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     radius: 300,
//     makeTest: function() {
//         console.log('Tect');
//     }
// };

// // options.makeTest();

// // Деструктуризация
// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

// console.log(Object.keys(options).length); // даёт массив

// console.log(options.name);
// console.log(options.colors['border']);
// console.log(options['colors']['border']);
// // delete options.name;
// console.log(options);

// let counter = 0;
// for ( let key in options) {

//     // перебираем вложенный объект colors
//     if ( typeof(options[key] === 'object')) {
//         for( let i in options[key]) {
//             console.log(`Свойство: ${i} и значение ${options[key][i]}`);
//             // counter++;
//         }
//     }   else {
//         console.log(`Свойство: ${key} и значение ${options[key]}`);
//     //     counter++;
//     // 
// }
//     counter++;
// }   
// console.log(counter);

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month',
        old: '100'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp, old} = plan.skills;
    console.log(`${exp} ${old}`)
}''

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));