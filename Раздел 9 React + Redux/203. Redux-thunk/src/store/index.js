import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // pass a function
// import reducer from '../reducers'
import heroes from '../reducers/heroes'
import filters from '../reducers/filters'
import { useHttp } from '../hooks/http.hook'
import { activeFilterChanged } from '../actions'
const stringMiddleWare = () => (next) => (action) => {
  // console.log('stringMiddleWare')
  if (typeof action === 'string') {
    return next({
      type: action,
    })
  }
  return next(action)
}

const alertMiddleWare = () => (next) => (action) => {
  // alert(action.type)/

  return next(action)
}

//!! ?????
const filterMiddleWare =
  ({ getState }) =>
  (next) =>
  (action) => {
    let returnValue

    returnValue = next(action)

    const currentFilter = getState().filters

    if ((action.type = 'ACTIVE_FILTER_CHANGED')) {
      const activeFilterChanged = { ...currentFilter, ...action.payload }
      console.log('activeFilterChanged', activeFilterChanged)

      // return next(action)
      returnValue = activeFilterChanged
    }
    return returnValue
  }

const store = createStore(
  combineReducers({ heroes: heroes, filters: filters }),
  compose(
    applyMiddleware(
      ReduxThunk,
      stringMiddleWare,
      alertMiddleWare,
      filterMiddleWare
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // compose(
  //   enhancer, // works with STRING and should follow the rules

  // )
)

export default store
