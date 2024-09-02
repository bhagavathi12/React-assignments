import React,{useState} from 'react'
import ColorSelector from './ColorSelector'
import ColorDisplay from './ColorDisplay'

const ColorApp = () => {
    const [color,setColor] = useState('')

    const selectcolor = (selectedcolor) => {
        console.log(selectedcolor)
        setColor(selectedcolor)
    }

  return (
    <div>
                                           
        <ColorSelector fn={selectcolor}/>
        <ColorDisplay current_color={color}/>
    </div>
  )
}

export default ColorApp