import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage, ComicsPage } from '../pages' // find index.js!!!!!!!!!!!!!
import PropTypes from 'prop-types'
import AppHeader from '../appHeader/AppHeader'

// import MainPage from '../pages/MainPage'
// import ComicsPage from '../pages/ComicsPage'

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            {/* либо корневой компонент ставить на последнее место */}
            {/* Полное совпадение пути exact - 2*/}
            <Route exact path="/">
              <MainPage />
            </Route>

            <Route exact path="/comics">
              <ComicsPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

// App.propTypes = {
//   onCharSelected: PropTypes.func,
// }

export default App
