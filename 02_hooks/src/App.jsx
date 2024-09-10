import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// upi updation in react is done by hooks 
function App() {

  const [counter, setCounter] = useState(15)   
  // this hook is resposible for changing state and these changes are propogated into our UI or DOM

  // useState give us two things in form of an array first is counter(can be name as per needed) and second is function

  // let counter = 5

  const addValue = () => {
    counter = counter + 1
    console.log("clicked", counter);
  }

  return (
    <>
    <h1>React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Increase value</button>
    <button>Decrease value</button>
    </>
  )
}

export default App
