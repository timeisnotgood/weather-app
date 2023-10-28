import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [loggedin, setloggedin] = useState(false)
  
  useEffect(()=>{
    const checker = () =>{
      const data = localStorage.getItem('token')
      console.log(data);
      if (data) {
        setloggedin(true)
      }
    }
  checker()
  },[])
  
  return (
    <div>
        <Link to={"/"} >Home</Link>
        {loggedin ? <Link onClick={()=>{
          localStorage.removeItem('token')
          setloggedin(false)
        }} >Logout</Link> 
        :
        <div>
          <Link to={"/register"} >Register</Link>
          <Link to={"/login"} >Login</Link>
        </div>
        
         }
        
    </div>
  )
}
