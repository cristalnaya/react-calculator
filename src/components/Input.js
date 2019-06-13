import React from 'react'


const Input = ({ display, input }) => {
  return (
    <React.Fragment>
      <div className="input-panel">
        <div className='formula' id='input'>{input}</div>
        <div id='display'>{display}</div>
      </div>
    </React.Fragment>
  )
}

export default Input;