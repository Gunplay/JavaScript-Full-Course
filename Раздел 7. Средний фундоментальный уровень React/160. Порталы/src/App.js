import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class Form extends Component {
  state = {
    advOpen: false,
  }

  componentDidMount = () => {
    setTimeout(this.handleClick, 3000)
  }
  handleClick = () => {
    this.setState(({ advOpen }) => ({
      advOpen: !advOpen,
    }))
    console.log('Click')
  }

  render() {
    return (
      <Container>
        <form
          onClick={this.handleClick}
          className="w-50 border mt-5 p-3 m-auto"
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          {this.state.advOpen ? (
            <Portal>
              <Msg />
              <Circle />
            </Portal>
          ) : null}
        </form>
      </Container>
    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  return ReactDOM.createPortal(props.children, node)
}

const Msg = () => {
  return (
    <div
      style={{
        width: '500px',
        height: '150px',
        backgroundColor: 'red',
        position: 'absolute',
        right: '0',
        bottom: '0',
      }}
    >
      Hello
    </div>
  )
}

const Circle = () => {
  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        position: 'absolute',
        right: '50',
        bottom: '50',
      }}
    >
      Around message
    </div>
  )
}
function App() {
  return <Form />
}

export default App

// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }

//   componentDidMount() {
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el);}
// }

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {clicks: 0};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//       this.setState(state => ({      clicks: state.clicks + 1    }));  }

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//          <p>Количество кликов: {this.state.clicks}</p>
//         <Modal>
//            <Child />
//         </Modal>
//       </div>
//       <p>
//           Откройте DevTools браузера,
//           чтобы убедиться, что кнопка
//           не является потомком блока div
//           c обработчиком onClick.
//       </p>
//     );
//   }
// }

// function Child() {
//     return (
//         <div className="modal">
//            <button>Кликните</button>
//         </div>
//   );
// }

// ReactDOM.render(<Parent />, appRoot);
