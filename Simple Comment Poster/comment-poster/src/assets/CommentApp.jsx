import React, { useState } from 'react'
import CommentInput from './CommentInput'
import CommentsList from './CommentsList'

const CommentApp = () => {
    const [comment,setComment] = useState([])

    const [newItem, setNewitem] = useState('')
     
 

    const addcomment = (newcomment) => {
         setComment([...comment,newcomment])
    }
  return (
    <div>
         
        <CommentInput newItem={newItem}
        setNewitem={setNewitem}
        fn={addcomment}/>
        <CommentsList newcomment={comment}/>
    </div>
  )
}

export default CommentApp