import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(1)

  const addvalue = () =>{
    if(counter < 20)
      setcounter(counter + 1)
  }
  const decreasedvalue = ()=>{
    if(counter > 0)
      setcounter(counter - 1)
  }

  let name = "Zetrox"
  let age = 22
  let email = "zentrox@gmail.com"
  let phone = 9984934662
  let place = "Hyderabad"
  let laptop = "lenovo legion"


  return (
    <div className='container'>
      <div className='left'>
        <h1>React Table </h1>
        <table className="mytable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
            <td>Name </td>
            <td>{name}</td>
            </tr>
            <tr>
            <td>Age</td>
            <td>{age}</td>
            </tr>
            <tr>
            <td>Place</td>
            <td>{place}</td>
            </tr>
            <tr>
            <td>Email</td>
            <td>{email}</td>
            </tr>
            <tr>
            <td>Phone:No</td>
            <td>{phone}</td>
            </tr>
            <tr>
            <td>Laptop</td>
            <td>{laptop}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className='right'>

        <h2>React Counter {counter}</h2>
        <button
        onClick={addvalue}
        >Increased Value</button>
        <br />
        <button
        onClick={decreasedvalue}
        >Decreased Value</button>
      </div>

    </div>
  )
}

export default App
