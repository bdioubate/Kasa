import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div id="navbar">
      <NavLink id="navbar__logo" to="/">
        <img id="navbar__logo__img" src={Logo} alt="Logo du site" />
      </NavLink>
      <div id="navbar__links">
        <NavLink className="navbar__links__style" to="/">
          <h3>Accueil</h3>
        </NavLink>
        <NavLink className="navbar__links__style" to="/a-propos">
          <h3>A Propos</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Header
