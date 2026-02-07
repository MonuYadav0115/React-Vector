import { useState } from "react"
import "./App.css"

const App = () => {
  const [place, setPlace] = useState("")
  const [info, setInfo] = useState(null)
  const [msg, setMsg] = useState("")

  console.log(import.meta.env)



  const getinfo = () => {
    if (!place.trim()) {
      setMsg("Please enter city name")
      setInfo(null)
      return
    }

    const dummyData = {
      name: place,
      main: {
        temp: 25,
        humidity: 60,
      },
      weather: [
        {
          description: "clear sky",
        },
      ],
    }

    setInfo(dummyData)
    setMsg("")
  }

  return (
    <div className="weather-container">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />

      <button onClick={getinfo}>Get Weather</button>

      {msg && <p className="msg">{msg}</p>}

      {info && (
        <div className="weather-info">
          <h2>{info.name}</h2>
          <p>Temp: {info.main.temp} °C</p>
          <p>Humidity: {info.main.humidity}%</p>
          <p>Weather: {info.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App
