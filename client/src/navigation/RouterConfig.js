import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private-route/PrivateRoute';
import Navbar from '../components/navbar/';
import Register from '../components/register/';
import Login from '../components/login/';
import Home from '../components/home/';
import MySundayLeagues from '../components/mySundayLeagues';
import SundayLeague from '../components/sundayLeague';

const RouterConfig = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/my-sunday-leagues"
            component={MySundayLeagues}
          />
          <PrivateRoute path="/sunday-league/:id" component={SundayLeague} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterConfig;
