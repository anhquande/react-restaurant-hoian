import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './i18n';
import './App.scss';
import FullScreenLayout from './layout/FullScreenLayout';
import PublicLayout from './layout/PublicLayout';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/fullscreen'} component={FullScreenLayout}/>
        <Route path={'/'} component={PublicLayout}/>
      </Switch>
    </Router>
  );
}

export default App;
