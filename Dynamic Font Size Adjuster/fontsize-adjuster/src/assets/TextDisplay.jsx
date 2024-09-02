import React from 'react'

const TextDisplay = ({fontsize}) => {
    const inlinestyle = {
        fontSize:fontsize +'px'
    }


  return (
    <div>
        <p style={inlinestyle}>Sample Text</p>
    </div>
  )
}

export default TextDisplay