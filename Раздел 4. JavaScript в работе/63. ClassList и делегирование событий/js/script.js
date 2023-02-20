const btns = document.querySelectorAll('button')

// console.log(btns[0].classList.length) // показывает сколько классов у первого элемента

// console.log(btns[0].classList.item(1))

// console.log(btns[0].classList.add('red'))
// console.log(btns[1].classList.add('red'));

// console.log(btns[7].classList.add('orange'));
// console.log(btns[0].classList.remove('blue'))
// console.log(btns[0].classList.toggle('blue'))
// btns[0].classList.add('blue', 'orange')
// console.log(btns[0].classList.item(3))

// btns[1].classList.add('red')
// if (btns[1].classList.contains('red')) {
//   console.log('red')
// }

btns[0].addEventListener('click', () => {
  //   if (!btns[1].classList.contains('red')) {
  //     btns[1].classList.add('red')
  //     const btn = document.createElement('button')
  //   } else {
  //     btns[1].classList.remove('red')
  //     // btns[2].classList.remove('red')
  //     // btns[2].innerHTML = ''
  //   }

  btns[1].classList.toggle('red')
  btns[2].classList.toggle('red')
})

//console.log(btns[0].className); // старый метод!

// Дилигирование!!!!!!!!!!!

const wrapper = document.querySelector('.btn-block')

wrapper.addEventListener('click', (event) => {
  //   console.dir(event.target)
  // тег br - не содержит event.targer
  // matches('button.red') - GOOGLE DEVELOPERS LIKE IT!
  if (event.target && event.target.matches('button.green')) {
    console.log('Green')
  }

  //   if (event.target && event.target.tagName == 'BUTTON') {
  //     console.log('HELLO')
  //   }

  //   if (event.target && event.target.classList.contains('orange')) {
  //     btns[6].classList.toggle('orange')
  //     console.log('HELLO')
  //   } else {
  //     btns[6].classList.add('orange')
  //   }
})

// не Делегирование!! ОШИБКА, не помещается событие на новый элемент!
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Hi All!!!')
  })
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)
