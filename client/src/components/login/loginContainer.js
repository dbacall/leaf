import React from 'react';
import Login from './loginComponent';

const LoginContainer = (props) => {
  return <Login push={props.history.push} />;
};

export default LoginContainer;
