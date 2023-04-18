const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumpbotron">
      <h1>{counter}</h1>
      <div onClick={dec} className="btn btn-primary">
        DEC
      </div>
      <div onClick={inc} className="btn btn-primary">
        INC
      </div>
      <div onClick={rnd} className="btn btn-primary">
        RND
      </div>
    </div>
  )
}

export default Counter
