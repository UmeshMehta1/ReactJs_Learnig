import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
   <Cards username="Umesh" skill="Js"/>
   <Cards username="Hari" skill="python"/>
   </>
    
  )
}

export default App
