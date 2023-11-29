import React, {useState, createContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Authcontext = createContext();


const getter = () =>{
  const tok = localStorage.getItem('token')
  return tok
}

const Usercontext = ({children}) => {

    const navigate = useNavigate() 
    const [user, setuser] = useState(null)
    const [loggedin, setloggedin] = useState(null)
    const [token, settoken] = useState(getter())

    useEffect(() => {
      if(localStorage.getItem('token')){
        if(loggedin == null){
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const payload = JSON.parse(atob(base64));
          const currentuser = payload.user;
          setuser(currentuser)
          setloggedin(true)
        }
      }
    }, [token]);

////// Login activity
    const login = (value) =>{
        localStorage.setItem('token', JSON.stringify(value))
        const retoken = localStorage.getItem('token')
        const base64Url = retoken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        const currentuser = payload.user;
        setuser(currentuser)
        setloggedin(true)
      }
      
      console.log(loggedin);

///// logout Activity
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