'use strict'

const data = [
  {
    id: 'box',
    tag: 'div',
  },
  {
    id: 'fff',
    tag: 'nav',
  },
  {
    id: 'circle',
    tag: '',
  },
]

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag)
    if (!blockObj.id)
      throw new SyntaxError(`В данных под номер ${i + 1} нету id`)
    block.setAttribute('id', blockObj.id)
    document.body.append(block)
  })
} catch (e) {
  //   console.error(e.name)
  //   console.log(e.message)
  //   console.log(e.stack)
  if (e.name === 'SyntaxError') {
    console.log(e.message)
  } else throw e
}

// const err = new SyntaxError('sadsadsaddsfds')
// console.log(err.name, err.message, err.stack)
