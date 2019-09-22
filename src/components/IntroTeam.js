import React from 'react';

import PhotoTeam1 from '../resources/img/team/01.jpg'
import PhotoTeam2 from '../resources/img/team/02.jpg'
import PhotoTeam3 from '../resources/img/team/03.jpg'
import { useTranslation } from 'react-i18next';
import LongText from './LongText';
const IntroTeam = () => {
  const {t} = useTranslation();
  return (
    <div id="team" className="text-center">
      <div className="overlay">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>{t('nav_meet_our_chefs')}</h2>
            <hr/>
            <LongText value={"nav_team_description"}/>
          </div>
          <div id="row">
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={PhotoTeam1} alt="..."/></div>
                <div className="caption">
                  <h3>Über 18 Jahre Erfahrung</h3>
                  <p>Ehemaliger Chefkoch, Lion Hotel, Vuon Pho Restaurant</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={PhotoTeam2} alt="..."/></div>
                <div className="caption">
                  <h3>
                    Vietnamesische Küchenlehrer</h3>
                  <p><a href="https://netspace.edu.vn/thay-huynh-quoc-binh/">Netspace</a> Kulinarische Berufsschule</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={PhotoTeam3} alt="..."/></div>
                <div className="caption">
                  <h3>Ehemaliger Chefkoch, </h3>
                  <p>Vietnamesische Fußballnationalmannschaft (U-19-Männer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroTeam;
