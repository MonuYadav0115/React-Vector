
import './App.css'

let data = {"name":"Zentrox", "age":21 , "marks":80 , "dep":"CSE" , "img":"https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg"}

let App=()=>{
  return(<div className='card'>
    <img src={data.img} />
    <div className='info'>
      <p>Name : {data.name}</p>
      <p>Age : {data.age}</p>
      <p>Department : {data.dep}</p>
      <p>Marks : {data.marks}</p>

    </div>
  </div>)
}

export default App
