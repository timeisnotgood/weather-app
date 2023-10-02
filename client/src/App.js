import React, { useEffect, useState } from 'react'
// import "./app.css"

const App = () => {

  const [data, setdata] = useState([])
  const [controller, setcontroller] = useState(1)
  const [filter, serfilter] = useState([])

  useEffect(()=>{
      async function fetchdata(){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const dat  = await res.json()
        setdata(dat)
      }
      fetchdata()
  },[])

  console.log(controller);
  
  
  // console.log(ne);
  return (
    <div className='first' >
          <select onChange={(e)=>{
            setcontroller( p => e.target.value)
            serfilter(data.filter( tod => tod.userId == controller))
          }} >
            <option  key={1} value={1} >User-1</option>
            <option  key={2} value={2} >User-2</option>
            <option  key={3} value={3} >User-3</option>
            <option  key={4} value={4} >User-4</option>
            <option  key={5} value={5} >User-5</option>
            <option  key={6} value={6} >User-6</option>
            <option  key={7} value={7} >User-7</option>
            <option  key={8} value={8} >User-8</option>
            <option  key={9} value={9} >User-9</option>
            <option  key={10} value={10} >User-10</option>
          </select>
          <div>
            {filter.map( to => 
            <p key={to.id} >{to.title}</p>
            )}
          </div>
    </div>
  )
}

export default App




// { data.map(tod =>(
//   <div>
//     <p>{tod.userId}</p>
//     <p key={tod.id} >{tod.id}. {tod.title}</p>
//     <button onClick={()=>{
//       setdata( data.filter( to => to.id !== tod.id) )
//     }}>delete</button>
//   </div>
// ))}