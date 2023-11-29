import React from 'react'

const Prac = () => {

    const setter = () =>{
        localStorage.setItem("token", JSON.stringify(["lissan", "kishore","hari"]))
    }

    setter()
    
    console.log(localStorage.getItem("token"));

  return (
    <div>Prac</div>
  )
}

export default Prac