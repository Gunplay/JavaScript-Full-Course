// const initialState = 0 // 1) state
const initialState = { value: 0 }

// let state = reducer(indefined, { type: 'INC' })
// reducer must be pure function !!! and don't must be mutate
const reducer = (state = initialState, action) => {
  // N1 step
  switch (action.type) {
    case 'INC': // CAPS
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value + 1,
      }
    case 'DEC':
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value + 1,
      }
    case 'RND':
      return {
        ...state, //newOBJ
        // new prop // old
        value: state.value * action.payload,
      } // reducer must be pure function !!! and don't must be mutate
    default:
      return state // prevState
  }
}

export default reducer
