import { useContext } from 'react'
import dataContext, { dataSecondContext } from './contex'

const InputComponent = () => {
  const context = useContext(dataContext)
  console.log('context', context)

  const contextSecond = useContext(dataSecondContext)
  console.log('contextSecond', contextSecond)
  return (
    <input
      value={context.mail}
      onChange={context.onChangeinput}
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      onFocus={context.forceChangeMail}
    ></input>
  )
}

export default InputComponent
