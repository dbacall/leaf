import React, { useState, useEffect, useRef } from 'react';
import SundayLeague from './sundayLeagueComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeagueTeams } from '../../redux/slices/sundayLeagueTeamsSlice';

const SundayLeagueContainer = (props) => {
  const dispatch = useDispatch();

  const [teamAdded, setTeamAdded] = useState(false);

  const sundayLeagueTeams = useSelector((state) => state.sundayLeagueTeams);
  const leagueId = props.location.state.league.id;

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount || teamAdded) {
      dispatch(fetchSundayLeagueTeams(leagueId));
      setTeamAdded(false);
    }
  }, [teamAdded]);

  const submitTeam = async (teamName) => {
    const data = {
      teamName,
      league: leagueId,
    };

    const path = '/sunday-leagues/team';

    api.request('post', data, path);

    setTeamAdded(true);
  };

  return (
    <SundayLeague
      league={props.location.state.league}
      submitTeam={submitTeam}
      teams={sundayLeagueTeams.teams}
      status={sundayLeagueTeams.status}
    />
  );
};

export default SundayLeagueContainer;
