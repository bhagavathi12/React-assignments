import Teadisplay from "./Components/Teadisplay"

function App() {
  const tea = [  {
    name: 'Earl Grey',
    price: 120,
    description: 'A classic black tea infused with the fragrant essence of bergamot, known for its distinctive citrus flavor.',
  },
  {
    name: 'Green Dragon',
    price: 180,
    description: 'A delicate green tea with subtle floral notes and a smooth, refreshing taste.',
  },
  {
    name: 'Jasmine Blossom',
    price: 220,
    description: 'A fragrant green tea blended with jasmine blossoms, offering a sweet, floral aroma and a soothing flavor.',
  },
  {name:'Tajmahal',price:'250',description: 'A luxurious blend of high-quality Assam leaves, offering a robust flavor and rich aroma' },
{}]


  return (
    <div>
       <Teadisplay /> {/* called to display default probs */}
       <Teadisplay 
      name='Chakragold' price='200' description=' A premium blend of aromatic black tea and exotic spices, crafted to elevate your tea experience with a rich, invigorating flavor.'/> {/* called by passing hardcoded values from parent. */}
      
      {tea.map((t) => <Teadisplay name={t.name} price={t.price} description={t.description}/>)}  {/* passing array of objects using map function */}
    </div>
  )
}

export default App
