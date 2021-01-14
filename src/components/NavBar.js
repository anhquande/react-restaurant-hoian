import React, {useState} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {useTranslation} from 'react-i18next';
import clsx from "clsx";

const NavBar = () => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  }

  const closeNav = () => {
    setOpen(false);
  }

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button"
                  className="navbar-toggle collapsed"
                  onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"/>
            <span className="icon-bar"/> <span className="icon-bar"/>
          </button>
          <div className="navbar-brand page-scroll">
            <a href="/#page-top" className={"logo"}>{t('restaurant_name')}</a>
          </div>
        </div>

        <div className={clsx('navbar-collapse', {
          'collapse': !open
        })}>
          <ul className="nav navbar-nav navbar-right">
            <li onClick={closeNav}><a href="/#about" className="page-scroll">{t('nav_about')}</a></li>
            <li onClick={closeNav}><a href="/#restaurant-menu" className="page-scroll">{t('nav_restaurant_menu')}</a></li>
            <li onClick={closeNav}><a href="/#gallery" className="page-scroll">{t('nav_gallery')}</a></li>
            <li onClick={closeNav}><a href="/#contact" className="page-scroll">{t('nav_contact')}</a></li>
            <li onClick={closeNav}><a href="/imprint" className="page-scroll">{t('nav_imprint')}</a></li>
            <li onClick={closeNav}><LanguageSwitcher/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
