import React from 'react'
import ReactDOM from 'react-dom/client'
// npm i redux react-redux
import { createStore } from 'redux'
// const initialState = 0 // 1) state
const initialState = { value: 0 }

// let state = reducer(indefined, { type: 'INC' })
// reducer must be pure function !!! and don't must be mutate
const reducer = (state = initialState, action) => {
  // N1 step
  switch (action.type) {
    case 'INC': // CAPS
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value + 1,
      }
    case 'DEC':
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value + 1,
      }
    case 'RND':
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value * action.payload,
      } // reducer must be pure function !!! and don't must be mutate
    default:
      return state // prevState
  }
}

const store = createStore(reducer) // storage // N2 step
// each state our store : 1, 2...
// N4
const update = () => {
  document.getElementById('counter').textContent = store.getState().value //[ object object]
}
// N5 step view
store.subscribe(update)
// store.subscribe(() => {
//   console.log(store.getState())
// })

// ACTION CREATOR

const inc = () => ({ type: 'INC' })
const dec = () => ({ type: 'DEC' })
const rnd = (value) => ({ type: 'RND', payload: value })
// N3 step
document.getElementById('inc').addEventListener('click', () => {
  //   store.dispatch({ type: 'INC' }) // action
  store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec()) // action
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  store.dispatch(rnd(value))
})
// let state = reducer(initialState, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })

// console.log('state:', state)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<></>)
