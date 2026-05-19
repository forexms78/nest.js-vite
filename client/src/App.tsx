import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [test, setTest] = useState('')
  const [count, setCount] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setMessage)
  }, [])

  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.text())
      .then(setTest)
  }, [])

  const handleClick  = () => {
    fetch('/api/count')
    .then((res) => res.text())
    .then(setCount)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Nest.js + Vite + React</h1>
      <p>Server says: <strong>{message}</strong></p>
      <p>Test says: <strong>{test}</strong></p>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App
