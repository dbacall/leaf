import React, { useState, useEffect } from 'react';
import SundayLeague from '../components/sundayLeague';
import axios from 'axios';
import { config } from '../config';

const SundayLeagueContainer = (props) => {
  const url = config;

  const submitTeam = async (teamName) => {
    const data = {
      teamName: teamName,
      leagueId: props.location.state.league._id,
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
