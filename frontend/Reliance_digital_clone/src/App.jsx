import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AllRoutes } from './components/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<AllRoutes/>}/>
      </Routes>
    </>
  )
}

export default App
