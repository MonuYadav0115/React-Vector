
import './App.css'

let App = () =>{
  let style1 = {"Color":"white" , "background-color":"black" , "border":"2px solid yellow" , "padding":"30px 30px"}

  let style2 = {"color":"green" , "background-color":"gray" , "border":"2px solid yellow" , "padding":"30px 30px"}

  let style3 = {"color":"pink" , "background-color":"crimson" , "border":"2px solid yellow" , "padding":"30px 30px"}

  return (<div>
    <card name = "Zentox" age = {20} gender = "male"/>
    <card name = "Bravix" age = {21} gender = "Female"/>
    <card name = "Tom" age = {22} gender = "male"/>

    <h1 style={{"color":"orange" , "border":"2px solid gray"}}>Welcome</h1>
    <h1 style={style1}>Welcome zentrox</h1>
    <button label="click" style={style1}/>
    <button label="register" style={style2}/>
    <button label="login" style={style1}/>
    <button label="logout" style={style3}/>
  </div>)
}

let card = (props) =>{
  return (<div className='card'> 
  <p>Name:{props.name}</p>
  <p>Age:{props.age}</p>
  <p>Gender:{props.gender}</p>
  </div>)
}


export default App
