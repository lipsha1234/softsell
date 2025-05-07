import React from 'react'
import { useState } from 'react'
import './App.css'
import SoftSellLanding from './component/SoftSellLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SoftSellLanding />
      </div>
    </>
  )
}

export default App
