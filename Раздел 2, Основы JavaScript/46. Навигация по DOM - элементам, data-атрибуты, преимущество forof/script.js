// const body = document.body
// console.log(body)

// console.log(document.body);
// console.log(document.head)
// console.log(document.documentElement) //HTML
// console.log(document.body.childNodes) // все Node и узлы этого родителя

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.body.lastChild);

// const buttonOne = document.querySelector('button')
// const getButton = (e) => {
//   console.log(e.currentTarget)
//   console.log(document.querySelector('#current').parentNode.parentNode)
// }
// buttonOne.addEventListener('click', getButton)
// console.log(document.querySelector('#current').parentNode)

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]'))
// console.log(document.querySelector('[data-current="3"]').nextSibling)
// console.log(document.querySelector('[data-current="3"]').previousSibling)

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// const buttonOne = document.querySelector('button')
// let li_5 = document.querySelector('[data-current="5"]')

// const changeLi = () => {
//   console.log(li_5)
//   li_5.style.color = 'orange'
//   li_5.style.fontSize
//     ? (li_5.style.fontSize = '30px')
//     : (li_5.style.fontSize = '10px')
// }

// buttonOne.addEventListener('click', changeLi)

// console.log(document.querySelector('#current').parentNode)

let collectionHTML = document.body.childNodes
for (let node of collectionHTML) {
  if (node.nodeName == '#text' || node.nodeName == '#comment') {
    continue
  }

  console.log(node)
}

// const btns = document.getElementsByTagName('button')
// console.dir(btns)

// const buttons = document.querySelectorAll('button')
// console.dir(buttons)
