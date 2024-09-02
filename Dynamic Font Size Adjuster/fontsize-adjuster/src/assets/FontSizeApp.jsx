import React,{useState} from 'react'
import FontSizeControl from './FontSizeControl'
import TextDisplay from './TextDisplay'

const FontSizeApp = () => {
    const [size,setSize] = useState('')
    const settingsize = (updatedsize)=>{
        console.log(updatedsize)
        setSize(updatedsize)

    }

  return (
    <div>
        <FontSizeControl fn={settingsize} />
        <TextDisplay fontsize={size}/>
    </div>
  )
}

export default FontSizeApp