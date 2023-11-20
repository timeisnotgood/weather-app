import React, {useState, useEffect, useContext} from 'react'
import { Authcontext } from '../context/Usercontext';


export const Tod = () => {

  const {loggedin, logout, user} = useContext(Authcontext)
  const [gettodo, setgettodo] = useState({})
  const [todo, settodo] = useState([])
  
  // console.log(user.id);

  // useEffect(()=>{
  //   async function usertodo(){
  //     const res = await fetch(`http://localhost:5001/todo/get/${user.id}`)
  //     const data = await res.json()
  //     settodo(data)
  //     console.log(todo);
  //   }
  //   usertodo();
  // },[gettodo])

  const submithandler = async(e) =>{
    e.preventDefault();
    console.log(gettodo)
    // const res = await fetch(`http://localhost:5001/todo/create/${user.id}`,{
    //   method : "post",
    //   headers:{
    //     "content-type" : "application/json"
    //   },
    //   body:JSON.stringify(todo)
    // })

    // const data = await res.json()
    // console.log(data);
  }

  return (
    <div className='first' >
        <div>
          <form onSubmit={submithandler} >
            <input type='text' placeholder='Enter to-do' name='todo' onChange={(e)=>{setgettodo({...gettodo, [e.target.name] : e.target.value})}} />
            <button>onSubmit</button>
          </form>
        </div>
        <div className='todo_list'>
          <ul>
            {todo.map( to =>(
              <li key={to._id} >
              {to.todo}
              <button>Delete</button>
              </li>
            ) )}
          </ul>
        </div>
    </div>
  )
}
