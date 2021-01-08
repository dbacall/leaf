import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import sundayLeaguesReducer from './slices/sundayLeaguesSlice';
import sundayLeagueTeamsReducer from './slices/sundayLeagueTeamsSlice';
import sundayLeaguePlayersReducer from './slices/sundayLeaguePlayersSlice';
import sundayLeagueSeasonsReducer from './slices/sundayLeagueSeasonsSlice';
import sundayLeagueGameweekReducer from './slices/sundayLeagueGameweekSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer,
    sundayLeagues: sundayLeaguesReducer,
    sundayLeagueTeams: sundayLeagueTeamsReducer,
    sundayLeaguePlayers: sundayLeaguePlayersReducer,
    sundayLeagueSeasons: sundayLeagueSeasonsReducer,
    sundayLeagueGameweek: sundayLeagueGameweekReducer,
  },
});

export default store;
