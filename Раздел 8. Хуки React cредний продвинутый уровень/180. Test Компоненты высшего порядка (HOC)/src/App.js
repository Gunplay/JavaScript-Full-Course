import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
// With!!!! name HOC
const withSlider = (BaseComponent, getData) => {
  return (props) => {
    console.log('props inside', props.data)
    const [slide, setSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
      setSlide(getData())
    }, [])

    function changeSlide(i) {
      setSlide((slide) => slide + i)
    }
    // {...props} = {name: 'awdwadad'}
    return (
      <BaseComponent
        {...props}
        slide={slide}
        autoplay={autoplay}
        changeSlide={changeSlide}
        setAutoplay={setAutoplay}
        additionalProp="This is an additional prop!"
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
  console.log('props Second Slider', props)
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

const withLogger = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log('first render')
  }, [])

  return <WrappedComponent {...props} />
}

const Hello = (props) => {
  return <h1>Hello {props.name}</h1>
}
const OneWithHello = withLogger(Hello)

function App() {
  const [data, setData] = useState({ name: 'Vlad', surname: 'Gavrilov' })
  return (
    <>
      <OneWithHello name="Vasya" />
      <SliderWithFirstFetch data={data} />
      <SliderWithSecondFetch />
    </>
  )
}

export default App
