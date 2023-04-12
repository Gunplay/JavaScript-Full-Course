import { useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Form from './Form'
import dataContext from './contex'

const { Provider, Consumer } = dataContext
//Memo do not work with deep nestung - вложенность it won't work true

// class InputComponent extends Component {
//   //3
//   static contextType = dataContext
//   render() {
//     return (
//       1) !!!!!!!!!!!
//       <Consumer>
//          {(value) => {
//           // Function
//           return (
//             <input
//               value={value.mail}
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//             ></input>
//           )
//         }}

//       <input
//         value={this.context.mail}
//         type="email"
//         className="form-control"
//         id="exampleFormControlInput1"
//         placeholder="name@example.com"
//       ></input>

//       // </Consumer>
//     )
//   }
// }
// 2)
// InputComponent.contextType = dataContext

function App() {
  // default value
  const [data, setData] = useState({
    mail: 'name@example.com!',
    text: 'some text',
    onChangeinput: forceChangeMail,
  })

  const [text, setText] = useState({
    mail: 'name@example.com!',
    text: 'some text',
    onChangeinput: (e) => {
      setText({ ...text, mail: e.target.value })
    },
  })

  function forceChangeMail(e) {
    setData({ ...data, mail: 'test@gmail.com' })
  }

  // const onLog = useCallback(() => {
  //   // remembered
  //   console.log('wow')
  // }, [])

  return (
    // const [data, setData] = useState
    // <Provider = undefined/>!!!!!!!!!!!!!
    // Default value - когда Provider не существует
    <Provider value={{ data, text }}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            mail: 'second@example.com!',
            text: 'another text',
            forceChangeMail: forceChangeMail,
          })
        }
      >
        Click me
      </button>
    </Provider>
  )
}

export default App
