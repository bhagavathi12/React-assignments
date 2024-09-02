import React from 'react'

const FontSizeControl = ({fn}) => {
    const handleslidervalue = (e) =>{
        const newvalue = e.target.value
        fn(newvalue)
    }
  return (
    <div>
        <label htmlFor="fontsizeslider">Font Size:  </label>
        <input type='range' min={'50'} max={'200'} id='fontsizeslider' onChange={handleslidervalue}/>

    </div>
  )
}

export default FontSizeControl