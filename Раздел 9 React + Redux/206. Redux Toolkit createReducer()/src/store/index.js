// import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
//                                              TOOLKIT include all FUNCTION higher!!!
import { configureStore } from '@reduxjs/toolkit'
// import ReduxThunk from 'redux-thunk'
import reducer from '../reducers'
// import { getDefaultMiddleware } from '@reduxjs/toolkit'

const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    })
  }
  return next(action)
}

const store = configureStore({
  reducer: { heroes, filters },
  //   middleware: [ReduxThunk, stringMiddleWare],
  middleware: (getDefaultMiddleware) =>
    // incudes default middleWare  arrays
    getDefaultMiddleware().concat(stringMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
})
// const store = createStore(
//     combineReducers({ heroes: heroes, filters: filters }),
//     compose(
//       applyMiddleware(ReduxThunk, stringMiddleWare),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// compose(
//   enhancer, // works with STRING and should follow the rules

// )
// )

export default store
