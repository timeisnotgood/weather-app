import React, {useState, useEffect} from 'react'



export const Tod = () => {

  function getter(){
      const token =  localStorage.getItem("token")
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(atob(base64));
      const currentuser = payload.user;
      
      return currentuser
  }

  const [user, setuser] = useState(getter())
  const [gettodo, setgettodo] = useState({})
  const [todo, settodo] = useState([])

  useEffect(()=>{
      
  },[])

  useEffect(()=>{
    if(user){
      async function getter(){
        const res = await fetch(`http://localhost:5001/todo/get/${user.id}`)
        const data = await res.json()
        settodo(data)
      }
      getter()
    }
  },[user])

// Insert Handler

  const submithandler = async(e) =>{
    e.preventDefault();
    const res = await fetch(`http://localhost:5001/todo/create/${user.id}`,{
      method : "post",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(gettodo)
    })

    const data = await res.json()
    settodo([...todo, data])
  }

  const deletehandler = async(value, res) =>{
    const del = await fetch(`http://localhost:5001/todo/delete`,{
      method :"delete",
      headers :
      {
        "content-type" : "application/json"
      },
      body : JSON.stringify({"_id" : value})
    })

    const data = await del.json()
    console.log(data.acknowledged);
    return data.acknowledged
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
              <button onClick={()=>{
                 const res = deletehandler(to._id)
                 if(res){
                  settodo(todo.filter( fil =>
                  fil._id !== to._id
                 ))}
              }} >Delete</button>
              </li>
            ) )}
          </ul>
        </div>
    </div>
  )
}
