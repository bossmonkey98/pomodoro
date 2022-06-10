import "./Header.css"

import React, { useState } from 'react'
import logo from "../../assets/target.png"

const Header = () => {
  const [theme ,settheme] =useState("light")
  return (
      <nav>
      <div className="logo">
        <img className="logo-img" src={logo} alt="logo" />
        <h1>Focus</h1>
      </div>
      <div className="mode">
        {theme === "dark" ? <i class="bi bi-sun-fill" onClick={() => settheme("light")}></i> :
          <i class="bi bi-moon-fill" onClick={() => settheme("dark")}></i>}
      </div>
      </nav>
  )
}

export default Header