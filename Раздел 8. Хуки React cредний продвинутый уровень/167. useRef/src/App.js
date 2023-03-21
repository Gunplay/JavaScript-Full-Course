import { useRef, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Form = () => {
  const [text, setText] = useState('')

  const myRef = useRef(1) // не вызывает ререндер
  const secondRef = useRef()

  // const reTarget = () => {
  //   myRef.current.focus()
  // }

  const switchOnTextArea = () => {
    secondRef.current.focus()
  }
  useEffect(() => {
    myRef.current++
    myRef.current = text
    console.log(myRef.current)
  })
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            ref={myRef}
            onChange={(e) => setText(e.target.value)}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            ref={secondRef}
            // onClick={() => reTarget()}
            onClick={() => myRef.current++}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={myRef.current}
          ></textarea>
        </div>
      </form>
      <div type="button" onClick={() => switchOnTextArea()} className="mb-3">
        Click on me
      </div>
    </Container>
  )
}

function App() {
  return <Form />
}

export default App
