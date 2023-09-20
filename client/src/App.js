import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState({
    email : "",
    password : ""
  })

  const handler = (e) =>{
    setdata({...data, [e.target.name] : e.target.value})
  }
  const subhandler = (e) =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={subhandler} >
        <input type='text' name='email' onChange={handler} placeholder='email'  />
        <input type='text' name='password' onChange={handler} placeholder='password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App