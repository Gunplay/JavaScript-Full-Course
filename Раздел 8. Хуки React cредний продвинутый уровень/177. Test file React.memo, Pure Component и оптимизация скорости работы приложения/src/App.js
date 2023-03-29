import { useState, memo, Component, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// class Form extends Component {
//   // shouldComponentUpdate()

//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.mail.name === nextProps.mail.name) {
//       return false
//     }
//     return true
//   }
//   render() {
//     console.log('Render')
//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label
//               htmlFor="exampleFormControlInput1"
//               className="form-label mt-3"
//             >
//               Email address
//             </label>
//             <input
//               value={this.props.mail.name}
//               onChange={(e) => this.props.setData(e.target.value)}
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="name@example.com"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">
//               Example textarea
//             </label>
//             <textarea
//               value={this.props.text}
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               rows="3"
//             ></textarea>
//           </div>
//         </form>
//       </Container>
//     )
//   }
// }

// FOr work with deep
// const propsCompare = (prevProps, nextProps) => {
//   return (
//     prevProps.mail.name === nextProps.mail.name &&
//     prevProps.text === nextProps.text
//   ) // if true - return true
// }
//Memo do not work with deep nestung - вложенность it won't work true
const Form = memo((props) => {
  console.log('Render')
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            value={props.mail}
            onChange={(e) => props.setData(e.target.value)}
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
    <>
      <Form
        mail={data.mail}
        text={data.text}
        setData={setData}
        onLog={onLog} // func this is object and she is not equel to herself
      />
      <button
        onClick={() =>
          setData({
            mail: 'name@example.com!',
            text: 'some text',
          })
        }
      >
        Click me
      </button>
    </>
  )
}

export default App
