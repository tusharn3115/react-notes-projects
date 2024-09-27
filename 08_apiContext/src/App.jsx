import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>API Context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
