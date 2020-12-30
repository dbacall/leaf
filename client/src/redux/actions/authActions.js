import api from '../../services/api';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  const path = '/users/register';

  api
    .request('post', userData, path)
    .then((res) => history.push('/login')) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Login - get user token
export const loginUser = (userData) => async (dispatch) => {
  const path = '/users/login';
  const response = await api.request('post', userData, path);
  console.log('response', response);
  if (response.error) {
    dispatch({
      type: GET_ERRORS,
      payload: response.errors,
    });
  } else {
    const { token } = response.data;

    localStorage.setItem('jwtToken', token);
    // Set token to Auth header
    setAuthToken(token);

    const decoded = jwt_decode(token);

    dispatch(setCurrentUser(decoded));
  }
  //   const { token } = res.data;

  //   localStorage.setItem('jwtToken', token);
  //   // Set token to Auth header
  //   setAuthToken(token);

  //   const decoded = jwt_decode(token);

  //   dispatch(setCurrentUser(decoded));
  // })
  // .catch((err) => {
  //   console.log(err);
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.message,
  //   });
  // });
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded.user,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
