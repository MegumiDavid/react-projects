import { useState } from 'react'

import Atr from './components/Atr'
import Quiz from './components/Quiz'

import './style/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="all-wrapper">
        <div className="container">
            <div className="row">
                <h1>Country quiz</h1>
                <Quiz />
            </div>
            <Atr />
        </div>
    </div>
  )
}

export default App
