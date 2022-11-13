const obj = {
    name: 'Adam',
    work: 'C++',
    old: '10',
};

const objString = JSON.stringify(obj);
console.log(objString);

const objJavaObject = JSON.parse(objString);
console.log(objJavaObject);

