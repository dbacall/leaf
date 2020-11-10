import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/home';

const HomeContainer = () => {
  const name = useSelector((state) => state.auth.user.name);

  return <Home name={name} />;
};

export default HomeContainer;
