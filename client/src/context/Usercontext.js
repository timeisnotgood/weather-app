import React, {useState, createContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Authcontext = createContext();

console.log("one");

const getter = () =>{
  const tok = localStorage.getItem('token')
  return tok
}

const Usercontext = ({children}) => {

    const navigate = useNavigate() 
    const [user, setuser] = useState(null)
    const [loggedin, setloggedin] = useState(false)
    const [token, settoken] = useState(getter())

    useEffect(() => {
      if(loggedin){
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        const currentuser = payload.user;
        setuser(currentuser)
        setloggedin(true)
      }
    }, []);

    console.log("two");


////// Login activity
    const login = (value) =>{
      // const token = localStorage.getItem('token')
        localStorage.setItem('token', JSON.stringify(value))
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        const currentuser = payload.user;
        setuser(currentuser)
        setloggedin(true)
    }


///// logout Activity
    const logout = () =>{
        localStorage.removeItem('token')
        setuser(null)
        setloggedin(false)
        navigate('/')
    }

console.log("three");


    console.log(user);

  return (
    <Authcontext.Provider value={{user, loggedin, login, logout}} >
        {children}
    </Authcontext.Provider>
  )
}

export  {Usercontext, Authcontext};