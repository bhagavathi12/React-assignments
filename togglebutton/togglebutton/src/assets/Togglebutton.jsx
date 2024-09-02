import React from 'react'
import { useState } from 'react'

const togglebutton = () => {
    let [toggle,setToggle] = useState('on') 
return (
    <div>
        <h1 className='title'>ToggleButton</h1> 
        <button className='btn' onClick={()=>setToggle((toggle==='on')?'off':'on')}>{toggle}</button>
    </div>
  )
}

export default togglebutton