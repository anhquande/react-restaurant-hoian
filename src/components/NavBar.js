import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const NavBar = ()=>{
  const { t } = useTranslation();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>
            <span className="icon-bar"></span> <span className="icon-bar"></span></button>
          <div className="navbar-brand page-scroll">
            <a href="#page-top">{t('restaurant_name')}</a>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/#about" className="page-scroll">{t('nav_about')}</a></li>
            <li><a href="/#restaurant-menu" className="page-scroll">{t('nav_restaurant_menu')}</a></li>
            <li><a href="/#gallery" className="page-scroll">{t('nav_gallery')}</a></li>
            <li><a href="/#contact" className="page-scroll">{t('nav_contact')}</a></li>
            <li><a href="/imprint" className="page-scroll">{t('nav_imprint')}</a></li>
            <li><LanguageSwitcher/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
