import React, { useEffect, useState } from 'react'

const userprofile = ({profilecard}) => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users/1'
    const {Name ='bha', Age='30', bio='good and old soul'} = profilecard || {}
    const [showBio,setShowBio] = useState(false)

    const handleClick = () => {
      setShowBio(!showBio)  
    }
    useEffect(() => {
      const fetchData = async () => {
        try{

        }catch (err)
      }
    },[])
         
  return (
    <div className='userprofile'>
        <p>{Name}</p>
        <p>Age: {Age}</p>
        {showBio && <p>Bio: {bio}</p>}
        <button onClick={handleClick}> {showBio ? 'Hide Bio' : 'Show Bio'} </button>
        
    </div>
  )
}

export default userprofile