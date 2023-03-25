import { useState } from 'react'
import RandomChar from '../randomChar/RandomChar'
import CharList from '../charList/CharList'
import CharInfo from '../charInfo/CharInfo'
import WrapperModel from '../wrapperModel/WrapperModel'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'

const MainPage = () => {
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
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <ErrorBoundary>
        <CharList onCharSelected={onCharSelected} />
      </ErrorBoundary>
      {selectedChar && (
        <WrapperModel
          charInfo={selectedChar}
          onBtnClose={onClose}
          // onClose={() => this.setState({ selectedChar: null })}
        >
          <CharInfo charId={selectedChar} />
        </WrapperModel>
      )}
    </>
  )
}

export default MainPage
