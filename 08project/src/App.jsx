
import './App.css'
import Card from './Card'
import Button from './Button'

let App = () => {

  let style1 = {
    color: "white",
    backgroundColor: "black",
    border: "2px solid yellow",
    padding: "30px",
   
  }

  let style2 = {
    color: "green",
    backgroundColor: "gray",
    border: "2px solid yellow",
    padding: "30px"
  }

  let style3 = {
    color: "pink",
    backgroundColor: "crimson",
    border: "2px solid yellow",
    padding: "30px"
  }

  return (
    <div>
      <Card name="Zentox" age={20} gender="Male" />
      <Card name="Bravix" age={21} gender="Female" />
      <Card name="Tom" age={22} gender="Male" />

      <h1 style={{ color: "orange", border: "2px solid gray" }}>
        Welcome
      </h1>

      <h1 style={{color:"green",border:"2px solid gray"}}>Welcome Zentox</h1>

      <Button label="Click" style={style1} />
      <Button label="Register" style={style2} />
      <Button label="Login" style={style1} />
      <Button label="Logout" style={style3} />
    </div>
  )


}

export default App

