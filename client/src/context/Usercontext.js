import React, {useState, useEffect, useContext, createContext} from 'react'

const Authcontext = createContext();

const Usercontext = ({children}) => {

    const [user, setuser] = useState(null)
    const [loggedin, setloggedin] = useState(false)



    const login = (value) =>{
        localStorage.setItem('token', JSON.stringify(value))
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
    }

  return (
    <Authcontext.Provider value={{user, loggedin, login, logout}} >
        {children}
    </Authcontext.Provider>
  )
}

export  {Usercontext, Authcontext};