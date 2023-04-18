import React from 'react'
import ReactDOM from 'react-dom/client'
// npm i redux react-redux
import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
// import { inc, dec, rnd } from './action'
// import * as actions from './action'
import { Provider } from 'react-dedux'
import App from './components/App'

const store = createStore(reducer)

// const { dispatch, subscribe, getState } = store

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
const update = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    // <Counter
    //   counter={getState().value}
    //   inc={inc}
    //   dec={dec}
    //   rnd={() => {
    //     const value = Math.floor(Math.random() * 10)
    //     rnd(value)
    //   }}
    // />
    <Provider store={store}>
      <App />
    </Provider>
  )
}
// removed update and subscribe, because it works auto help with PROVIDER!!!

// update()
// subscribe(update) // on View = setState
