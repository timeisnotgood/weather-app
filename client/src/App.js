import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Tod } from './pages/Tod'
import { Home } from './Home'
// import "./app.css"

const App = () => {
  
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/todo' element={<Tod/>} />
    </Routes>
  )
}

export default App