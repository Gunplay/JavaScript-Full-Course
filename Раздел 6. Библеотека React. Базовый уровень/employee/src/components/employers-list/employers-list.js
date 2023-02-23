import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

const EmloyersList = ({ data }) => {
  const elements = data.map((item, i) => {
    const { id, ...itemProps } = item
    // return <EmployersListItem name={item.name} salary={item.salary} {...item} />
    return <EmployersListItem key={id} {...itemProps} />
  })
  console.log(elements)
  return (
    <ul className="app-list list-group">
      {/* <EmployersListItem name={data[0].name} salary={data[0].salary} />
      <EmployersListItem name="Alex M." salary={3000} />
      <EmployersListItem name="Carl W." salary={5000} /> */}
      {elements}
    </ul>
  )
}

export default EmloyersList
