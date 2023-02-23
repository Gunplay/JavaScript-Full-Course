import './employers-list-item.css'

const EmployersListItem = ({ name, salary, increase }) => {
  let classNames = 'list-group-item d-flex justfify-content-between'

  if (increase) {
    classNames = classNames + ' increase'
  }
  return (
    <li className={classNames}>
      <span className="list-group-item-label">{name}</span>

      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' ' + 'UAH'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <em className="fas fa-cookie"></em>
        </button>

        <button type="button" className="btn-trash btn-sm">
          <em className="fas fa-trash"></em>
        </button>
        <em className="fas fa-star"></em>
      </div>
    </li>
  )
}

export default EmployersListItem
