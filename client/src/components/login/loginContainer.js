import React from 'react';
import Login from './loginComponent';
import { loginUser } from '../../redux/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';

const LoginContainer = (props) => {
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(loginUser(userData));
  };

  return (
    <Login
      push={props.history.push}
      auth={auth}
      loginUser={login}
      loginErrors={errors}
    />
  );
};

export default LoginContainer;
