import { Component } from 'react/cjs/react.production.min'
import PropTypes from 'prop-types'
import AppHeader from '../appHeader/AppHeader'
import RandomChar from '../randomChar/RandomChar'
import CharList from '../charList/CharList'
import WrapperModel from '../wrapperModel/WrapperModel'
import CharInfo from '../charInfo/CharInfo'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import decoration from '../../resources/img/vision.png'

class App extends Component {
  state = {
    selectedChar: null,
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    })
  }

  render() {
    const { selectedChar } = this.state

    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>

          {/* picked char */}
          <ErrorBoundary>
            <CharList onCharSelected={this.onCharSelected} />
          </ErrorBoundary>
          {/* state id */}
          {selectedChar !== null && (
            <WrapperModel
              charInfo={selectedChar}
              onClose={() => this.setState({ selectedChar: null })}
            >
              <CharInfo charId={selectedChar} />
            </WrapperModel>
          )}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  onCharSelected: PropTypes.func,
}

export default App
