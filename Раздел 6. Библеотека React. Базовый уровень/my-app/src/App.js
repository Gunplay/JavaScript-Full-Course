import { Component, StrictMode } from 'react'
import './App.css'

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name()}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  )
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
      <WhoAmI
        name={() => {
          return 'John'
        }}
        surname="Corith"
        link="insta.com"
      />
      <WhoAmI
        name={() => {
          return 'John'
        }}
        surname="Corith"
        link="insta.com"
      />
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
