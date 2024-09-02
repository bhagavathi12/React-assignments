import React from 'react'

const ColorDisplay = ({current_color}) => {
    const themeStyle = {
        backgroundColor: current_color,
        height:'100px',
        width:'100px',
        border: '1px solid',
        borderRadius:'20px',
        margin:'20px', 
    }  

  return (
    <div style={themeStyle} className='colordisplay'></div>
  )
}

export default ColorDisplay