import { useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import NavbarItem from './NavbarItem';
import User from './User';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';
import logo from '../../assets/media/logo.png';

const Header = () => {
  const [responsiveHeader, setResponsiveHeader] = useState(false);
  const isConnected = useAppSelector((state) => state.reducer.user.isConnected);

  const navlinks = [
    {
      name: 'Fruits & Légumes',
      url: '/fruits-legumes',
    },
    {
      name: 'Recettes',
      url: '/recettes',
    },
  ];

  const isConnectedNavLinks = {
    name: 'Favoris',
    url: '/profil/favoris',
  };

  if (isConnected) {
    navlinks.push(isConnectedNavLinks);
  }

  let headerClasses = '';
  if (responsiveHeader === true) {
    headerClasses = 'active';
  } else {
    headerClasses = '';
  }

  const openMenu = () => {
    setResponsiveHeader(true);
  };

  const closeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setResponsiveHeader(false);
  };

  return (
    <header id="header" className={headerClasses}>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <form>
        <Searchbar />
      </form>
      <div className="menu">
        <nav className="navbar">
          <ul className="navbar__menu">
            {navlinks.map((item, index) => (
              <NavbarItem key={index} item={item} clickHandler={closeMenu} />
            ))}
          </ul>
          <User clickHandler={closeMenu} />
        </nav>
        <span className="closeMenu" onClick={closeMenu}>&#10005;</span>
      </div>
      <span className="openMenu" onClick={openMenu}>
        <i />
        <i />
        <i />
      </span>
    </header>
  );
};

export default Header;
