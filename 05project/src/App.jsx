
import './App.css'

let arr = ["Python" ,  "Java Script" , "Java" , "React JS" , "Rust"]

let App = () =>{
  return (<ol>
    {
      arr.map((el)=> <li>{el}</li>)
    }
  </ol>)
}


export default App
