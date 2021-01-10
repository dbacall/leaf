import React, { useState, useEffect, useRef } from 'react';
import SundayLeagueFixture from './sundayLeagueFixtureComponent';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFixture } from '../../redux/thunks/sundayLeagueFixtureThunks';
import { fetchSundayLeagueTeams } from '../../redux/thunks/sundayLeagueTeamThunks';

const SundayLeagueFixtureContainer = ({ location }) => {
  const dispatch = useDispatch();

  const [goalAdded, setGoalAdded] = useState(false);

  const { fixture, status } = useSelector((state) => state.sundayLeagueFixture);

  const { teams } = useSelector((state) => state.sundayLeagueTeam);

  const { season } = useSelector((state) => state.sundayLeagueSeason);

  const isInitialMount = useRef(true);

  const { fixtureId } = location.state;

  useEffect(() => {
    if (isInitialMount.current) {
      console.log('here', location);
      isInitialMount.current = false;
      dispatch(fetchFixture(fixtureId));
    }
    if (goalAdded) {
      dispatch(fetchFixture(fixtureId));
      setGoalAdded(false);
    }
  }, [goalAdded]);

  const createNewGoal = async (minute, player, team) => {
    const data = {
      fixture: fixtureId,
      minute,
      player,
      season: season._id,
      team,
    };

    const path = '/sunday-leagues/goal';

    await api.request('post', data, path);
    setGoalAdded(true);
  };

  return (
    <SundayLeagueFixture
      createNewGoal={createNewGoal}
      fixture={fixture}
      status={status}
      teams={teams}
    />
  );
};

export default SundayLeagueFixtureContainer;
