import { Component } from 'react'
import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import { useState } from 'react'
import EmloyersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // state должен быть иммутабильным. нельзя менять наа прямую объект
      data: [
        {
          name: 'John C.',
          salary: 800,
          increase: false,
          rise: true,
          adward: false,
          id: 1,
        },
        {
          name: 'Alex M.',
          salary: 3000,
          increase: true,
          rise: false,
          adward: false,
          id: 2,
        },
        {
          name: 'David C.',
          salary: 5000,
          increase: false,
          rise: false,
          adward: false,
          id: 3,
        },
        {
          name: 'Kirill A.',
          salary: 15000,
          increase: false,
          rise: false,
          adward: false,
          id: 4,
        },
      ],
      term: '',
    }
    this.maxId = 5
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      }
      // const index = data.findIndex((elem) => elem.id === id)
      // data.splice(index, 1) //мутация из-за splice, надо соблюдать принципы иммутабельности
      // Надо соблюдать принципы React- создаём нвойы объект, но уже без выбранного id
      // const before = data.slice(0, index) // до найденнного элемента копируем
      // const after = data.slice(index + 1) //  копируем после этого элемента и до конца массива

      // const newArr = [...before, ...after]
    })
  }

  additem = (name, salary) => {
    if (!name || salary === '') {
      console.log('Name or salary cannot be empty')
      return
    }
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr,
      }
    })
  }
  // Подъём состояния выше по иерахии
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        } else console.log(item.rise)
        return item
      }),
    }))
    // this.setState(({ data }) => {
    //
    // const index = data.findIndex((elem) => elem.id === id)
    // const old = data[index] // old
    // const newItem = { ...old, increase: !old.increase } // create new Object
    // console.log(newItem)
    // // Формируем новый массив объектов, с новый объктом
    // const newArr = [
    //   ...data.slice(0, index),
    //   newItem,
    //   ...data.slice(index + 1),
    // ]
    // return {
    //   data: newArr,
    // }
    // const array = [10, 20]
    // const indexA = array.findIndex((element) => element > 25)
    // console.log(indexA) // 2
    // })
    console.log(`Increase this: ${id}`)
  }

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item
  //     }),
  //   }))
  //   console.log(`Rise this ${id}`)
  // }
  //            arr   string
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term: term })
  }
  render() {
    const { data, term } = this.state
    const countEmployees = data.length
    const receiveAnAward = data.filter((item) => item.increase === true).length
    const visibleData = this.searchEmp(data, term)
    return (
      <div className="app">
        <AppInfo
          countEmployees={countEmployees}
          receiveAnAward={receiveAnAward}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmloyersList
          data={visibleData}
          onDelete={this.deleteItem}
          // onToggleEncrease={this.onToggleEncrease}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.additem} />
      </div>
    )
  }
}

export default App
