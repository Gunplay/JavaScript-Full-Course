import { Component } from 'react/cjs/react.production.min'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import MarvelService from '../../services/MarvelService'
import './randomChar.scss'
// import thor from '../../resources/img/thor.jpeg'
import mjolnir from '../../resources/img/mjolnir.png'

class RandomChar extends Component {
  constructor(props) {
    super(props)
    //this.updateChar() // Конструируем так чтобы получали данные сразу, то есть вызов идёт сразу - до нашей верстки, это плохая практика
    // console.log('constructor')
  }
  // class Field
  state = {
    char: {},
    loading: true,
    error: false,
  }
  marvelService = new MarvelService()

  componentDidMount() {
    // this.foo.bar = 0
    this.updateChar()
    // this.timerId = setInterval(this.updateChar, 3000)
    // console.log('mount')
  }

  componentDidUnmount() {
    clearInterval(this.timerId)
    // console.log('unmount')
  }
  onCharLoaded = (char) => {
    this.setState({ char: char, loading: false }) // write new object or char
  }

  onError = () => {
    this.setState({
      loading: false, // no loaddin, if got error
      error: true,
    })
  }

  onCharLoading = () => {
    this.setState({
      loading: true,
    })
  }

  updateChar = () => {
    // console.log('update')
    //                                      max     min - diapozon + min
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    // this.marvelService.getAllCharacters().then((res) => console.log(res))
    this.onCharLoading()
    this.marvelService
      .getCharactersById(id)
      .then(this.onCharLoaded) // return object RES with character
      .catch(this.onError)
  }
  render() {
    // console.log('render')
    // const { updateChar } = this.props
    const { char, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View char={char} /> : null
    // Условный рендеринг
    // if (loading) {
    //   return <Spinner />
    // }

    return (
      <div className="randomchar">
        {/* {loading ? <Spinner /> : <View char={char} />} */}
        {errorMessage}
        {spinner}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button onClick={this.updateChar} className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    )
  }
}
const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char

  let imgStyle = { objectFit: 'cover' }
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' }
  }

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={imgStyle}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default RandomChar
