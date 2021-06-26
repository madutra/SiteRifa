import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//importação de rotas
/* import Home from './Home/Home'; */
import HomeScreen from './home/index';

const PagesRoot = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
  </Router>
)


export default PagesRoot;
