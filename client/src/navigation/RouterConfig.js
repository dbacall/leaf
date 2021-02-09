import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from '../components/navbar/navbarContainer';
import Register from '../components/register/registerContainer';
import Login from '../components/login/loginContainer';
import Home from '../components/home/homeContainer';
import NewTherapistForm from '../components/NewTherapistForm/NewTherapistFormContainer'
import Category from '../components/Category/CategoryContainer'
import Therapist from '../components/Therapist/TherapistContainer'
import NewMeetingForm from '../components/NewMeetingForm/NewMeetingFormContainer'

const RouterConfig = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path='/therapist-form' component={NewTherapistForm} />
          <Route exact path="/category/:category" component={Category} />
          <Route exact path="/therapist/:id" component={Therapist} />
          <Route exact path="/therapist/:id/:category" component={Therapist} />
          <PrivateRoute exact path='/meeting-form' component={NewMeetingForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouterConfig;
