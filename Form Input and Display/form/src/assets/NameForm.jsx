import React,{useState} from 'react'

const NameForm = () => {
  const [name,setName] = useState(' ')
  const [submittedname,setSubmittedname] = useState(' ')

 const handleChange = (e) =>{
  setName(e.target.value)
} 
  
const handleSubmit = (e) => {
  e.preventDefault()
  setSubmittedname(name)  
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name" id='Name'></label>
        <input 
          type="text" value={name}placeholder='Enter your name: ' id="Name" onChange={handleChange}/>
          <button>Submit</button>
      </form>
      {submittedname && <p>{submittedname}</p>}
    </div>
  )
}

export default NameForm

