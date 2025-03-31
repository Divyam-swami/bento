import { useState } from 'react'

import './App.css'
import BentoMain from './main/BentoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='d-flex justify-content-center align-items-center w-100' >
   <BentoMain/>
    </main>
  )
}

export default App
