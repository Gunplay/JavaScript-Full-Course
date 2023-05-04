import { createAction } from '@reduxjs/toolkit'

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetching = createAction('HEROES_FETCHING') // string!!!!!!!!

// export const heroesFetched = (heroes) => {
//   return {
//     type: 'HEROES_FETCHED',
//     payload: heroes,
//   }
// }

export const heroesFetched = createAction('HEROES_FETCHED') //  payload: heroes, - auto create

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR',
  }
}
