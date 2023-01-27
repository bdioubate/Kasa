import { Link } from 'react-router-dom'
import Logo from '../../assets/logofooter.png'

function Footer() {
  return (
    <section id="footer">
      <Link id="footer__logo" to="/">
        <img id="footer__logo__img" src={Logo} alt="logo" />
      </Link>
      <h4 id="footer__text">© 2020 Kasa. All rights reserved</h4>
    </section>
  )
}

export default Footer
