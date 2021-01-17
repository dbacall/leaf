import React, { useState, useEffect, useRef } from 'react';
import SundayLeague from './sundayLeagueComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeagueTeams } from '../../redux/thunks/sundayLeagueTeamThunks';
import { updateCurrentLeague } from '../../redux/slices/sundayLeagueSlice';

const SundayLeagueContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [teamAdded, setTeamAdded] = useState(false);

  const sundayLeagueTeams = useSelector((state) => state.sundayLeagueTeam);
  const { currentLeague } = useSelector((state) => state.sundayLeague);
  const { league } = location.state;

  const [currentLeagueUpdated, setCurrentLeagueUpdated] = useState(false);

  useEffect(() => {
    dispatch(updateCurrentLeague(league));
    setCurrentLeagueUpdated(true);
  }, [league]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (
      isInitialMount.current &&
      (sundayLeagueTeams.teams.length === 0 || currentLeagueUpdated)
    ) {
      isInitialMount.current = false;
      dispatch(fetchSundayLeagueTeams(league.id));
    }
    if (teamAdded) {
      dispatch(fetchSundayLeagueTeams(league.id));
      setTeamAdded(false);
    }
  }, [teamAdded, currentLeague]);

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
      teams={sundayLeagueTeams.teams}
      status={sundayLeagueTeams.status}
    />
  );
};

export default SundayLeagueContainer;
