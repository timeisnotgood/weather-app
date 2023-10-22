import React, {useState, useEffect} from 'react'


export const Tod = () => {

    const [data, setdata] = useState([])
    const [filter, setfilter] = useState([])
    const [controller, setcontroller] = useState(1)
    

  useEffect(()=>{
      async function fetchdata(){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const dat  = await res.json()
        setdata(dat)
      }
      fetchdata()
  },[])


  useEffect(()=>{
    setfilter(data.filter( tod => tod.userId == controller))
  },[controller])

  console.log(controller);
  console.log(data.filter( tod => tod.userId == controller));
  
  return (
    <div className='first' >
        <select onChange={(e)=>{
            setcontroller(e.target.value)            
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
            <div key={to.id} >
                <p >{to.title}</p>
                <button onClick={()=>setfilter(filter.filter( fil => fil.id !== to.id))} >delete</button>
            </div>
            )}
        </div>
    </div>
  )
}
