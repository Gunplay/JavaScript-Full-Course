import './app-filter.css'

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'For promotion' },
    { name: 'salaryMoreThenThousend', label: 'Salary over $1000' },
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name // Choosed filter, true or false when it is  active by click
    const clazz = active ? 'btn-light' : 'btn-outline-light' // clazz used from java, choose class for each button
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
      {/* <button className="btn btn-light" type="button">
          Все сотрудники
        </button>
        <button className="btn btn-outline-light" type="button">
          На повышение
        </button>
        <button className="btn btn-outline-light" type="button">
          З/П больше 1000$
        </button> */}
    </div>
  )
}

export default AppFilter
