import { useEffect, useState } from "react"
import './App.css'
let arr=[
  {"img":"https://media.istockphoto.com/id/1552552014/photo/conceptual-image-with-word-start-on-asphalt-road-at-sunset.jpg?s=612x612&w=0&k=20&c=SuwTCVXWHXPU0-4srtmlv0Z7w1OHbuW6VznTbCaGWlA=","ht":"Heading-1","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-1"},
   {"img":"https://c8.alamy.com/comp/M1452P/road-concept-strategy-image-of-a-road-to-the-horizon-with-text-strategy-M1452P.jpg","ht":"Heading-2","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-2"},
    {"img":"https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-nature-wallpaper-free-image.jpeg?w=600&quality=80","ht":"Heading-3","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-3"},
     {"img":"https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=2210&quality=70","ht":"Heading-4","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-4"},
      {"img":"https://static.vecteezy.com/system/resources/thumbnails/031/624/707/small/yellow-flowers-in-a-vase-on-a-green-background-ai-generated-photo.jpg","ht":"Heading-5","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-5"},
       {"img":"https://st2.depositphotos.com/1000423/7833/i/950/depositphotos_78335354-stock-photo-new-day-new-life.jpg","ht":"Heading-6","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-6"},
        {"img":"https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png","ht":"Heading-7","text":"React is a popular, open-source JavaScript library for building user interfaces (UIs), developed and maintained by Meta-7"}
]
const App = () => {
  let [i,setI]=useState(0)
  let fwd=()=>{
setI(i=>(i+1)%arr.length)
  }
  let bwd=()=>{
    if(i==0)
    {
      setI(arr.length-1)
    }
    else{
      setI(i=>i-1)
    }
  }
  useEffect(()=>{
   let iid= setInterval(fwd,3000)
   return ()=>{
    clearInterval(iid)
   }

  },[])
  return (
    <div className="bnr">
      <img src={arr[i].img}/>
      <div className="bnrcon">
        <h1>{arr[i].ht}</h1>
        <p>{arr[i].text}</p>
        <button>KnowMore...</button>

      </div>
      <button className="btn lt" onClick={bwd}>&lt;</button>
      <button className="btn gt" onClick={fwd}>&gt;</button>
      <div className="dotcon">
        {
          arr.map((obj,ind)=>{
            return <i className={ind === i ? "fa-solid fa-circle" : "fa-regular fa-circle"}onClick={() => setI(ind)}></i>
          })
        }

      </div>

    </div>
  )
}

export default App