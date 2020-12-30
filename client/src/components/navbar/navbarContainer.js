import React from 'react';
import Navbar from './navbarComponent';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

const NavbarContainer = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return <Navbar auth={auth} logout={logout} />;
};

export default NavbarContainer;
