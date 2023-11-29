import React, { useEffect } from 'react'

const Prac = () => {

  console.log("one");

  useEffect(()=>{
    async function test(){
    await console.log("two");
    }
    test()
  },[])

    const setter = () =>{
        localStorage.setItem("token", JSON.stringify(["lissan", "kishore","hari"]))
        console.log("all");
    }

    setter()
    
    console.log(localStorage.getItem("token"));

  return (
    <div>Prac</div>
  )
}

export default Prac