import React from "react";
import { makeStyles } from '@material-ui/styles';
import NavBar from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ImprintPage } from './pages/ImprintPage';
import { Footer } from './components/Footer';
import './i18n';
import './App.scss';

const useStyles = makeStyles({
  main: {
    minHeight: 'calc(100vh - 95px)',
    paddingTop: '65px',
  },
});

const App = (props) => {
  const classes = useStyles(props);
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
