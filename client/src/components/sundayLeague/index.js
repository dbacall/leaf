import React from 'react';
import SundayLeague from './component';
import axios from 'axios';
import { config } from '../../config';

const SundayLeagueContainer = (props) => {
  const url = config;

  const submitTeam = async (teamName) => {
    const data = {
      teamName: teamName,
      league: props.location.state.league.id,
    };
    axios.post(`${url}/sunday-leagues/team`, data).then((res) => {
      console.log('Team successfully added.');
    });
  };

  return (
    <SundayLeague
      league={props.location.state.league}
      submitTeam={submitTeam}
    />
  );
};

export default SundayLeagueContainer;
