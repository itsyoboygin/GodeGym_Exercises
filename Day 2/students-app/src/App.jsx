import { useState } from 'react'
import './index.css'
import {getAllStudents} from './index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Students</h1>
      <table>
          <thead>
            <tr>
              <td>Company</td>
              <td>Contact</td>
              <td>Country</td>
            </tr>
          </thead>
          <tbody>
            {getAllStudents().map((student, index)=>(
              <tr key={index}>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </>
  )
}

export default App
