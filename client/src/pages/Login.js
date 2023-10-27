import React, { useState } from 'react'
import {UserProvider} from "../components/UserContext"
import App from '../App'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [detail, setdetail] = useState({
        email : "",
        password : ""
    })

    const [loggedin, setloggedin] = useState()

    const subhandler =async(e)=>{
        e.preventDefault();

        const data = await fetch(`http://localhost:5001/user/login`, {
            method:"post",
            headers :{
                "Content-type" : "application/json"
            },
            body : JSON.stringify(detail)
        })
        const res = await data.json()
        const token = res.accesstoken;

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        const currentuser = payload.user
        // console.log(payload.user);
        setloggedin(payload.user)
        if(currentuser) navigate('/')

    }
    // console.log(loggedin, "From userstatas");

    const inphandler =(e)=>{
        setdetail({...detail, [e.target.name] : e.target.value})
    }

  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={subhandler} >
            <label>Email</label>
            <input type='text' name='email' onChange={inphandler} />
            <label>Password</label>
            <input type='text' name='password' onChange={inphandler} />
            <button>Submit</button>
            {/* <UserProvider value={loggedin} >
                <App/>
            </UserProvider> */}
        </form>
    </div>
  )
}

export default Login