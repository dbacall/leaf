import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueFixtures from './sundayLeagueFixturesComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchCurrentSeason } from '../../redux/thunks/sundayLeagueSeasonsThunks';

const SundayLeagueFixturesContainer = ({ gameweek }) => {
  const dispatch = useDispatch();

  const [fixtureAdded, setFixtureAdded] = useState(false);

  const { teams } = useSelector((state) => state.sundayLeagueTeams);

  // const sundayLeagueSeasons = useSelector((state) => state.sundayLeagueSeasons);

  // const isInitialMount = useRef(true);

  // const season = sundayLeagueSeasons.season;

  // useEffect(() => {
  //   if (isInitialMount.current && Object.keys(season).length === 0) {
  //     isInitialMount.current = false;
  //     dispatch(fetchCurrentSeason());
  //   }
  //   if (seasonAdded) {
  //     dispatch(fetchCurrentSeason());
  //     setSeasonAdded(false);
  //   }
  // }, [seasonAdded]);

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
      // season={season}
      // status={sundayLeagueSeasons.status}
    />
  );
};

export default SundayLeagueFixturesContainer;
