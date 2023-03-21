import { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// const getSomeImages = () => {
//   console.log('fetching')
//   return [
//     'https://www.imgonline.com.ua/examples/replaced-color-4.jpg',
//     'https://www.imgonline.com.ua/examples/red-yellow-flower.jpg',
//   ]
// }

const Slider = (props) => {
  //   const slideStateArray = useState()
  //   console.log(slideStateArray)
  const [slide, setSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  const getSomeImages = useCallback(() => {
    console.log('fetching')
    return [
      'https://www.imgonline.com.ua/examples/replaced-color-4.jpg',
      'https://www.imgonline.com.ua/examples/red-yellow-flower.jpg',
    ]
  }, [])

  // function logging() {
  //   // console.log('log!')
  // }

  // useEffect(() => {
  //   document.title = `Slide ${slide}` // DidMount and DidUpdate, каждый раз функцию обновляется, что бы не было замыкания

  //   window.addEventListener('click', logging)

  //   return () => {
  //     window.removeEventListener('click', logging)
  //   }
  // }, [slide]) // если одна из зависимостей не изменилась, то эффект будет пропущен
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
        {/* {getSomeImages().map((url, i) => {
          return <img key={i} className="d-block w-100" src={url} alt="slide" />
        })} */}
        <Slide getSomeImages={getSomeImages} />
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

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(getSomeImages)
  }, [getSomeImages]) // когда имзениться сама функция (urel, param request)

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  )
}

function App() {
  return <Slider />
}

export default App
