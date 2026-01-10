import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome React app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count -1)}>
        Tom Zentrox  {count}
        </button>
        <p>
        learnig react vite framework 
        </p>
      </div>
      <p className="read-the-docs">
        if want to master react so make sure daily practice  otherwise everythin is gone to your head 
      </p>
    </>
  )
}

export default App
