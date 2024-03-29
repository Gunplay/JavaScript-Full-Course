import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'

const Message = (props) => {
  const divStyle = {
    backgroundColor: 'red',
  }
  console.log(props)
  return <h2 style={divStyle}>The counter is {props.counter}</h2>
}

class Counter extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    counter: 0,
  }

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  minusCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }))
  }
  render() {
    const { color } = this.props
    console.log(color)
    return (
      <>
        <button className={'btn btn-primary'} onClick={this.changeCounter}>
          Plus
        </button>
        <button
          style={color}
          className={'btn btn-primary'}
          onClick={this.minusCounter}
        >
          Minus
        </button>
        {this.props.render(this.state.counter)}
        {/* <Message counter={this.state.counter} /> */}
      </>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Counter render={(counter) => <Message counter={counter} />} />
      <Counter
        render={(counter) => <Message counter={counter} color="red" />}
      />
    </div>
  )
}

export default App

// Page
// div
// Page
// form
// Page
// div
