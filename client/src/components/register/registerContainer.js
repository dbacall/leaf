import React from 'react';
import Register from './registerComponent';
import { registerUser } from '../../redux/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';

const RegisterContainer = (props) => {
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const register = (userData) => {
    dispatch(registerUser(userData, props.history));
  };
  return <Register registerUser={register} registerErrors={errors} />;
};

export default RegisterContainer;
