import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// const helloReact = <h1>Hello World!</h1>
// Cntl + shift + p setting user -EMMEt (auto-complete)
const text = 'Hello World!'
const elem = (
  <div className={{ display: 'flex', justifyContent: 'space-beetwen' }}>
    <h2 className="text">Text: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">PUSH</button>
    <h2 className="class"></h2>
  </div>
)
// babel

// const elem = React.createElement(
//   'h2',
//   { className: 'greeting' },
//   'Hello World!'
// )
// const element = {
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Hello, World!',
//   },
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(elem)
