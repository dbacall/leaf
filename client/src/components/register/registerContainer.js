import React, { useEffect, useRef } from 'react';
import Register from './registerComponent';
import { registerUser, resetErrors } from '../../redux/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';

const RegisterContainer = (props) => {
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      dispatch(resetErrors());
      isInitialMount.current = false;
    }
  });

  const register = (userData) => {
    dispatch(registerUser(userData, props.history));
  };
  return <Register registerUser={register} errors={errors} />;
};

export default RegisterContainer;
