import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Link to={'/todo'} ><h4>Todo</h4></Link>
    </div>
  )
}
