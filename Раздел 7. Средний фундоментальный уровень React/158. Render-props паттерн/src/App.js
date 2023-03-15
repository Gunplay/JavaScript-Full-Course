import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'

const Message = (props) => {
  console.log(props)
  return <h2>The counter is {props.counter}</h2>
}

class Counter extends Component {
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
    return (
      <>
        <button className={'btn btn-primary'} onClick={this.changeCounter}>
          Plus
        </button>
        <button className={'btn btn-primary'} onClick={this.minusCounter}>
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
        render={(counter) => (
          <Message counter={counter} backgroundColor="red" />
        )}
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
