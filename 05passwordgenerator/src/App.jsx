import { useState } from 'react'


function App() {
  const [length, setLength]=useState('8')
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState('')

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
         <h5 className='text-white shadow rounded text-center my-3'>Password Generator</h5>
         <div className='flex rounded overflow-hidden mb-4'>
         <input type='text'value={password} className="w-full outline-none py-1 px-3" />
         
         <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
         </div>

         <div>
          <input type="range" min={5} max={100} className='flex text-sm gap-x-1'/>

         </div>
       
     </div>
    </>
  )
}

export default App
