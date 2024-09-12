import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-slate-800 text-white p-5 mb-9 rounded text- font-medium'>Props In React</h1>
    <Card/>
    <Card/>
    </>
  )
}

export default App
