import './app-info.css'

const AppInfo = ({ countEmployees, receiveAnAward }) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in company N:</h1>
      <h2>Total number of employees: {countEmployees}</h2>
      <h2>The award will be received: {receiveAnAward}</h2>
    </div>
  )
}

export default AppInfo
