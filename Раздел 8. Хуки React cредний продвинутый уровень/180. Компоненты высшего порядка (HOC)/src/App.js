import { useState, useEffect, Component } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'

// const f = (a) => {
//   return (b) => {
//     console.log(a + b)
//   }
// }
// f(1)(2)

// const f = (a) => {
//   return class extends Component {
//     render() {
//       return <h1>Hello</h1>
//     }
//   }
// }
// f(4)

const withSlider = (BaseComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
      setSlide(getData())
    }, [])

    function changeSlide(i) {
      setSlide((slide) => slide + i)
    }
    return (
      <BaseComponent
        {...props} //name="first" {name: 'first'}
        slide={slide}
        autoplay={autoplay}
        changeSlide={changeSlide}
        setAutoplay={setAutoplay}
      />
    )
  }
}

const getDataFromFirstFetch = () => {
  return 10
}
const getDataFromSecondFetch = () => {
  return 20
}

const SliderFirst = (props) => {
  // console.log(props.name)
  //   const [slide, setSlide] = useState(0)

  //   useEffect(() => {
  //     setSlide(getDataFromFirstFetch())
  //   }, [])

  //   function changeSlide(i) {
  //     setSlide((slide) => slide + i)
  //   }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">Active slide {props.slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
        </div>
      </div>
    </Container>
  )
}

const SliderSecond = (props) => {
  //   console.log(props.name)
  //   const [slide, setSlide] = useState(0)
  //   const [autoplay, setAutoplay] = useState(false)

  //   useEffect(() => {
  //     setSlide(getDataFromSecondFetch())
  //   }, [])

  //   function changeSlide(i) {
  //     setSlide((slide) => slide + i)
  //   }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {props.slide} <br />
          {props.autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.setAutoplay((autoplay) => !props.autoplay)}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  )
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)

const withLogger = (WrappedComponent, backgroundColor) => (props) => {
  console.log(props)
  // useEffect(() => {
  //   console.log('first render')
  // }, [])
  // const [color, setColor] = useState()

  const divStyle = {
    backgroundColor: backgroundColor,
    // borderRadius: '5px',
  }
  return (
    <div style={divStyle}>
      <WrappedComponent {...props} />
    </div>
  )
}

const Hello = (props) => {
  console.log(props.name)
  return <h1 style={{ color: 'white' }}>Hello</h1>
}

const Buy = (props) => {
  console.log(props.name)
  return <h1>Bye</h1>
}

const Button = (props) => {
  const [color, setColor] = useState()

  const changeColor = () => {
    setColor('yellow')
  }

  const buttonStyle = {
    backgroundColor: color,
    height: '44px',
    borderRadius: '5px',
  }
  return (
    <div style={buttonStyle}>
      <button type="button" onClick={changeColor}>
        {/* <h1>Germany</h1> */}
        Click and will black color
      </button>
    </div>
  )
}
const HelloWidth = withLogger(Hello, 'black')({ name: 'test1' })
const BuyWidth = withLogger(Buy, 'red')
const Btn = withLogger(Button)
function App() {
  return (
    <>
      {/* <SliderFirst />
      <SliderSecond /> */}
      {/* <Hello /> */}
      <HelloWidth />
      <BuyWidth name="bye" />
      <Btn />

      <SliderWithFirstFetch name="first" />
      <SliderWithSecondFetch name="second" />
    </>
  )
}

export default App
