import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateSundayLeague from './createSundayLeagueComponent'
import api from '../../../services/api'
import { setLeagueCreated } from '../../../redux/slices/sundayCreatorSlice'


const CreateSundayLeagueContainer = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user);

  const addLeague = (name) => {
    const data = {
      name,
      owner: user.id,
    };

    const path = '/sunday-league/new';

    api.request('post', data, path);

    dispatch(setLeagueCreated(true))
  };

  return (<CreateSundayLeague
    addLeague={addLeague}
  />);
}

export default CreateSundayLeagueContainer;