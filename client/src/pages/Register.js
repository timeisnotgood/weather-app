import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./css/Login.css"


const Register = ({setter}) => {

    const navigate = useNavigate()
    const [detail, setdetail] = useState({
        username : "",
        email : "",
        password : ""
    })

    const subhandler =async(e)=>{
        e.preventDefault();
        const data = fetch("http://localhost:5001/user/register", {
            method:"POST",
            headers :{
                "Content-Type": "application/json",
            },
            body : JSON.stringify(detail)
        })
        const res = await (await data).json()
        console.log(res);
        navigate('/login')
    }

    const inphandler =(e)=>{
        setdetail({...detail, [e.target.name] : e.target.value})
    }

  return (
    <div className='main'  >
        <div className='card' style={{height:"370px"}} >
            <h3 className='nead' >Register Here !</h3>
            <form onSubmit={subhandler} className='form' >
                <label>Username</label>
                <input type='text' name='username' onChange={inphandler} />
                <label>Email</label>
                <input type='text' name='email' onChange={inphandler} />
                <label>Passoword</label>
                <input type='text' name='password' onChange={inphandler} />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register