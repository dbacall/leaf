import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueTeam from './sundayLeagueTeamComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSundayLeaguePlayers } from '../../redux/thunks/sundayLeaguePlayersThunks';
import { updateCurrentTeam } from '../../redux/slices/sundayLeagueTeamsSlice';

const SundayLeagueTeamContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [playerAdded, setPlayerAdded] = useState(false);

  const sundayLeaguePlayers = useSelector((state) => state.sundayLeaguePlayers);
  const { currentTeam } = useSelector((state) => state.sundayLeagueTeams);
  const { team } = location.state;

  const [currentTeamUpdated, setCurrentTeamUpdated] = useState(false);

  useEffect(() => {
    dispatch(updateCurrentTeam(team));
    setCurrentTeamUpdated(true);
  }, [team]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (
      isInitialMount.current &&
      (sundayLeaguePlayers.players.length === 0 || currentTeamUpdated)
    ) {
      isInitialMount.current = false;
      dispatch(fetchSundayLeaguePlayers(team.id));
    }
    if (playerAdded) {
      dispatch(fetchSundayLeaguePlayers(team.id));
      setPlayerAdded(false);
    }
  }, [playerAdded, currentTeam]);

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
