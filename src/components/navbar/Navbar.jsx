import "./navbar.css"
import logoMain from '../../images/logoMain.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <img src={logoMain} alt="" />
        </span>
        <div className="navItems">
          <button className="navButton navRegister">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar