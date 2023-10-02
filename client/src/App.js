import React, { useEffect, useState } from 'react'
// import "./app.css"

const App = () => {

  const [data, setdata] = useState([])

  useEffect(()=>{
      async function fetchdata(){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const dat  = await res.json()
        setdata(dat)
      }
      fetchdata()
  },[])


  return (
    <div className='first' >
      { data.map(tod =>(
        <div>
          <p>{tod.userId}</p>
          <p key={tod.id} >{tod.id}. {tod.title}</p>
          <button onClick={()=>{
            setdata( data.filter( to => to.id !== tod.id) )
          }}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default App