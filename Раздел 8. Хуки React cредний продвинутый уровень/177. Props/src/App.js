import { memo, useCallback, useState } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'

// function propsCompare(prevProps, nextProps) {
//   console.log(prevProps)
//   console.log('nextProps', nextProps)
//   //   return prevProps.mail === nextProps.mail && prevProps.text === nextProps.text
//   return prevProps.data.changeData === prevProps.data.changeData
// }

const Form = memo((props) => {
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
        </div>
        <Input
          data={props.data}
          mail={props.mail}
          changeData={props.changeData}
        />
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
})

const Input = (props) => {
  return (
    <input
      value={props.mail}
      onChange={(e) =>
        props.changeData({ ...props.data, mail: e.target.value })
      }
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    ></input>
  )
}

function App() {
  console.log('render')
  const [data, setData] = useState({
    mail: 'name@example.com',
    text: 'some text',
  })

  const onLog = useCallback(() => {
    console.log('onLog')
  }, [])
  return (
    <>
      <Form
        data={data}
        mail={data.mail}
        text={data.text}
        changeData={setData}
        // onLog={onLog}
      />
      <button
        onClick={() =>
          setData({
            mail: 'second@example.com',
            text: 'another text',
          })
        }
      >
        Click me
      </button>
    </>
  )
}

export default App
