import React from 'react';
import { useTranslation } from 'react-i18next';
import LongText from './LongText';
import RestaurantInsidePhoto from '../resources/img/restaurant/inside-3.jpeg'
import IntroTeam from './IntroTeam';

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 ">
              <div className="about-img"><img src={RestaurantInsidePhoto}
                                              className="img-responsive"
                                              alt=""/></div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>{t('header_our_restaurant')}</h2>
                <hr/>
                <LongText value={"long_intro_restaurant"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IntroTeam/>
    </>
  )
}

export default About;
