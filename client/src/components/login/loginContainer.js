import React, { useEffect } from 'react';
import Login from './loginComponent';
import { loginUser, resetErrors } from '../../redux/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';

const LoginContainer = (props) => {
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push('/');
      dispatch(resetErrors());
    }
  }, [auth]);

  const login = (userData) => {
    dispatch(loginUser(userData));
  };

  return <Login loginUser={login} errors={errors} />;
};

export default LoginContainer;
