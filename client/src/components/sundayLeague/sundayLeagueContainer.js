import React, { useState, useEffect, useRef } from 'react';
import SundayLeague from './sundayLeagueComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeagueTeams } from '../../redux/thunks/sundayLeagueTeamsThunks';

const SundayLeagueContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [teamAdded, setTeamAdded] = useState(false);

  const sundayLeagueTeams = useSelector((state) => state.sundayLeagueTeams);
  const league = location.state.league;

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchSundayLeagueTeams(league.id));
    }
    if (teamAdded) {
      dispatch(fetchSundayLeagueTeams(league.id));
      setTeamAdded(false);
    }
  }, [teamAdded]);

  const submitTeam = async (name) => {
    const data = {
      name,
      league: league.id,
    };

    const path = '/sunday-leagues/team';

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
