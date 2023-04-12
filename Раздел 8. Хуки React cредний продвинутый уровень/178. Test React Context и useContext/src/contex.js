import { createContext } from 'react'
// create object with Provider, Consumer
export const dataContext = createContext({
  mail: 'name@example.com!',
  text: 'some text',
  forceChangeMail: () => {},
})

export const dataSecondContext = createContext({
  mail: 'name@example.com!',
  text: 'some text',
  onChangeinput: (e) => {
    setText({ ...text, mail: e.target.value })
  },
})
