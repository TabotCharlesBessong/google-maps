import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LosAngelesCrimes from './pages/losAngelesCrimes/LosAngelesCrimes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LosAngelesCrimes/>
  )
}

export default App
