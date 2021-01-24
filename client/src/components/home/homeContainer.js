import React from 'react';
import { useSelector } from 'react-redux';
import Home from './homeComponent';

const HomeContainer = () => {
  const user = useSelector((state) => state.auth.user);

  return <Home user={user} />;
};

export default HomeContainer;
