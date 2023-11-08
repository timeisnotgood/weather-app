import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({response}) => {

  const [loggedin, setloggedin] = useState(false)
  
  console.log(response);
  useEffect(()=>{
    function logger(){
      if(response == true){
        setloggedin(true)
       }
     }
     logger()
  })

 
  
  return (
    <div>
        <Link to={"/"} >Home</Link>
        {loggedin ? <Link>Logout</Link> 
        :<div>
          <Link to={"/register"} >Register</Link>
          <Link to={"/login"} >Login</Link>
        </div>}
    </div>
  )
}
