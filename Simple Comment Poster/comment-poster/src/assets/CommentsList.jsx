import React from 'react'

const CommentsList = ({newcomment}) => {
  return (
    <div>
      <ul>
        {newcomment.map((c)=>
        <li>
          <label>{c}</label>
        </li>
        )}
      </ul>
    </div>
  )
}

export default CommentsList