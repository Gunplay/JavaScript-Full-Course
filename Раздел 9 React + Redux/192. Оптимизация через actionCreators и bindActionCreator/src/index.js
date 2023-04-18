import React from 'react'
import ReactDOM from 'react-dom/client'
// npm i redux react-redux
import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
// import { inc, dec, rnd } from './action'
import * as actions from './action'

const store = createStore(reducer)

const { dispatch, subscribe, getState } = store

const update = () => {
  document.getElementById('counter').textContent = getState().value //[ object object]
}

subscribe(update) // on View

const bindActionCreator =
  (creator, dispatch) =>
  (...args) => {
    dispatch(creator(...args))
  }

// ACTION CREATOR // STEP 1

// Промежуточная функция 2) store.dipatch()
// const incDispatch = () => dispatch(inc()) // action creator
// const incDispatch = () => bindActionCreator(inc, dispatch) // action creator
// const decDispatch = () => bindActionCreator(dec, dispatch)
// // const rndDispatch = (value) => dispatch(rnd(value))
// const rndDispatch = (value) => bindActionCreator(rnd, dispatch)

// STEP 2

// REDUX bindActionCreators
//const incDispatch = bindActionCreator
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// )

// LAST STEP

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// const incDispatch = bindActionCreators(inc, dispatch) // action creator
// const decDispatch = bindActionCreators(dec, dispatch)
// // const rndDispatch = (value) => dispatch(rnd(value))
// const rndDispatch = bindActionCreators(rnd, dispatch)

// document.getElementById('inc').addEventListener('click', () => {
//    store.dispatch({ type: 'INC' }) // action
//    store.dispatch(inc())
//   dispatch(inc()) //  you should removed double call
// })
document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec) // action

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rnd(value)
})
// let state = reducer(initialState, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })

// console.log('state:', state)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<></>)
