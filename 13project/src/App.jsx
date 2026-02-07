import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <> 
    <p>Digital Clock </p>
    <div>{time.toLocaleTimeString()}</div>
    </>
  )
}

export default App
