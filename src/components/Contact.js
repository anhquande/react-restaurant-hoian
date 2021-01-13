import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="container contact">
      <div className="col-md-4" itemScope itemType="http://schema.org/Restaurant">
        <h3>{t('address')}</h3>
        <p translate="no" typeof="schema:PostalAddress">
          <span className="restaurant-name" property="schema:name">{t('restaurant_name')}</span>
          <br/><span property="schema:streetAddress">{t('address_street')}</span>
          <br/><span property="schema:postalCode">{t('address_zip')}</span> <span property="schema:addressLocality">{t('address_locality')}</span>
          <br/><abbr property="schema:addressCountry">{t('address_country')}</abbr>
        </p>
        <p>{t('tel')}: <span itemProp="telephone" content="+49241404368">0241 404368</span></p>
      </div>
      <div className="col-md-4">
        <h3>{t('opening_hours')}</h3>
        <div className="opening-hour">
          <div>
            <div className="col-md-4 label">{t('opening_hours_days_1')}</div>
            <div className="col-md-8 hour">17:30-21:00</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h3>{t('delivery_hours')}</h3>
        <div className="opening-hour">
          <div>
            <div className="col-md-4 label">{t('delivery_hours_days_1')}</div>
            <div className="col-md-8 hour">17:30-21:00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
