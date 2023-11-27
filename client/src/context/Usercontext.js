import React, {useState, useEffect, useContext, createContext} from 'react'
import { useNavigate } from 'react-router-dom';

const Authcontext = createContext();

const Usercontext = ({children}) => {

    const navigate = useNavigate() 
    const [user, setuser] = useState(null)
    const [loggedin, setloggedin] = useState(false)



    const login = (value) =>{
      if (!localStorage.getItem('token') || JSON.parse(localStorage.getItem('token').length === 0)) {
          localStorage.setItem('token', JSON.stringify(value))
        }
        const token = localStorage.getItem('token')
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        const currentuser = payload.user;
        setuser(currentuser)
        setloggedin(true)
    }

    const logout = () =>{
        localStorage.removeItem('token')
        setuser(null)
        setloggedin(false)
        navigate('/')
    }

  return (
    <Authcontext.Provider value={{user, loggedin, login, logout}} >
        {children}
    </Authcontext.Provider>
  )
}

export  {Usercontext, Authcontext};