import React, { useState } from 'react'
import { app, db} from "./firebaseconfi"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

const App = () => {
  const [data, setdata] = useState({
    email : "",
    password : ""
  })

  // Submit handler

  const subhandler = async(e) =>{
    e.preventDefault();
    console.log();
  }

  return (
    <div>
      <form onSubmit={subhandler} >
        <input type='file'  onChange={(e)=> setdata(e.target.files[0])}   />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App