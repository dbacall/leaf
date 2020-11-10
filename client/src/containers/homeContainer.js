import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/home';

const HomeContainer = () => {
  const user = useSelector((state) => state.auth.user);

  return <Home user={user} />;
};

export default HomeContainer;
