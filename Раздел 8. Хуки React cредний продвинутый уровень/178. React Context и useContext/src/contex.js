import { createContext } from 'react'
// create object with Provider, Consumer
const dataContext = createContext({
  mail: 'name@example.com!',
  text: 'some text',
  forceChangeMail: () => {},
})

export default dataContext
