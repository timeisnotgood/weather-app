import React, { useEffect, useState } from 'react'
import "./css/weather.css"
import key from "../key.js"

export const Weather = () => {

  const [city, setcity] = useState("")
  const [weather, setweather] = useState()

// submit handler
  const subhandler = async(e) =>{
    e.preventDefault();
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${key}`)
    const res = await data.json()
    setweather(res.main)
    // console.log(res.main);
  console.log(weather);

  }


  return (
    <div className='weather-main'>
      <div className='weather-card' >
        <p style={{marginTop : "40px"}} className='weather-city' >{city}</p>
        <form className='weather-form' onSubmit={subhandler} >
          <input type='text' 
                 className='weather-input' 
                 placeholder='Enter city'
                 value={city} 
                 onChange={(e)=>{setcity(e.target.value)}} 
           />
          <button>Search</button>
        </form>
        <div className='weather-temp' >
          <div>
          <p style={{textAlign:'center'}} >{weather ? weather.temp : "--"}</p>
          <p>Temperature</p>
          </div>
          <div>
          <p style={{textAlign:'center'}} >{weather ?(weather.humidity < 100 ? "Rain":"sunny"):"--"}</p>
          <p>Climate</p>
          </div>
        </div>
      </div>
    </div>
  )
}