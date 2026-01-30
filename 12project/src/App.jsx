import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

const App = ()=>{
  let [c,setC] = useState(0)
  useEffect(()=>{
    console.log("Comp added")
  },[])
  useEffect(()=>{
    console.log("camp updated")
  },[c])
  useEffect(()=>{
    return ()=>{
      console.log("Comp maunted")
    }
  },[])
  return (
    <div>
      <h1> Number {c}</h1>
      <button onClick={()=> setC(c+1)}>Button </button>
    </div>
  )
}
export default App
