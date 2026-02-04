import { useState } from "react"
import axios from "axios"
import "./App.css"

const App = () => {
  const [place, setPlace] = useState("")
  const [info, setInfo] = useState(null)
  const [msg, setMsg] = useState("")

  const getinfo = async () => {
    if (!place.trim()) {
      setMsg("Please enter city name")
      setInfo(null)
      return
    }

    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: place.trim(),
            appid: import.meta.env.VITE_WEATHER_API_KEY, 
            units: "metric",
          },
        }
      )

      setInfo(res.data)
      setMsg("")
    } catch (err) {
      setMsg("City not found ")
      setInfo(null)
    }
  }

  return (
    <div className="weather-container">
      <h1>Weather App </h1>

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
          <p> Temp: {info.main.temp} °C</p>
          <p> Humidity: {info.main.humidity}%</p>
          <p> Weather: {info.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App
