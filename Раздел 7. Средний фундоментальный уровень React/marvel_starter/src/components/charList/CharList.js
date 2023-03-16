import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import MarvelService from '../../services/MarvelService'
import './charList.scss'

class CharList extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    charList: [],
    loading: true,
    loadingScroll: false,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
    // id: uuidv4(),
  }

  marvelService = new MarvelService()

  // handleScroll = () => {
  //   const { loadingScroll } = this.state
  //   if (loadingScroll) {
  //     return
  //   }
  //   const { innerHeight } = window
  //   const { bottom } = this.listRef.getBoundingClientRect()
  //   if (bottom <= innerHeight) {
  //     this.onRequest(this.offset + 10)
  //   }
  // }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll)
    this.onRequest(this.offset) // N1
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  onRequest = async (offset) => {
    this.onCharListLoading() // N2
    try {
      const response = await this.marvelService.getAllCharacters(offset) //N3 newState
      this.onCharListLoaded(response)
      console.log('res:', response)
    } catch (err) {
      this.onError(err)
    }
    // .then(this.onCharListLoaded)
    // .catch(this.onError)
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    })
  }

  onCharListLoaded = (newCharList) => {
    console.log(newCharList)
    let ended = false
    if (newCharList?.length < 10) {
      ended = true
    }
    //N 4
    this.setState(({ offset, charList }) => ({
      // loadingScroll: true,
      //              [ null ]   newItem
      charList: [...charList, ...newCharList],
      loading: false,

      newItemLoading: false,
      offset: offset + 10,
      charEnded: ended, //  ended = true
      // loadingScroll: false,
      // id: uuidv4(),
    }))
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  itemRefs = []

  setRef = (ref) => {
    this.itemRefs.push(ref)
  }

  focusOnItem = (id) => {
    // Я реализовал вариант чуть сложнее, и с классом и с фокусом
    // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
    // На самом деле, решение с css-классом можно сделать, вынеся персонажа
    // в отдельный компонент. Но кода будет больше, появится новое состояние
    // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

    // По возможности, не злоупотребляйте рефами, только в крайних случаях
    this.itemRefs.forEach((item) => {
      item.classList.remove('char__item_selected')
    })
    this.itemRefs[id].classList.add('char__item_selected')
    this.itemRefs[id].focus()
  }

  // Этот метод создан для оптимизации,
  // чтобы не помещать такую конструкцию в метод render
  renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: 'cover' }
      if (
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ) {
        imgStyle = { objectFit: 'unset' }
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={this.setRef}
          // ref={(ref) => (this.listRef = ref)}
          key={item.id}
          onClick={() => {
            this.props.onCharSelected(item.id)
            this.focusOnItem(i)
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              this.props.onCharSelected(item.id)
              this.focusOnItem(i)
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      )
    })
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>
  }

  render() {
    const { charList, loading, error, offset, newItemLoading, charEnded } =
      this.state

    const items = this.renderItems(charList)

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? items : null

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button
          className="button button__main button__long"
          disabled={newItemLoading}
          style={{ display: charEnded ? 'none' : 'block' }}
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    )
  }
}

// CharList.propTypes = {
//   onCharSelected: PropTypes.func.isRequired,
// }

export default CharList
