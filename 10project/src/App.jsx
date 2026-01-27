import { useState } from 'react'
import './App.css'

const App = () => {

  let [data, setData] = useState("")
  let [arr, setArr] = useState([])
  let [f, setF] = useState(true)
  let [i, setI] = useState(-1)

  let fun = (event) => {
    setData(event.target.value)
  }

  let add = () => {
    if (data.trim() === "") return
    setArr([...arr, data])
    setData("")
  }

  let edit = (index) => {
    setData(arr[index])
    setI(index)
    setF(false)
  }

  let upd = () => {
    arr[i] = data
    setArr([...arr])
    setF(true)
    setData("")
    setI(-1)
  }

  let del = (index) => {
    arr.splice(index, 1)
    setArr([...arr])
  }

  return (
    <div>
      <h3>Text Add or Update and Removed </h3>
      
      <input
        type="text"
        placeholder="Enter Text"
        value={data}
        onChange={fun}
      />

      {f
        ? <button onClick={add}>Add</button>
        : <button onClick={upd}>Update</button>
      }

      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => edit(index)}>Edit</button>
            <button onClick={() => del(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
