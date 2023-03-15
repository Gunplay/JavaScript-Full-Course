import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {
  constructor(props) {
    super(props)
    // this.myRef = React.createRef()
  }

  //   componentDidMount() {
  //     this.myRef.current.focus() // DOM API standart
  //     // this.myRef.current.doSmt()
  //   }
  setInputRef = (elem) => {
    this.myRef = elem
  }
  foccusOnFirst = () => {
    if (this.myRef) {
      this.myRef.focus() // current won't
    }
  }
  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={this.setInputRef}
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
              onClick={this.foccusOnFirst}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

// class TextInput extends Component {
//   doSmt = () => {
//     console.log('Load')
//   }
//   render() {
//     return (
//       <input
//         type="email"
//         className="form-control"
//         id="exampleFormControlInput1"
//         placeholder="name@example.com"
//       />
//     )
//   }
// }

function App() {
  return <Form />
}

export default App
