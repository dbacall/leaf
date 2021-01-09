import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueGameweek from './sundayLeagueGameweekComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCurrentGameweek,
  fetchSpecificGameweek,
} from '../../redux/thunks/sundayLeagueGameweekThunks';

const SundayLeagueGameweekContainer = ({}) => {
  const dispatch = useDispatch();

  const [GameweekAdded, setGameweekAdded] = useState(false);

  const { gameweek, status } = useSelector(
    (state) => state.sundayLeagueGameweek
  );

  const { season } = useSelector((state) => state.sundayLeagueSeasons);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current && Object.keys(gameweek).length === 0) {
      isInitialMount.current = false;
      dispatch(fetchCurrentGameweek(season._id));
    }
    if (GameweekAdded) {
      dispatch(fetchCurrentGameweek(season._id));
      setGameweekAdded(false);
    }
  }, [GameweekAdded]);

  const createNewGameweek = async () => {
    const number = gameweek ? gameweek.number + 1 : 1;
    const data = {
      number,
      season: season._id,
    };

    const path = '/sunday-leagues/gameweek';

    await api.request('post', data, path);
    setGameweekAdded(true);
  };

  const getPrevious = () => {
    const number = gameweek.number - 1;
    dispatch(fetchSpecificGameweek({ season: season._id, number }));
  };

  const getNext = () => {
    const number = gameweek.number + 1;
    dispatch(fetchSpecificGameweek({ season: season._id, number }));
  };

  return (
    <SundayLeagueGameweek
      createNewGameweek={createNewGameweek}
      gameweek={gameweek}
      status={status}
      getPrevious={getPrevious}
      getNext={getNext}
    />
  );
};

export default SundayLeagueGameweekContainer;
