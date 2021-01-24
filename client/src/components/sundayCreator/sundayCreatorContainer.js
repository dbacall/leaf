import React from 'react';
import SundayCreator from './sundayCreatorComponent'
import { useSelector, useDispatch } from 'react-redux'

const SundayCreatorContainer = () => {
  const { leagueCreated, teamsAdded } = useSelector((state) => state.sundayCreator)
  return (<SundayCreator
    leagueCreated={leagueCreated}
    teamsAdded={teamsAdded}
  />);
}

export default SundayCreatorContainer;