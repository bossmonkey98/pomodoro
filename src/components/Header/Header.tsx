import "./Header.css"
import logo from "../../assets/target.png"
import { Link } from 'react-router-dom'
import { modeProps } from "./Header.types"
import React from "react"

const Header = ({ theme, setTheme }:modeProps) => {
 
  return (
    <nav>
      <Link to='/' className="logo">
        <img className="logo-img" src={logo} alt="logo" />
        <h1>Focus</h1>
      </Link>
      <div className="mode">
        {theme ?
          <i className="bi bi-sun-fill" onClick={() => {
            console.log("!wtf")
            setTheme(false)
          }
          }>
          </i> :
          <i className="bi bi-moon-fill" onClick={() =>
            setTheme(true)
          }>
          </i>}
      </div>
    </nav>
  )
}

export default Header