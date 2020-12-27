import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MySundayLeagues from './component';
import { fetchSundayLeagues } from '../../redux/slices/sundayLeaguesSlice';
import axios from 'axios';

const MySundayLeaguesContainer = () => {
  const user = useSelector((state) => state.auth.user);
  const sundayLeagues = useSelector((state) => state.sundayLeagues);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('user', user);
    dispatch(fetchSundayLeagues(user.id));
  }, [user]);

  return (
    <MySundayLeagues
      leagues={sundayLeagues.leagues}
      status={sundayLeagues.status}
    />
  );
};

export default MySundayLeaguesContainer;
