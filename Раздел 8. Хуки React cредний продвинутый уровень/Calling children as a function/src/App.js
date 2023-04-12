import './App.css'

const Child = ({ childName, sayHello }) => {
  return <button onClick={() => sayHello(childName)}>{childName}</button>
}
const Parent = ({ children }) => {
  function sayHello(childName) {
    console.log(`Hello from ${childName} the child`)
  }
  return <div>{children(sayHello)}</div>
}

function App() {
  return (
    <div className="App">
      <Parent>
        {(sayHello) => (
          <>
            <Child childName={'Billy'} sayHello={sayHello}></Child>
            <Child childName={'Bob'} sayHello={sayHello}></Child>
            <Child childName={'Artur'} sayHello={sayHello}></Child>
          </>
        )}
      </Parent>
    </div>
  )
}

export default App
