import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SliderPage from '../pages/SliderPage';

const FullScreenLayout = () => {
  return (
    <Router>
      <Route path={"/fullscreen/slider"} exact component={SliderPage}/>
    </Router>
  )
};

export default FullScreenLayout;
