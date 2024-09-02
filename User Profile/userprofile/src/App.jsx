import React from 'react'
import Userprofile from './assets/Userprofile'

const App = () => {
  return (
    <div>
      <Userprofile />
      <Userprofile profilecard = {{Name:'sha',age:'32',bio:'lets run'}}/>


    </div>
  )
}

export default App