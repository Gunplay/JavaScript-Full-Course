'use strict'
// function func () {
//     window.wmth = 'string';
// }
// console.log(func());


function marry(man, woman, child) {
    woman.husband = man;
    man.wife = woman;
    child.husband = man;
  
    return {
      father: man,
      mother: woman,
      children: child,
    }
  }
 
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  }, {
    name: 'Alex'
  });
  console.log(family);

  console.log(family.father);
  console.log(family.mother);


