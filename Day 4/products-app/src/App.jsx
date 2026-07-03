import { useState } from 'react'
import './App.css'
import PlayersList from './components/PlayersList';
import AddPlayers from './components/AddPlayers';
import { Route } from 'react-router-dom';
import Header from './layout/Header';
function App() {
  return (
    <>
      <Header></Header>
      <PlayersList/>
    </>
  )
}

export default App
