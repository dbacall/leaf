import React from 'react';
import { useSelector } from 'react-redux';
import Home from './homeComponent';
import api from '../../services/api';

const HomeContainer = () => {
  const user = useSelector((state) => state.auth.user);

  const submitLeague = (name, owner) => {
    const data = {
      name,
      owner,
    };

    const path = '/sunday-league/new';

    api.request('post', data, path);
  };

  return <Home user={user} submitLeague={submitLeague} />;
};

export default HomeContainer;
