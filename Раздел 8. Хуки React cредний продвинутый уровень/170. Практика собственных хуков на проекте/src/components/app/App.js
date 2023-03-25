import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../appHeader/AppHeader'
import RandomChar from '../randomChar/RandomChar'
import CharList from '../charList/CharList'
import WrapperModel from '../wrapperModel/WrapperModel'
import CharInfo from '../charInfo/CharInfo'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'

const App = () => {
  const [selectedChar, setChar] = useState(null)

  const onCharSelected = (id) => {
    setChar(id)
  }

  const onClose = (e) => {
    console.log(e.target)
    // Добавьте здесь логику, которая будет выполняться при нажатии на клавишу Esc

    setChar(null)
  }

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>

        {/* picked char */}
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        {/* state id */}
        {selectedChar && (
          <WrapperModel
            charInfo={selectedChar}
            onBtnClose={onClose}
            // onClose={() => this.setState({ selectedChar: null })}
          >
            <CharInfo charId={selectedChar} />
          </WrapperModel>
        )}
      </main>
    </div>
  )
}

// App.propTypes = {
//   onCharSelected: PropTypes.func,
// }

export default App
