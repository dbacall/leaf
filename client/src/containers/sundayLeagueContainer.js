import React, { useState, useEffect } from 'react';
import SundayLeague from '../components/sundayLeague';

const SundayLeagueContainer = (props) => {
  return <SundayLeague league={props.location.state.league} />;
};

export default SundayLeagueContainer;
