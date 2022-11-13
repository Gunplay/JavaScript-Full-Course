// const obj = {
//     name: 'Adam',
//     work: 'C++',
//     old: '10',
// };

// const objString = JSON.stringify(obj);
// console.log(objString);

// const objJavaObject = JSON.parse(objString);
// console.log(objJavaObject);

// До JSON был XML

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike',
    }
};

const clone = JSON.parse(JSON.stringify(persone)); //1) JSON.stringify(persone) - for backend 2) JSON.parse(persone); for frontend
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);