import { useState, useEffect } from 'react'
import './App.css'

function useCounters(intialValue) {
  const [value, setValue] = useState(intialValue)

  useEffect(() => {
    // 'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
    async function fetchData() {
      try {
        const res = await fetch(
          'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
        )
        const resText = await res.text()
        setValue(resText)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const incCounter = () => {
    if (value < 50) {
      setValue((value) => value + 1)
    }
  }

  const decCounter = () => {
    if (value > -50) {
      setValue((value) => value - 1)
    }
  }

  const rndCounter = () => {
    setValue(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }

  const resetCounter = () => {
    setValue(0)
  }

  return { value, incCounter, decCounter, rndCounter, resetCounter }
}

const Counter = (props) => {
  // const fistCount = useCounters(props.counter)
  console.log(props)
  const { value, incCounter, decCounter, rndCounter, resetCounter } =
    useCounters(props.counter)

  return (
    <div className="component">
      <div className="counter">{value}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const RndCounter = (props) => {
  // const secondCounter = useCounters(props.counter)
  const { value, incCounter, decCounter, rndCounter, resetCounter } =
    useCounters(props.counter)
  return (
    <div className="component">
      <div className="counter">{value}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Counter counter={0} />
      <RndCounter counter={5} />
    </>
  )
}

export default App
