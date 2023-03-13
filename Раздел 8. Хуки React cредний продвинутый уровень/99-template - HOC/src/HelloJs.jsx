import React, {useEffect} from 'react'

//                                       2)add param  3)
const withLogger = (WrappedComponent) => (test) => (props) => {
  console.log('Config:', test)
  console.log('props', props)

  
  useEffect(() => {
    console.log('first render')
  }, [])
  // const [color, setColor] = useState()

  // const divStyle = {
  //   backgroundColor: backgroundColor,
  //   // borderRadius: '5px',
  // }

  if (test.name !== 'test123') return <div>Not auth</div>
  return (
    // <div style={divStyle}>
    <WrappedComponent {...props} {...test} />
    // </div>
  )
}

const Hello = (props) => {
  console.log('Hello component', props)
  return <h1 style={{ color: 'black' }}>Hello</h1>
}


export default withLogger(Hello)({name: 'test12'}) // pass congif to the component

