import React,{useRef} from 'react'

const CommentInput = ({newItem,setNewitem,fn}) => {

const handlesubmit = () => {
  fn(newItem)
  setNewitem('')
}


  return (
    <div>
        <label htmlFor="addcomment">Drop your comments here! : </label>
        <input type="text" value={newItem} onChange={(e)=> setNewitem(e.target.value)}/>
        <button onClick={handlesubmit}>submit</button>
    </div>

  )
}

export default CommentInput