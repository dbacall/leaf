import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueFixtures from './sundayLeagueFixturesComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchCurrentSeason } from '../../redux/thunks/sundayLeagueSeasonsThunks';
import { fetchCurrentGameweek } from '../../redux/thunks/sundayLeagueGameweekThunks';

const SundayLeagueFixturesContainer = () => {
  const dispatch = useDispatch();

  const [fixtureAdded, setFixtureAdded] = useState(false);

  const { teams } = useSelector((state) => state.sundayLeagueTeams);

  const { gameweek, status } = useSelector(
    (state) => state.sundayLeagueGameweek
  );

  // const sundayLeagueSeasons = useSelector((state) => state.sundayLeagueSeasons);

  const isInitialMount = useRef(true);

  useEffect(() => {
    // if (isInitialMount.current && Object.keys(gameweek).length === 0) {
    //   isInitialMount.current = false;
    //   dispatch(fetchCurrentGameweek());
    // }
    if (fixtureAdded) {
      console.log('called');
      dispatch(fetchCurrentGameweek());
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
      fixtures={gameweek.fixtures}
      status={status}
    />
  );
};

export default SundayLeagueFixturesContainer;
