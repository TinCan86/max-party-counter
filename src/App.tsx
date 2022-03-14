import { useState } from 'react'
import logo from './logo.svg'
import CountdownTimer from './CountdownTimer/CountdownTimer';
import './App.css'

function App() {
  return (
    <div className="App">
      <CountdownTimer
     countdownTimestampMs={1659780000000}/>
    </div>
  )
}

export default App
