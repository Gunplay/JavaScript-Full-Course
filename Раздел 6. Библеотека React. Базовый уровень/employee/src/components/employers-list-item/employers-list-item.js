import './employers-list-item.css'

const EmployersListItem = (props) => {
  // Now we keep track of the state at the top level!!!

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     increase: false,
  //     like: false,
  //     forDismissal: false,
  //   }
  // }

  // onIncrease = () => {
  //   this.setState(({ increase }) => ({
  //     // круглые скоби что бы не прописывать return
  //     increase: !increase,
  //   }))
  //   // this.setState((state) => ({
  //   //   increase: !state.increase,
  //   // }))
  // }

  // onUpSalary = () => {
  //   console.log(this)
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }))
  // }

  const { data, name, salary, onDelete, onToggleProp, increase, rise } = props
  console.log(data.rise)
  // const { increase, like } = this.state

  let classNames = 'list-group-item d-flex justfify-content-between'
  // let classRed = ''
  if (increase) {
    classNames = classNames + ' increase'
  }
  if (rise) {
    classNames = classNames + ' like'
  }

  return (
    <li className={classNames}>
      <span
        onClick={onToggleProp}
        // onClick={this.onforDismissal}
        className="list-group-item-label"
        data-toggle="rise"
      >
        {name}
      </span>
      <span>{data.rise ? 'Adward' : data.rise}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' ' + 'UAH'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <em className="fas fa-cookie"></em>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <em className="fas fa-trash"></em>
        </button>
        <em className="fas fa-star"></em>
      </div>
    </li>
  )
}

export default EmployersListItem
