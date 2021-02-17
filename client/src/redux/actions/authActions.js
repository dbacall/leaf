import api from '../../services/api';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_USER,
} from './types';

export const registerUser = (userData, history) => async (dispatch) => {
  const path = '/users/register';

  const response = await api.request({ method: 'post', data: userData, path });

  if (response.error) {
    dispatch({
      type: GET_ERRORS,
      payload: response.errors,
    });
  } else {
    history.push('/login');
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  const path = '/users/login';

  const response = await api.request({ method: 'post', data: userData, path });

  if (response.error) {
    dispatch({
      type: GET_ERRORS,
      payload: response.errors,
    });
  } else {
    const { token } = response.data;

    localStorage.setItem('jwtToken', token);

    setAuthToken(token);

    const decoded = jwt_decode(token);

    dispatch(setCurrentUser(decoded));
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded.user,
  };
};

export const updateUser = (user) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: user,
  });
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const resetErrors = () => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: {},
  });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
