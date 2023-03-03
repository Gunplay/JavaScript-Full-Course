import { Component } from 'react'
// import './employers-add-form.css'
// npm i sass --save  - save dependens
import './employers-add-form.scss'
class EmployersAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      // props: e.target.value,
      // e.target.name - определяем аттрибуты в input: name and salary
      [e.target.name]: e.target.value,
    })
    console.log(e.target.name)
  }

  onSumbit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state.name, this.state.salary)
    this.setState({
      name: '',
      salary: '',
    })
  }
  render() {
    const { name, salary } = this.state
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form onSubmit={this.onSumbit} action="" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name} // value - управ компонент
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $ ?"
            name="salary"
            value={salary} // value - управ компонент
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            +
          </button>
        </form>
      </div>
    )
  }
}

export default EmployersAddForm
