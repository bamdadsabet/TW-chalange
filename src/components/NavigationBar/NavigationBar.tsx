import { navigationBar } from "@mock"
import { TNavigationBarLink } from "."
import './NavigationBar.css';
import archive from '@assets/icons/archive.svg';
import search from '@assets/icons/search.svg';
import liveStream from '@assets/icons/liveStream.svg';
import home from '@assets/icons/home.svg';

const icons = {
  archive,
  search,
  liveStream,
  home
}

function NavigationBar() {
  return (
    <div className="navigation-bar__container">
      <div className="navigation-bar">
        {
          navigationBar.map((item: TNavigationBarLink) => (
            <a className="navigation-bar__link" href={item.href} key={item.name}>
              <img className="navigation-bar__icon" src={icons[item.icon as keyof typeof icons]} alt={item.name} />
              <span className="navigation-bar__text">{item.name}</span>
            </a>
          ))
        }
      </div>
      <div className="navigation-bar__swipe-bar" />
    </div>
  )
}

export default NavigationBar