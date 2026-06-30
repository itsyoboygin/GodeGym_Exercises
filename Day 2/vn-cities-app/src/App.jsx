import { useState } from 'react'
import './App.css'
import {getAllCities} from './index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vietnam's Central Level Cities</h1>
      <ul>
        {getAllCities().map((city, index)=>(
          <li key={city.code}>
            {city.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
