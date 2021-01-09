import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MySundayLeagues from './mySundayLeaguesComponent';
import { fetchSundayLeagues } from '../../redux/slices/sundayLeagueSlice';

const MySundayLeaguesContainer = () => {
  const user = useSelector((state) => state.auth.user);
  const sundayLeagues = useSelector((state) => state.sundayLeague);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sundayLeagues.leagues.length === 0) {
      dispatch(fetchSundayLeagues(user.id));
    }
  }, [user]);

  return (
    <MySundayLeagues
      leagues={sundayLeagues.leagues}
      status={sundayLeagues.status}
    />
  );
};

export default MySundayLeaguesContainer;
