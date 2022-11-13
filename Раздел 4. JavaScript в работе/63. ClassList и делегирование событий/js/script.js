const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length) // показывает сколько классов у первого элемента

// console.log(btns[0].classList.item(1)) 

// console.log(btns[0].classList.add('red', 'orange', 'weq')); 
// console.log(btns[1].classList.add('red')); 

// console.log(btns[7].classList.add('orange'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

console.log(btns[0].classList.item(3));

// if( btns[1].classList.contains('red')) {
//     console.log('red');
// }


btns[0].addEventListener('click', () => {
    if ( !btns[1].classList.contains('red') || !btns[2].classList.contains('red')) {
        btns[1].classList.add('red');
        btns[2].classList.add('red');
        btns[2].innerHTML = 'Hello World';
        const btn = document.createElement('button');
      
    } else {
        btns[1].classList.remove('red');
        btns[2].classList.remove('red');
        btns[2].innerHTML = '';
       
    }

    // btns[1].classList.toggle('red');
})

console.log(btns[0].className); // старый метод!

// Дилигирование!!!!!!!!!!!

const wrapper = document.querySelector('.btn-block');


wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    // тег br - не содержит event.targer
    // matches('button.red') - GOOGLE DEVELOPERS LIKE IT!
    if (event.target && event.target.matches('button.red')) {
        console.log('HELLO');
    }

    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('HELLO');
    // }

    // if (event.target && event.target.classList == "blue" || event.target.classList == 'orange') {
    //     console.log('HELLO');
    // }
});

// не Делегирование!! ОШИБКА, не помещается событие на новый элемент!
// btns.forEach((btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hi All!!!');
//     })
// }))

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
