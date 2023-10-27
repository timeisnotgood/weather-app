import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={'/todo'} ><h4>Todo</h4></Link>
        <Link to={'/weather'} ><h4>Weather</h4></Link>
    </div>
  )
}

export default Home