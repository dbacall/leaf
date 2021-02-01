import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from '../components/navbar/navbarContainer';
import Register from '../components/register/registerContainer';
import Login from '../components/login/loginContainer';
import Home from '../components/home/homeContainer';

const RouterConfig = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterConfig;
