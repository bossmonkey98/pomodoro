import React from 'react'
import "./Home.css"
import pic from "../../assets/target.png"

export const Home = () => {
  return (
    <div className='home'>
      <div className='desc'>
          <h1>Welcome To <span style={{color:"var(--primary-color)",fontFamily:" 'Lobster', cursive"}}>Focus</span></h1>
          <p>A simple app designed to beat procrastination and help you accomplish more</p>
          <button className='btn'>Start</button>
      </div>
      <div className='img'>
        <img src={pic} className="pic" alt="img" />
      </div>
    </div>
  )
}
