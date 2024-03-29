import { useHttp } from '../../hooks/http.hook'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroDeleted,
} from '../../actions'
import HeroesListItem from '../heroesListItem/HeroesListItem'
import Spinner from '../spinner/Spinner'

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const { heroes, heroesLoadingStatus } = useSelector((state) => state)
  console.log(heroes)
  const dispatch = useDispatch()
  const { request } = useHttp()

  useEffect(() => {
    dispatch(heroesFetching())
    request('http://localhost:3001/heroes')
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()))

    // eslint-disable-next-line
  }, [])

  const onDeleteHero = (id) => {
    request(`http://localhost:3001/heroes/${id}`, 'DELETE')
      .then((data) => console.log(data, 'DELETE'))
      .then(dispatch(heroDeleted(id)))
      .catch((err) => console.log(err))
  }

  if (heroesLoadingStatus === 'loading') {
    return <Spinner />
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} classNames="hero">
          <h5 className="text-center mt-5">Героев пока нет</h5>
        </CSSTransition>
      )
    }

    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition key={id} timeout={500} classNames="hero">
          <HeroesListItem {...props} onDeleteHero={() => onDeleteHero(id)} />
        </CSSTransition>
      )
    })
  }

  const elements = renderHeroesList(heroes)
  return (
    <TransitionGroup>
      {elements}
      {/* <ul>{elements}</ul> */}
    </TransitionGroup>
  )
}

export default HeroesList
