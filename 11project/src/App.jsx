import { useState } from 'react'
import './App.css'

const App = () => {

  const [data, setData] = useState({
    title: "",
    desc: "",
    dept: "",
    dl: ""
  })

  const [arr, setArr] = useState([])

  // handle input change 

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // add task
  
  const add = () => {
    if (!data.title || !data.desc || !data.dept || !data.dl) {
      alert("Please fill all fields")
      return
    }

    setArr([...arr, data])
    setData({ title: "", desc: "", dept: "", dl: "" })
  }

  return (
    <div>

      <div className="form">
        <input
          type="text"
          placeholder="Enter task title"
          name="title"
          value={data.title}
          onChange={fun}
        />

        <label>Description</label>
        <textarea
          name="desc"
          value={data.desc}
          onChange={fun}
        ></textarea>

        <select name="dept" value={data.dept} onChange={fun}>
          <option value="" disabled>---Select dept---</option>
          <option value="UI">UI</option>
          <option value="DB">DB</option>
          <option value="DEV">DEV</option>
          <option value="ST">ST</option>
        </select>

        <input
          type="date"
          name="dl"
          value={data.dl}
          onChange={fun}
        />

        <button onClick={add}>Add Task</button>
      </div>

      {arr.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Title</th>
              <th>Desc</th>
              <th>Dept</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((obj, ind) => (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{obj.title}</td>
                <td>{obj.desc}</td>
                <td>{obj.dept}</td>
                <td>{obj.dl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  )
}

export default App
