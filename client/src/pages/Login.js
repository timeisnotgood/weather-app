import React, { useState } from 'react'

const Login = () => {

    const [detail, setdetail] = useState({
        email : "",
        password : ""
    })

    const subhandler =(e)=>{
        e.preventDefault();
        console.log(detail);
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