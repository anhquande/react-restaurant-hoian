import React from 'react';

const HomeHeader = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>Hoi An</h1>
                <p>Authentische vietnamesische Küche</p>
                <p>in Aachen</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">Entdecke die
                  Geschichte</a></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader;
