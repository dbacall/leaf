import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueTeam from './sundayLeagueTeamComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchSundayLeagueTeams } from '../../redux/thunks/sundayLeagueTeamsThunks';

const SundayLeagueTeamContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [teamAdded, setTeamAdded] = useState(false);
  console.log('here');
  // const sundayLeagueTeams = useSelector((state) => state.sundayLeagueTeams);
  const team = location.state.team;

  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //     dispatch(fetchSundayLeagueTeams(leagueId));
  //   }
  //   if (teamAdded) {
  //     dispatch(fetchSundayLeagueTeams(leagueId));
  //     setTeamAdded(false);
  //   }
  // }, [teamAdded]);

  // const submitTeam = async (name) => {
  //   const data = {
  //     name,
  //     league: leagueId,
  //   };

  //   const path = '/sunday-leagues/team';

  //   api.request('post', data, path);

  //   setTeamAdded(true);
  // };

  return (
    <SundayLeagueTeam
      team={team}
      // submitTeam={submitTeam}
      // teams={sundayLeagueTeams.teams}
      // status={sundayLeagueTeams.status}
    />
  );
};

export default SundayLeagueTeamContainer;
