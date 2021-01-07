import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueSeason from './sundayLeagueSeasonComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentSeason } from '../../redux/thunks/sundayLeagueSeasonsThunks';

const SundayLeagueSeasonContainer = ({ league }) => {
  const dispatch = useDispatch();

  const [seasonAdded, setSeasonAdded] = useState(false);

  const sundayLeagueSeasons = useSelector((state) => state.sundayLeagueSeasons);

  const isInitialMount = useRef(true);

  const season = sundayLeagueSeasons.season;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchCurrentSeason());
    }
    if (seasonAdded) {
      dispatch(fetchCurrentSeason());
      setSeasonAdded(false);
    }
  }, [seasonAdded]);

  const createNewSeason = async (yearFrom, yearTo) => {
    const number = season ? season.number + 1 : 1;
    const data = {
      number,
      yearFrom,
      yearTo,
      league: league.id,
    };

    const path = '/sunday-leagues/season';

    await api.request('post', data, path);
    setSeasonAdded(true);
  };

  return (
    <SundayLeagueSeason
      createNewSeason={createNewSeason}
      season={season}
      status={sundayLeagueSeasons.status}
    />
  );
};

export default SundayLeagueSeasonContainer;
