import './App.css';
import StudentsInfoComponent from './components/Students.jsx';
import { getStudentsInfo } from './components/students.js';

function App() {
  return (
    <>
      <h1>Students List</h1>
      <StudentsInfoComponent students={getStudentsInfo()} />
    </>
  );
}

export default App
