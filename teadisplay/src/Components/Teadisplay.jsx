import React from 'react'

const Teadisplay = ({name,price,description}) => {
    return (
      <div className= 'teadisplay'>
        <h3>Tea Name: {name}</h3>
        <h3>price: {price}</h3>
        <p>Description:{description}</p>
      </div>
  )
}
Teadisplay.defaultProps = {
  name:'3 roses',price:100,description:'Three Roses Tea is a blend of high-quality Assam black tea leaves, known for its bold flavor and rich aroma. It is popular for its strong, brisk taste and is often enjoyed with milk and sugar.'} 
export default Teadisplay


