import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import sundayLeagueReducer from './slices/sundayLeagueSlice';
import sundayLeagueTeamReducer from './slices/sundayLeagueTeamSlice';
import sundayLeaguePlayerReducer from './slices/sundayLeaguePlayerSlice';
import sundayLeagueSeasonReducer from './slices/sundayLeagueSeasonSlice';
import sundayLeagueGameweekReducer from './slices/sundayLeagueGameweekSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer,
    sundayLeague: sundayLeagueReducer,
    sundayLeagueTeam: sundayLeagueTeamReducer,
    sundayLeaguePlayer: sundayLeaguePlayerReducer,
    sundayLeagueSeason: sundayLeagueSeasonReducer,
    sundayLeagueGameweek: sundayLeagueGameweekReducer,
  },
});

export default store;
