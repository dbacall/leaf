import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueTeam from './sundayLeagueTeamComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeaguePlayers } from '../../redux/thunks/sundayLeaguePlayersThunks';

const SundayLeagueTeamContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [playerAdded, setPlayerAdded] = useState(false);

  const sundayLeaguePlayers = useSelector((state) => state.sundayLeaguePlayers);
  const { team } = location.state;

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchSundayLeaguePlayers(team.id));
    }
    if (playerAdded) {
      dispatch(fetchSundayLeaguePlayers(team.id));
      setPlayerAdded(false);
    }
  }, [playerAdded]);

  const submitPlayer = async (firstName, surname, position) => {
    const data = {
      firstName,
      surname,
      position,
      team: team.id,
    };

    const path = '/sunday-leagues/player';

    api.request('post', data, path);

    setPlayerAdded(true);
  };

  return (
    <SundayLeagueTeam
      team={team}
      submitPlayer={submitPlayer}
      players={sundayLeaguePlayers.players}
      status={sundayLeaguePlayers.status}
    />
  );
};

export default SundayLeagueTeamContainer;
