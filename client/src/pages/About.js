import React from 'react'
import "./css/About.css"

const About = () => {
  return (
    <div className='main'>
      <h3 className='heading' >About this <spam>Project</spam></h3>
      <div className='details' >
        <h4>To-Do</h4>
        <p>Todo Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed.</p>
        <hr/>
        <h4>Weather</h4>
        <p>Weather forecasting is the use of science and technology to forecast atmospheric conditions for a certain place and period. For centuries, people have tried to forecast the weather informally, and officially since the nineteenth century. Weather forecasting, which used to be done by hand and was focused mostly on variations in barometric pressure, existing weather patterns, and sky state or cloud cover, is now done using computer-based models that account for a variety of atmospheric variables.</p>
      </div>
    </div>
  )
}

export default About