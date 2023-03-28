import { Link, NavLink } from 'react-router-dom'
import './appHeader.scss'

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        {/* <a href="#">
                    <span>Marvel</span> information portal
                </a> */}
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            {/* exact changed on end 2) activeStyle={{ color: '#9f0012' }} on  style={({}) =>}*/}
            <NavLink
              end
              // activeStyle={{ color: '#9f0012' }}
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#9f0012' : 'inherit',
              })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              end
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? '#9f0012' : 'inherit',
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader
