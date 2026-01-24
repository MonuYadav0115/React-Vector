import { useState } from 'react'

import './App.css'

function App() {
  let [Counter,setcounter]= useState(0)

  const Increased = () =>{
    if(Counter < 10)
      setcounter(Counter + 1)
  }

  const Decreased = () => {
    if(Counter > 0 )
      setcounter(Counter - 1)
  }


  return (
    <>
      <h1>Vector India Institute Hyderabad </h1>
      
      <h2>Counter Value {Counter}</h2>
      <button
      onClick={Increased}
      >Increased Value</button>

      <br />

      <button
      onClick={Decreased}
      >Decreased Value </button> 
    </>
  )
}

export default App
