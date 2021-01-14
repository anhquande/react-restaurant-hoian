import React from "react";
import NavBar from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ImprintPage } from './pages/ImprintPage';
import { Footer } from './components/Footer';
import './i18n';
import './App.scss';

const App = (props) => {
  return (
    <>
      <Router>
        <NavBar/>
        <Route path={"/"} exact component={HomePage}/>
        <Route path={"/imprint"} exact component={ImprintPage}/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
