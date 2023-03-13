import React, { Component, StrictMode } from 'react'
import styled from 'styled-components'
import './App.css'
import './buttons.css'
const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-raduis: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    color: ${(props) => (props.active ? 'orange' : 'black')};
  }
  input:hover {
    background-color: orange;
  }
  input:after {
    background-color: orange;
  }
`

const Header = styled.h1`
  fons-size: 22px;
`

export const Button = styled.button`
  background: orange;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  color: dark;
`
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
    this.previusYear = this.previusYear.bind(this)
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
      <EmpItem active>
        {/* Second option - when we use anonim func/}
        {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <button onClick={this.previusYear}>{textMinus}</button>
        <Header>
          My name is {name}, surname - {surname}, age - {years}, <br></br>
          position:
          {position}
        </Header>
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
      </EmpItem>
    )
  }
}

const HeaderMain = () => {
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

const Wrapper = styled.div`
  background-color: steelblue;
  width: 600px;
  margin: 80px auto 0 auto;
`
//                                                                                 React.Children
const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {/* {props.children} */}
      {/* elem or arr */}
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: 'shadow p-3 m-3 border rounded', // props
        })
      })}
    </div>
  )
}

const WrapperForButton = (props, backgroundColor) => {
  console.log(backgroundColor)
  return (
    <div style={{ backgroundColor }}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: 'buttons', // props
        })
      })}
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      <WrapperForButton backgroundColor="red">
        <button>One</button>
        <button>Two</button>
        <button>Three</button>
        <button>Four</button>
      </WrapperForButton>
      <DynamicGreating color={'primary'}>
        {/* ...children */}
        <h2>This weel was hard</h2>
        {/* child */}
        <h2>Hello World!</h2>
        <h2>Say Hi!</h2>
      </DynamicGreating>
      <StrictMode>
        <HeaderMain />
      </StrictMode>
      <Field />
      <Btn />
    </Wrapper>
  )
}

export { Header }
export default App
