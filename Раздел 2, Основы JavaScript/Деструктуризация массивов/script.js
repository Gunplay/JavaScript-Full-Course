
'use strict';

// JS - DINAMIC!!!
// let a = 10;
//     a = true;
//     a = 'Bogdan';
//     a = undefined;
// console.log(a);

// const b = 10;
//       b = 5;
// console.log(b);      


// const a = () => {
//     console.log('Hey there');
// }
// a();
// a = 10;
// a();
// function a() {
//     console.log('Hey there');
// }
// a();

// a = 10;
// a();
// const fruits = ['Apple', 'Banana', 2, 3, 4];

// const [fruitOne, fruitTwo, numberTwo, numberThree] = fruits;

// console.log(fruitOne);
// console.log(numberThree);
// console.log();

const userProfileBogdan = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userProfileVova = {
    city: 'New York',
    name: 'Vova',
    yearsOld: 24,
    spec: 'Java Script',
    nextLearn: function() {
        console.log('React!');
    },
    university: 'Done',
    info: {
        isPopular: true,
        county: 'Ukraine',
    }
}

delete userProfileVova.university;
userProfileVova['pupular'] = true;
userProfileVova['name car'] = 'Toyota';
const countryPropertyName = 'country';
userProfileVova[countryPropertyName] = 'USA';

// delete userProfileVova.info.isPopular;
// delete userProfileVova.info['isPopular']; // Испрльзуется в основном для переменных

// console.log(userProfileVova);

// const name = 'Bogan';
// const postsQty = 23;

// const  userProfileVovaNew = {
//     name: name,
//     postsQty: postsQty,
//     hasSignedAgreement: false,
// }
// console.log(userProfileVovaNew);


const computerCharacteristics = ["Ryzen 5 4600h", 'RTX 2060 6GB', '16 GB RAM'];

// const userInfoBogdan = ({name, commentsQty, }) => {
//     if(!commentsQty) {
//         return `User ${name} has no comments`;
//     }
    
//     return `User ${name} has ${commentsQty} comments`; 
// }

// console.log(userInfoBogdan(userProfileBogdan));

const userinfoVova = ({name, yearsOld, spec, nextLearn}) => {
    const [proc, video, memory] = computerCharacteristics;
    console.log(`Computer characteristics: ${proc}, ${video}, ${memory}`);
    return `User ${name}, Years old has ${yearsOld}, have done learned ${spec}, and will study`;
}


console.log(userinfoVova(userProfileVova));
userProfileVova.nextLearn();