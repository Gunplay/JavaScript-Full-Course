import { useState } from 'react'
import './App.css'
import './square.css'

function getNextColor(color) {
  switch (color) {
    case 'red':
      return 'red'
    case 'green':
      return 'green'
    case 'blue':
      return 'blue'
    default:
      return 'red'
  }
}

function Child({ childName, styleSquare, onClick }) {
  return (
    <div className="square__color" style={styleSquare}>
      <button onClick={onClick}>Change color</button>
    </div>
  )
}

function Parent() {
  const [squares, setSquares] = useState([
    { color: 'red', isSelected: false },
    { color: 'green', isSelected: false },
    { color: 'blue', isSelected: false },
  ])

  const resetColor = () => {
    setSquares([
      { color: 'red', isSelected: false },
      { color: 'green', isSelected: false },
      { color: 'blue', isSelected: false },
    ])
  }

  function changeColor(index) {
    setSquares((prevSquares) => {
      const newSquares = [...prevSquares]

      const currentColor = newSquares[index].color
      console.log(currentColor)
      const nextColor = getNextColor(currentColor)

      newSquares[index].isSelected = true

      const prevIndex = index - 1 < 0 ? newSquares.length - 1 : index - 1
      const nextIndex = index + 1 >= newSquares.length ? 0 : index + 1

      newSquares[prevIndex].isSelected = true
      newSquares[nextIndex].isSelected = true

      newSquares.forEach((square) => {
        if (square.isSelected) {
          square.color = nextColor
        }
        square.isSelected = false
      })

      return newSquares
    })
  }

  return (
    <div className="parent__square">
      <button onClick={resetColor}>Reset Color</button>
      {squares.map((square, index) => (
        <Child
          key={index}
          childName={square.color}
          styleSquare={{ backgroundColor: square.color }}
          onClick={() => changeColor(index)}
        />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Parent>
        console.log(colors)
        {(colors, handleColorChange) =>
          colors.map((color, index) => (
            <Child
              key={index}
              color={color}
              index={index}
              handleColorChange={handleColorChange}
            />
          ))
        }
      </Parent>
    </div>
  )
}

export default App
