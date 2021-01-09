import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueFixtures from './sundayLeagueFixturesComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpecificGameweek } from '../../redux/thunks/sundayLeagueGameweekThunks';

const SundayLeagueFixturesContainer = () => {
  const dispatch = useDispatch();

  const [fixtureAdded, setFixtureAdded] = useState(false);

  const { teams } = useSelector((state) => state.sundayLeagueTeam);

  const { gameweek, status } = useSelector(
    (state) => state.sundayLeagueGameweek
  );

  const { season } = useSelector((state) => state.sundayLeagueSeason);

  // const isInitialMount = useRef(true);

  useEffect(() => {
    // if (isInitialMount.current && Object.keys(gameweek).length === 0) {
    //   isInitialMount.current = false;
    //   dispatch(fetchCurrentGameweek());
    // }
    if (fixtureAdded) {
      dispatch(
        fetchSpecificGameweek({ season: season._id, number: gameweek.number })
      );
      setFixtureAdded(false);
    }
  }, [fixtureAdded]);

  const createNewFixture = async (homeTeam, awayTeam, date) => {
    const data = {
      homeTeam,
      awayTeam,
      date,
      gameweek: gameweek.id,
    };

    const path = '/sunday-leagues/fixture';

    await api.request('post', data, path);
    setFixtureAdded(true);
  };

  return (
    <SundayLeagueFixtures
      createNewFixture={createNewFixture}
      teams={teams}
      gameweek={gameweek}
      status={status}
    />
  );
};

export default SundayLeagueFixturesContainer;
