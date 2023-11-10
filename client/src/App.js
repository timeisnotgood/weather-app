import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import {Tod} from "./components/Tod"
import {Weather} from "./components/Weather"
import { Navbar } from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
// import "./app.css"

const App = () => {

  const [loggedin, setloggedin] = useState()

  const setter = (value) =>{
    setloggedin(value)
  }
  
  return (
    <div>
    <Navbar loggedin={loggedin} setter={setter} />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Register' element={<Register setter = {setter} />} />
      <Route path='/login' element={<Login setter = {setter} />} />
    </Routes>
    </div>
  )
}

export default App