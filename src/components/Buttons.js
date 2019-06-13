import React from 'react'

const Buttons = ({ clear, number, operator, decimal, calculate }) => {
    return (
     <div>
      <div className="row-first">
        <input type='button' 
            id='clear' 
            value='AC' 
            onClick={clear} 
            />
            <input
              type='button'
              id='divide'
              value='/'
              onClick={operator}
            />
            <input
              type='button'
              id='multiply'
              value='*'
              onClick={operator}
            />
      </div>

      <div className="row-second">
        <input type='button' id='seven' value='7' onClick={number} />
        <input type='button' id='eight' value='8' onClick={number} />
        <input type='button' id='nine' value='9' onClick={number} />
        <input
          type='button'
          id='subtract'
          value='-'
          onClick={operator}
        />
      </div>

      <div className="row-third">
        <input type='button' id='four' value='4' onClick={number} />
        <input type='button' id='five' value='5' onClick={number} />
        <input type='button' id='six' value='6' onClick={number} />
        <input type='button' id='add' value='+' onClick={operator} />
      </div>

      <div className="row-fourth">
        <input type='button' id='one' value='1' onClick={number} />
        <input type='button' id='two' value='2' onClick={number} />
        <input type='button' id='three' value='3' onClick={number} />
        <input
          type='button'
          id='equals'
          value='='
          onClick={calculate}
        />
        <input type='button' id='zero' value='0' onClick={number} />
        <input
          type='button'
          id='decimal'
          value='.'
          onClick={decimal}
        />
      </div>
    </div>
    )
}

export default Buttons;