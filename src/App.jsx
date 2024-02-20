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
import PrivacyPolicy from './pages/PrivacyPolicy'
import Search from './pages/Search'
import Category from './pages/Category'
import TermsOfService from './pages/TermsOfService'

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
        <Route path='/pop' element={<PrivacyPolicy/>}/>
        <Route path='/search/:query' element={<Search/>}>
        </Route>
        <Route path='/category/:cate' element={<Category/>}>
        </Route>
        <Route path='/tos' element={<TermsOfService/>}/>
      </Routes>
    </Router>
  )
}

export default App
