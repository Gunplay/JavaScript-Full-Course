import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import MarvelService from '../../services/MarvelService'
import './charList.scss'

const CharList = (props) => {
  const [charList, setCharList] = useState([])
  const [loading, setLoading] = useState(true)
  // loadingScroll: false,
  const [error, setError] = useState(false)
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [offset, setOffset] = useState(210)
  const [charEnded, setCharEnded] = useState(false)
  // id: uuidv4(),

  const marvelService = new MarvelService()
  // useEffect запускается после рендера, то есть когда функция существует внутри нашегго компонента
  useEffect(() => {
    onRequest(offset)
  }, []) // Когда массив пустой - функ вып один раз

  const onRequest = async (offset) => {
    onCharListLoading() // N2
    try {
      const response = await marvelService.getAllCharacters(offset) //N3 newState
      onCharListLoaded(response)

      console.log('res:', response)
    } catch (err) {
      onError(err)
    }
    // .then(this.onCharListLoaded)
    // .catch(this.onError)
  }

  const onCharListLoading = () => {
    setNewItemLoading(true)
  }

  const onCharListLoaded = (response) => {
    console.log(response.data)
    let ended = false
    if (response.data?.length < 10) {
      ended = true
    }
    //N 4
    // ASYNC TASK
    // loadingScroll: true,
    //                         [ null ]   newItem
    setCharList((charList) => [...charList, ...response.data])
    setLoading((loading) => false)
    setNewItemLoading((newItemLoading) => false)
    setOffset((offset) => response.offset)
    setCharEnded((charEnded) => ended)
    // loadingScroll: false,
    // id: uuidv4(),
  }

  const onError = () => {
    setError(true)
    setLoading((loading) => false)
  }

  const itemRefs = useRef([]) // только на верхнем уровне

  //  setRef = (ref) => {
  //   this.itemRefs.push(ref)
  // }

  const focusOnItem = (id) => {
    // Я реализовал вариант чуть сложнее, и с классом и с фокусом
    // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
    // На самом деле, решение с css-классом можно сделать, вынеся персонажа
    // в отдельный компонент. Но кода будет больше, появится новое состояние
    // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

    // По возможности, не злоупотребляйте рефами, только в крайних случаях
    itemRefs.current.forEach((item) => {
      item.classList.remove('char__item_selected')
    })
    itemRefs.current[id].classList.add('char__item_selected')
    itemRefs.current[id].focus()
  }

  const handleLoadMore = () => {
    // this.setState({ ...this.state, offset: this.state.offset + 10 })

    setOffset(offset + 10)
    onRequest(offset + 10)
  }
  // Этот метод создан для оптимизации,
  // чтобы не помещать такую конструкцию в метод render
  function renderItems(arr) {
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
          ref={(el) => (itemRefs.current[i] = el)}
          // ref={(ref) => (this.listRef = ref)}
          key={item.id}
          onClick={() => {
            props.onCharSelected(item.id)
            focusOnItem(i)
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              props.onCharSelected(item.id)
              focusOnItem(i)
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

  const items = renderItems(charList)

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
        onClick={handleLoadMore}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

// CharList.propTypes = {
//   onCharSelected: PropTypes.func.isRequired,
// }

export default CharList
