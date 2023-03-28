import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages' // find index.js!!!!!!!!!!!!!
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
            {/* Moved route / to the end in order main page was default and deleted
            exact !!!!!!!*/}
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            {/* match it is path 1) params is key = :comicId, value - 232312 */}
            <Route exact path="/comics/:comicId">
              <SingleComicPage />
            </Route>
            <Route path="*">
              <Page404 />
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
