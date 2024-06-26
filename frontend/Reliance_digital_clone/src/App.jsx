import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AllRoutes } from './components/Routes/AllRoutes'
import { Login } from './components/Login/Login'
import { Cart } from './components/Cart/Cart'
import { Register } from './components/Login/Register'
import { SingleProductpage } from './components/Pages/SingleProductpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<AllRoutes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/product' element={<SingleProductpage/>}/>
      </Routes>
    </>
  )
}

export default App
