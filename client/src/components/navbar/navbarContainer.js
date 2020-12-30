import React from 'react';
import Navbar from './navbarComponent';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

const NavbarContainer = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return <Navbar user={user} logout={logout} />;
};

export default NavbarContainer;
