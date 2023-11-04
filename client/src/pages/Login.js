import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = ({setresponse}) => {
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
        localStorage.setItem("token",JSON.stringify(token))

        console.log()
        
        if(localStorage.key("token") == 'accesstoken'){
            setresponse(true)
        }else{
            setresponse(false)
        }


        if(token) navigate('/')
        // const base64Url = token.split('.')[1];
        // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // const payload = JSON.parse(atob(base64));
        // const currentuser = payload.user
        // setloggedin(payload.user)
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