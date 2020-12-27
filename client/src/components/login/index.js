import React from 'react';
import Login from './component';

const LoginContainer = (props) => {
  return <Login push={props.history.push} />;
};

export default LoginContainer;
