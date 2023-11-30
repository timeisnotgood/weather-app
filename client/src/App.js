import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import {Tod} from "./components/Tod"
import {Weather} from "./components/Weather"
import { Navbar } from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import { Usercontext } from './context/Usercontext'
import Prac from './Prac'
import About from './pages/About'
// import "./app.css"

const App = () => {

  // const [loggedin, setloggedin] = useState()

  // const setter = (value) =>{
  //   setloggedin(value)
  // }
 
  return (
    <div style={{height : "100vh", padding:"0px"}} >
    <Usercontext>
    <Navbar  />
      <Routes>
        <Route path='/' exact element={<About/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/todo' element={<Tod/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </Usercontext>
    {/* <Prac/> */}

    </div>
  )
}

export default App