import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Home.css"

const Home = () => {
  return (
    <div className='homemain' >
    <Link to={'/todo'} className='one' >
      <div className='todo'>
        <hr/>
        <h5>Todo</h5>
      </div>
      </Link>
      <Link to={'/weather'} className='one' >
      <div className='weather' >
        <hr/>
        <h5>Weather</h5>
      </div>
      </Link>
    </div>
  )
}

export default Home