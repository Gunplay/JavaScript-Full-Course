import { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../actions'
import { inc, dec, rnd } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

// import { bindActionCreators } from 'redux'

const Counter = () => {
  // same to mapStateToProps!!!
  //initialState    0
  const counter = useSelector((state) => state.counter) // used for get state
  // const counter = useSelector((state) => state) OBJECT
  const dispatch = useDispatch()
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">
        RND
      </button>
    </div>
  )
}

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args))
//   }

// ACTION CREATOR // STEP 1

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value,
//   }
// }

// export default connect(mapStateToProps, actions)(Counter)
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter
