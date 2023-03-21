import { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// class SliderComp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       slide: 0,
//       autoplay: false,
//     }
//   }

//   componentDidMount() {
//     document.title = `Slide ${this.state.slide}`
//   }

//   componentDidUpdate() {
//     document.title = `Slide ${this.state.slide}`
//   }
//   nextSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }))
//   }

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }))
//   }
//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{' '}
//             {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.nextSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.nextSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     )
//   }
// }

const Slider = (props) => {
  //   const slideStateArray = useState()
  //   console.log(slideStateArray)
  const [slide, setSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  function logging() {
    console.log('log!')
  }

  useEffect(() => {
    console.log('effect')
    document.title = `Slide ${slide}` // DidMount and DidUpdate, каждый раз функцию обновляется, что бы не было замыкания

    window.addEventListener('click', logging)

    return () => {
      window.removeEventListener('click', logging)
    }
  }, [slide]) // если одна из зависимостей не изменилась, то эффект будет пропущен
  // когда пустой массив - функ вызыввется один раз, если с slide, несколько раз

  function changeSlide(i) {
    //       callback async
    setSlide((slide) => slide + i) // N! state 1
    // setSlide((slide) => slide + i) // N2 state 2 = 4 = 6 = 8
    // setSlide(slide + i)
    // setSlide(slide + i)
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay)
  }

  //   const [state, setState] = useState({ slide: 0, autoplay: false })

  //   function changeSlide(i) {
  //     //       callback async
  //     setState((state) => ({
  //       //   slide: state.slide + i, // it is wrond, rewriting state
  //       ...state, // new variable (obj)
  //       slide: state.slide + i,
  //     })) // N! state 1
  //   }

  //   function toggleAutoplay() {
  //     setState((state) => ({
  //       ...state,
  //       autoplay: !state.autoplay,
  //     }))
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
          Active slide {slide} <br />
          {autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  )
}

function App() {
  const [slide, setSlider] = useState(true)

  return (
    <>
      {/* <SliderComp /> */}
      <button onClick={() => setSlider(false)}>Click</button>
      {slide ? <Slider /> : null}
    </>
  )
}

export default App
