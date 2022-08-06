import "./Header.css"
import logo from "../../assets/target.png"
import {Link} from 'react-router-dom'

const Header = ({ mode }) => {
  const { theme, setTheme } = mode

  return (
    <nav>
      <Link to='/' className="logo">
        <img className="logo-img" src={logo} alt="logo" />
        <h1>Focus</h1>
      </Link>
      <div className="mode">
        {theme ?
          <i class="bi bi-sun-fill" onClick={() => {
            console.log("!wtf")
            setTheme(false)
          }
          }>
          </i> :
          <i class="bi bi-moon-fill" onClick={() =>
            setTheme(true)
          }>
          </i>}
      </div>
    </nav>
  )
}

export default Header