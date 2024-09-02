import React from 'react'

const ColorSelector = ({fn}) => {

  return (
    <div className='colorselector'>
        <button className='button' onClick={()=>fn('red')}>red</button>
        <button className='button' onClick={()=>fn('green')}>green</button>
        <button className='button' onClick={()=>fn('blue')}>blue</button>
        <button className='button' onClick={()=>fn('yellow')}>yellow</button>
        <button className='button' onClick={()=>fn('orange')}>orange</button>
        <button className='button' onClick={()=>fn('aqua')}>aqua</button>

    </div>
  )
}

export default ColorSelector