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

  const [us, setus] = useState("")
  const [user, setuser] = useState(getter())
  const [gettodo, setgettodo] = useState({})
  const [todo, settodo] = useState([])
  const [edit, setedit] = useState()

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

// submit Handler

  const submithandler = async(e) =>{
    e.preventDefault();
    console.log(gettodo);

    if(edit){
      //Edit todo Function
      const edited = todo.map( itre =>
        itre._id == edit ?
        (itre = {_id : itre._id, todo : us })
        :{_id : itre._id, todo : itre.todo}
       )
       const updater = await fetch(`http://localhost:5001/todo/update`,{
        method : "put",
        headers : {
          "content-type" : "Application/json"
        },
        body : JSON.stringify({"_id" : edit,"tod" : us})
       })
       if(updater) settodo(edited)
       setus(" ")
    }else{

      // Input Function
      const res = await fetch(`http://localhost:5001/todo/create/${user.id}`,{
      method : "post",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(gettodo)
      })

      const data = await res.json()
      settodo([...todo, data])
      setus(" ")
    }
  }

// Delete handler
  const deletehandler = async(value) =>{
    const del = await fetch(`http://localhost:5001/todo/delete`,{
      method :"delete",
      headers :
      {
        "content-type" : "application/json"
      },
      body : JSON.stringify({"_id" : value})
    })

    const data = await del.json()
    if(data.acknowledged){
      settodo(todo.filter( fil =>
      fil._id !== value
     ))}
  }

// Edit Handler
  const updatehandler = (data) =>{
    console.log(data._id);
    setus(data.todo)
    setedit(data._id)
    
  }


  return (
    <div className='first' >
        <div>
          <form onSubmit={submithandler} >
            <input type='text' 
                   placeholder='Enter to-do' 
                   name='todo' 
                   value={us}  
                   onChange={(e)=>{
                    setus(e.target.value) 
                    setgettodo({...gettodo, [e.target.name] :e.target.value})
                    }} />
            <button>Add</button>
          </form>
        </div>
        <div className='todo_list'>
          <div>
            {todo.map( to =>(
              <div key={to._id}>
              <p>{to.todo}</p>
              <button onClick={() => updatehandler(to)} >Edit</button>
              <button onClick={() => deletehandler(to._id)} >Delete</button>
              </div>
            ) )}
          </div>
        </div>
    </div>
  )
}
