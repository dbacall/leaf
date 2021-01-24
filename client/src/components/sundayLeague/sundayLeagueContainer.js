import React, { useState, useEffect, useRef } from 'react';
import SundayLeague from './sundayLeagueComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeagueTeams } from '../../redux/thunks/sundayLeagueTeamThunks';
import { updateCurrentLeague } from '../../redux/slices/sundayLeagueSlice';

const SundayLeagueContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [teamAdded, setTeamAdded] = useState(false);

  const { status, teams } = useSelector((state) => state.sundayLeagueTeam);
  const { league } = location.state;

  const [currentLeagueUpdated, setCurrentLeagueUpdated] = useState(false);

  useEffect(() => {
    dispatch(updateCurrentLeague(league));
    setCurrentLeagueUpdated(true);
  }, [league]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (
      isInitialMount.current
    ) {
      isInitialMount.current = false;
      dispatch(fetchSundayLeagueTeams(league.id));
    }
  }, [currentLeagueUpdated]);

  const submitTeam = async (name) => {
    const data = {
      name,
      league: league.id,
    };

    const path = '/sunday-league/team';

    api.request('post', data, path);

    setTeamAdded(true);
  };

  return (
    <SundayLeague
      league={league}
      submitTeam={submitTeam}
      status={status}
      currentLeagueUpdated={currentLeagueUpdated}
    />
  );
};

export default SundayLeagueContainer;
