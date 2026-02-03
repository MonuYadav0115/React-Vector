import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  let [arr, setArr] = useState([])
  let [msg, setMsg] = useState("")

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setArr(res.data)
      })
      .catch(() => {
        setMsg("Failed to load data")
      })
  }, [])

  return (
    <div>
      <h1>Table formate to display product </h1>
      <h1>{msg}</h1>

      {arr.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.price}</td>
                <td>{obj.description}</td>
                <td>{obj.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App
