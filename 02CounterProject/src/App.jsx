import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addClick = () => {
    if(count<20){
      setCount(count + 1)
    }
    
  }
  const minsClick=()=>{
    if(count>0){
      setCount(count-1);
    }
   
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>

      <button onClick={addClick}>Add</button>
      <button onClick={minsClick}>Minus</button>
        
    </>
  )
}

export default App
