import { Component } from 'react/cjs/react.production.min'
import PropTypes from 'prop-types'
import MarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss'
// import thor from '../../resources/img/thor.jpeg'

class CharInfo extends Component {
  state = {
    char: null, // {} === true
    loading: false, // В компоненте инфо пресонажа, должна быть загрузка только по действию клика клиента
    error: false,
  }
  marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar()
    }
  }

  // componentDidCatch(err, info) {
  //   console.log(err, info)
  //   this.setState({ error: true })
  // }

  updateChar = () => {
    const { charId } = this.props
    if (!charId) {
      return
    }
    this.onCharLoading() // spinner

    this.marvelService
      .getCharactersById(charId)
      .then(this.onCharLoaded)
      .catch(this.onError)

    // this.foo.bar = 0 // catch error
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

  render() {
    const { char, loading, error } = this.state

    const skeleton = char || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !char) ? <View char={char} /> : null

    return (
      <>
        <div>
          <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
          </div>
        </div>
        <div class="char__info-overlay"></div>
      </>
    )
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char
  let imgStyle = { objectFit: 'cover' }
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' }
  }
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description}
        {/* In Norse mythology, Loki is a god or jötunn (or both). Loki is the son */}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There are no comics for this character'}
        {comics.map((item, i) => {
          // if (i < 9) return // it is not optimal method
          return (
            <li key={i} className="char__comics-item">
              <a href={item.resourceURI}>{item.name}</a>
            </li>
          )
        })}

        {/* <li className="char__comics-item">Alpha Flight (1983) #50</li>
        <li className="char__comics-item">Amazing Spider-Man (1999) #503</li>
        <li className="char__comics-item">Amazing Spider-Man (1999) #504</li>
        <li className="char__comics-item">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li className="char__comics-item">
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </li>
        <li className="char__comics-item">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="char__comics-item">Vengeance (2011) #4</li>
        <li className="char__comics-item">Avengers (1963) #1</li>
        <li className="char__comics-item">Avengers (1996) #1</li> */}
      </ul>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo
