import React from 'react'

const userprofile = ({profilecard}) => {
    const {Name ='bha', Age='30', bio='good and old soul'} = profilecard || {}

const handleAlert = () => {
    alert(bio)
}
    
    
  return (
    <div className='userprofile'>
        <p>Name: {Name}</p>
        <p>Age: {Age}</p>
        <p>Bio: {bio}</p>
        <button onClick={handleAlert}>Show Details</button>
    </div>
  )
}

export default userprofile