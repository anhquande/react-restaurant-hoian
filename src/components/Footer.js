import React from 'react';
import { useTranslation } from 'react-i18next';
import Contact from './Contact';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div id="footer">
        <Contact/>
        <div className="container-fluid text-center copyrights">
          <div className="col-md-8 col-md-offset-2">
            <p>&copy; {new Date().getFullYear()} {t('restaurant_name')}. Designed
              by <a href="http://www.templatewire.com"
                    rel="nofollow">TemplateWire</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
