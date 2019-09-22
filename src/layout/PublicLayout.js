import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { HomePage } from '../pages/HomePage';
import { ImprintPage } from '../pages/ImprintPage';
import { Footer } from '../components/Footer';

const PublicLayout = () => {
  return (
    <Router>
      <NavBar/>
      <Route path={"/"} exact component={HomePage}/>
      <Route path={"/imprint"} exact component={ImprintPage}/>
      <Footer/>
    </Router>
  )
};

export default PublicLayout;
