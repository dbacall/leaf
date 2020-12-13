import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './components/private-route/PrivateRoute';
import './App.css';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './containers/homeContainer';
import MySundayLeagues from './containers/mySundayLeaguesContainer';
import SundayLeague from './containers/sundayLeagueContainer';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = './login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <PrivateRoute
                path="/sunday-league/:id"
                component={SundayLeague}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
