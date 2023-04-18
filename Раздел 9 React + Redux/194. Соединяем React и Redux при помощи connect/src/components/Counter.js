import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import { bindActionCreators } from 'redux'

// const Counter = ({counter, inc, dec, rnd}) => {
//     return (
//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     )
// }

class Counter extends Component {
  render() {
    const { counter, inc, dec, rnd } = this.props
    return (
      <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primary">
          DEC
        </button>
        <button onClick={inc} className="btn btn-primary">
          INC
        </button>
        <button onClick={rnd} className="btn btn-primary">
          RND
        </button>
      </div>
    )
  }
}

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args))
//   }

// ACTION CREATOR // STEP 1

// Промежуточная функция 2) store.dipatch()
// const incDispatch = () => dispatch(inc()) // action creator
// const incDispatch = () => bindActionCreator(inc, dispatch) // action creator
// const decDispatch = () => bindActionCreator(dec, dispatch)
// // const rndDispatch = (value) => dispatch(rnd(value))
// const rndDispatch = (value) => bindActionCreator(rnd, dispatch)

// STEP 2

// REDUX bindActionCreators
//const incDispatch = bindActionCreator
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// )
const mapStateToProps = (state) => {
  return {
    counter: state.value,
  }
}

// const mapDispatchToProps = (dispatch) => {
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
//   return {
//     inc,
//     // inc: () => dispatch(inc()), // because we have dispatch in the parametr func
//     dec: () => dispatch(dec()),
//     rnd: () => {
//       // const value = Math.floor(Math.random() * 10)
//       rnd()
//     },
//   }
// SAME TO
// return bindActionCreators(actions, dispatch)
// }
//                                    OBJECT?
//function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(mapStateToProps, actions)(Counter)
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
