import { useEffect, useState, useCallback, useMemo } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const countTotal = (num) => {
  console.log('counting...')
  return num + 10
}
const Slider = (props) => {
  //   const slideStateArray = useState()
  //   console.log(slideStateArray)
  const [slide, setSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  const getSomeImages = useCallback(() => {
    // memo func
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
  // если только значение поменялось, то только её вызываем, а не все функ и стейты
  const total = useMemo(() => {
    // нельзя запускать запросы, подписки, так как это хук запускается по время рендаренга и будет баг
    // если это не стейт  который не входит в массив зависимсотей, то это знаечение не пересчитвается
    return countTotal(slide) // remember value
  }, [slide])

  const style = useMemo(
    () => ({
      color: slide > 4 ? 'red' : 'black',
    }),
    [slide]
  )

  useEffect(() => {
    // каждый раз при рендере создаётся новый объект который не был похож на предыдущий, сравниваюются по ссылкам и не равны друг другу
    // и каждый раз запускается useEffect
    console.log('styles!')
  }, [style])

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

        <div style={style} className="text-center mt-5">
          Toral slides: {total}
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
