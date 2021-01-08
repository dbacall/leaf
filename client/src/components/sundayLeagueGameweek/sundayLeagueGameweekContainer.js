import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueGameweek from './sundayLeagueGameweekComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentGameweek } from '../../redux/thunks/sundayLeagueGameweekThunks';

const SundayLeagueGameweekContainer = ({ league }) => {
  const dispatch = useDispatch();

  const [GameweekAdded, setGameweekAdded] = useState(false);

  const { gameweek, status } = useSelector(
    (state) => state.sundayLeagueGameweek
  );

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current && Object.keys(gameweek).length === 0) {
      isInitialMount.current = false;
      dispatch(fetchCurrentGameweek());
    }
    if (GameweekAdded) {
      dispatch(fetchCurrentGameweek());
      setGameweekAdded(false);
    }
  }, [GameweekAdded]);

  const { season } = useSelector((state) => state.sundayLeagueSeasons);

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

  return (
    <SundayLeagueGameweek
      createNewGameweek={createNewGameweek}
      gameweek={gameweek}
      status={status}
    />
  );
};

export default SundayLeagueGameweekContainer;
