import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name: "Histesh",
    age: 21,
  }

  let arr = [1,2,3]

  return (
    <>
    <h1 className='bg-slate-800 text-white p-5 mb-9 rounded text- font-medium'>Props In React</h1>
    <Card username = "Tushar" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <Card username = "Suraj" src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </>
  )
}

export default App
