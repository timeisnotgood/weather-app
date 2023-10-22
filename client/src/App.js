import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import {Tod} from "./components/Tod"
import {Weather} from "./components/Weather"
import { Navbar } from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
// import "./app.css"

const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/todo' element={<Tod/>} />
      <Route path='/weather' element={<Weather/>} />
    </Routes>
    </div>
  )
}

export default App