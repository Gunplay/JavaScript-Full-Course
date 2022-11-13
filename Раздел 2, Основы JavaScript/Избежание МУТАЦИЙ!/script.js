const obj = {
    name: 'Adam',
    work: 'C++',
    old: '10',
};

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);


// const objNew = Object.assign({}, obj);
// objNew.car = 'Totyota';
// console.log(obj);
// console.log(objNew);

// const objNew1 = {...obj};
// objNew1.ravencoin = '1$';
// console.log(objNew1);

const personOne = {
    name: 'Bob',
    age: 21,
};

function icnreasePersonAge(person){
    person.age += 1;
    return person.age;
}
console.log(icnreasePersonAge(personOne));