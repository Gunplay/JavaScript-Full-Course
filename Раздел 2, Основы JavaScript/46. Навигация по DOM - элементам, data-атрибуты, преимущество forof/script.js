// const body = document.body;
// console.log(body);

// console.log(document.body);
// console.log(document.documentElement);
//console.log(document.body.childNodes); // все Node и узлы этого родителя

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);


// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// 
// for (let node of document.body.childNodes) {
//     if( node.nodeName == '#text') {
//         continue;
        
//     }
//    const allElement = node;
//    console.log(allElement);
// }

const btns = document.getElementsByTagName('button');
console.dir(btns);

const buttons = document.querySelectorAll('button');
console.dir(buttons);