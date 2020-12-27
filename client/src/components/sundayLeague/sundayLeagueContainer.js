import React from 'react';
import SundayLeague from './sundayLeagueComponent';
import api from '../../services/api';

const SundayLeagueContainer = (props) => {
  const submitTeam = async (teamName) => {
    const data = {
      teamName,
      league: props.location.state.league.id,
    };

    const path = '/sunday-leagues/team';

    api.request('post', data, path);
  };

  return (
    <SundayLeague
      league={props.location.state.league}
      submitTeam={submitTeam}
    />
  );
};

export default SundayLeagueContainer;
