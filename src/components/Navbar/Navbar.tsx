import { TNavbarProps } from "."
import "./Navbar.css"
import logo from "@assets/logo.svg"
import search from "@assets/icons/search.svg"
import profile from "@assets/icons/profile.svg"
import arrow from "@assets/icons/arrow-right.svg"
import logoDark from "@assets/icons/logo--dark.svg"

function Navbar({links}: TNavbarProps) {
 return (
  <>
    {/* desktop navbar  */}
    <nav className="navbar navbar--desktop">
      
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
          <a href="https://telewebion.com/search" className="navbar__link">
            <img src={search} alt="search-icon" />
          </a>
        </li>
        <li>
          <a href="https://gate.telewebion.com/user?redirect=https://telewebion.com/space/MovieSeries" className="navbar__link">ورود / ثبت نام</a>
        </li>
      </ul>
    </nav>

    {/* mobile navbar  */}
    <nav className="navbar navbar--mobile">

      {/* back */}
      <a href="">
        <img src={arrow} alt="back" />
      </a>

      {/* home page  */}
      <a href="#">
        <img src={logoDark} alt="Telewebion-home-page" />
      </a>

      {/* profile */}
      <a href="#">
        <img src={profile} alt="profile" />
      </a>
    </nav>
  </>
 )
}

export default Navbar