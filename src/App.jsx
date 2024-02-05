import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:productId' element={<Product />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
