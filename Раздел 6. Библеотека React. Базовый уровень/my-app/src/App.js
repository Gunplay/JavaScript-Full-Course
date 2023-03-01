import { Component, StrictMode } from 'react'
import './App.css'

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 27, // state - меняет только выбранное свойство!!!
      text: '+++', // без изменений
      textMinus: '---',
      position: '',
    }
    // this.nextYear = this.nextYear.bind 1) One option
    this.previusYear = this.previusYear.bind
  }

  nextYear = () => {
    console.log('+++')
    console.log(this)
    // state - текущее состояние
    this.setState((state) => ({
      // передали CallBack для того что бы чётко выполнились все предыдущие стейты, что бы коунтен отработал без ошибок!
      years: state.years + 1,
    }))
  }
  previusYear() {
    console.log(this)
    console.log('---')
    this.setState({
      // years: --this.state.years, // mutation!!!!!!!!!! warring!!!
      years: this.state.years - 1,
    })
  }
  commitInputChanges = (e, color, callback) => {
    console.log(color)
    this.setState({
      position: e.target.value,
    })
    callback()
  }

  render() {
    const { name, surname, link } = this.props
    const { position, years, textMinus } = this.state

    return (
      <div>
        {/* Second option - when we use anonim func/}
        {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
        <button onClick={this.nextYear}>{this.state.text}</button>
        <button onClick={this.previusYear}>{textMinus}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years}, <br></br>
          position:
          {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Ввдеите должность</span>
          <input
            type="text"
            onChange={(e) =>
              // todo -  THIRD when we need to pass an argument to the function
              this.commitInputChanges(e, 'some color', function () {
                console.log(4 + 3)
              })
            }
          />
        </form>
      </div>
    )
  }
}

const Header = () => {
  return (
    <div>
      {/* <h2 style={{ backgroundColor: 'orange' }}>Hello World!</h2> */}
      {/* <WhoAmI
        name={{ firstName: 'John' }}
        surname="Smith"
        link="facebook.com"
      />
      <WhoAmI name={{ firstName: 'Colin' }} surname="Corith" link="insta.com" /> */}
      <WhoAmI name="John" surname="Corith" link="insta.com" />
      <WhoAmI name="Alex" surname="Corith" link="insta.com" />
    </div>
  )
}

// const Field = () => {
//   const holder = 'Enter here'
//   const styleField = {
//     width: '300px',
//     fontSize: '20px',
//     backgroundColor: 'yellow',
//     marginBottom: '20px',
//   }
//   console.log(styleField)
//   return <input placeholder={holder} type="text" style={styleField} />
// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styleField = {
      width: '300px',
      fontSize: '20px',
      backgroundColor: 'yellow',
      marginBottom: '20px',
    }

    return <input placeholder={holder} type="text" style={styleField} />
  }
}

function Btn() {
  const text = 'Log in'
  // const res = () => {
  //   return 'Log in'
  // }
  const objInfo = {
    logged: true,
  }
  // const logged = false
  // const p = <p>Log in</p>
  return <button>{objInfo.logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  )
}

export { Header }
export default App
