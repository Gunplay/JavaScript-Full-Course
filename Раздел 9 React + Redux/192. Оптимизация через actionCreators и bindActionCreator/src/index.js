import React from 'react'
import ReactDOM from 'react-dom/client'
// npm i redux react-redux
import { createStore } from 'redux'
import reducer from './reducer'
import { inc, dec, rnd } from './action'

const store = createStore(reducer)

const { dispatch, subscribe, getState } = store

const update = () => {
  document.getElementById('counter').textContent = getState().value //[ object object]
}

subscribe(update)
// ACTION CREATOR
// Промежуточная функция 2) store.dipatch()
const incDispatch = () => dispatch(inc())
const decDispatch = () => dispatch(dec())
const rndDispatch = (value) => dispatch(rnd(value))

// document.getElementById('inc').addEventListener('click', () => {
//   //   store.dispatch({ type: 'INC' }) // action
//   // store.dispatch(inc())
//   dispatch(inc()) //  you should removed double call
// })
document.getElementById('inc').addEventListener('click', incDispatch)

document.getElementById('dec').addEventListener('click', decDispatch) // action

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rndDispatch(value)
})
// let state = reducer(initialState, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })

// console.log('state:', state)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<></>)
