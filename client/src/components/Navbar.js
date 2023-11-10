import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [user, setuser] = useState()
  const [loggedin, setloggedin] = useState(false)
  
  const token = localStorage.getItem('token')
 
  useEffect(()=>{

    async function setter(){
      console.log(token);
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(atob(base64));
      const currentuser = payload.user
      setuser(currentuser)
      if(currentuser) setloggedin(true)
      console.log(user);
    }

    setter();
  },[]);

  const logouthandler = () =>{
    localStorage.removeItem('token')
    setloggedin(false)
  }

  
  return (
    <div>
        <Link to={"/"} >Home {user && user.name} </Link>
        {token ? <button onClick={logouthandler} >Logout</button> 
        :<div>
          <Link to={"/register"} >Register</Link>
          <Link to={"/login"} >Login</Link>
        </div>}
    </div>
  )
}
