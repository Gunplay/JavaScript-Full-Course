import { useState, Component, createContext, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const dataContext = createContext({
  mail: 'name@example.com!',
  text: 'some text',
})

const { Provider, Consumer } = dataContext
//Memo do not work with deep nestung - вложенность it won't work true
const Form = (props) => {
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <InputComponent />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  )
}

class InputComponent extends Component {
  static contextType = dataContext
  render() {
    return (
      // 1) !!!!!!!!!!!
      // <Consumer>
      //    {(value) => {
      //     // Function
      //     return (
      //       <input
      //         value={value.mail}
      //         type="email"
      //         className="form-control"
      //         id="exampleFormControlInput1"
      //         placeholder="name@example.com"
      //       ></input>
      //     )
      //   }}

      <input
        value={this.context.mail}
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      ></input>

      // </Consumer>
    )
  }
}
// 2)
// InputComponent.contextType = dataContext

function App() {
  const [data, setData] = useState({
    mail: 'name@example.com!',
    text: 'some text',
  })

  const onLog = useCallback(() => {
    // remembered
    console.log('wow')
  }, [])

  return (
    // const [data, setData] = useState
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            mail: 'second@example.com!',
            text: 'another text',
          })
        }
      >
        Click me
      </button>
    </Provider>
  )
}

export default App
