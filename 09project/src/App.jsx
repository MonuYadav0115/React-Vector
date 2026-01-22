
import './App.css'
import Display from './Display'

let data = [
  {
    id: 1,
    album: "Thriller",
    artist: "Michael Jackson",
    year: 1982
  },
  {
    id: 2,
    album: "Divide",
    artist: "Ed Sheeran",
    year: 2017
  },
  {
    id: 3,
    album: "1989",
    artist: "Taylor Swift",
    year: 2014
  },
  {
    id: 4,
    album: "After Hours",
    artist: "The Weeknd",
    year: 2020
  },
  {
    id: 5,
    album: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013
  }
]

let App = () =>{
  return(<div className='container'>
    {
      data.map((obj , index) =>
         <Display obj = {obj} index = {index}/>)
    }
  </div>)
}



export default App
