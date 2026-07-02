import { useState } from 'react'
import './App.css'
import { Counter1 } from './counters/Counter1';
import { Counter2 } from './counters/Counter2';


function App() {
  return (
    <>
      <p>Count: </p>
      <Counter1/>

      <p>Count: </p>
      <Counter2/>
    </>
  )
}

export default App
