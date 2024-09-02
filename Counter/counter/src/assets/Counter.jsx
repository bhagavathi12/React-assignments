import React,{useState} from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

  return (
    <div>
        <button style={{padding:'10px',fontSize:'x-large', backgroundColor:'aqua', borderRadius:'25%',cursor:'pointer'}} onClick={()=>setCount(count+1)}>Add</button>
        <span style={{marginLeft:'20px',fontSize:'large'}}>Current Count: {count}</span>
    </div>
  )
}

export default Counter 

