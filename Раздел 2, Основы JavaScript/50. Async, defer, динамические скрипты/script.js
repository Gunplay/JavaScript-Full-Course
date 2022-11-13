"use strict"
const p = document.querySelectorAll('p');
console.log(p);


// Динамическое размещение, не зависят ни от кого!
const script = document.createElement('script');
script.src = 'test.js';
document.body.append(script);