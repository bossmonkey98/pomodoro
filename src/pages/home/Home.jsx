import React from 'react'
import "./Home.css"
import pic from "../../assets/target.png"
import { Link } from 'react-router-dom'

export const Home = () => {
  document.title = "Focus";
  return (
    <div className='home'>
      <div className='desc'>
          <h1>Welcome To <span style={{color:"var(--primary-color)",fontFamily:" 'Lobster', cursive"}}>Focus</span></h1>
        <p>A simple app designed to beat procrastination and help you accomplish more</p>
        <Link to="/task" style={{textDecoration:"none"}}>
          <button className='btn'>Start</button>
        </Link>
      </div>
      <div className='img'>
        <img src={pic} className="pic" alt="img" />
      </div>
    </div>
  )
}
