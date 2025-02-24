import { TNavbarProps } from "."
import "./Navbar.css"
import logo from "@assets/logo.svg"

function Navbar({links}: TNavbarProps) {
 return (
    <nav className="navbar">
      
       {/* links */}
       <ul className="navbar__link__container">
        <li>
          <a href="https://telewebion.com/">
            <img src={logo} alt="Telewebion" />
          </a>
        </li>
        {links.map((link) => (
          <li key={link.name}>
            <a className="navbar__link" href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* login & search  */}
      <ul className="navbar__link__container px-4">
        <li>
          <a href="https://gate.telewebion.com/user?redirect=https://telewebion.com/space/MovieSeries" className="navbar__link">ورود / ثبت نام</a>
        </li>
        <li>
          <a href="https://telewebion.com/search" className="navbar__link">s</a>
        </li>
      </ul>
    </nav>
 )
}

export default Navbar