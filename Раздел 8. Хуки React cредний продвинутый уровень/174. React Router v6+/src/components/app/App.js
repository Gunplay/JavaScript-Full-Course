import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
          <Routes>
            {/* Switch - V5*/}
            {/* либо корневой компонент ставить на последнее место */}
            {/* Полное совпадение пути exact - 2*/}
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />

            {/* - V5 - <Route exact path="/comics">
              <ComicsPage />
              </Route> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

// App.propTypes = {
//   onCharSelected: PropTypes.func,
// }

export default App
