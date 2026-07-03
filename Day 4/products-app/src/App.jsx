import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Dashboard from './layout/Dashboard';
import About from './pages/About';
import PlayersList from './pages/content/PlayerList';
import SearchPlayers from './pages/content/SearchPlayer';
import AddPlayers from './pages/content/AddPlayers';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<PlayersList />} />
          <Route path='players' element={<PlayersList />} />
          <Route path='search' element={<SearchPlayers />} />
          <Route path='add' element={<AddPlayers />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </>
  )
}

export default App
