import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Authcontext } from '../context/Usercontext';

const Login = () => {

    const {login} = useContext(Authcontext)
    const navigate = useNavigate();
    const [detail, setdetail] = useState({
        email : "",
        password : ""
    })


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
        login(token)
        // localStorage.setItem("token",JSON.stringify(token))
        // setter(true)
        if(token) navigate('/home')
    }


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
        </form>
    </div>
  )
}

export default Login