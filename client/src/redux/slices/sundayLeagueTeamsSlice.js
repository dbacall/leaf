import { createSlice } from '@reduxjs/toolkit';
import { fetchSundayLeagueTeams } from '../thunks/sundayLeagueTeamsThunks';

const initialState = {
  teams: [],
  status: 'loading',
};

const sundayLeagueTeamsSlice = createSlice({
  name: 'sundayLeagueTeams',
  initialState,
  reducers: {
    // updateSundayLeagues(state, action) {
    //   return { ...state, leagues: action.payload };
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSundayLeagueTeams.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSundayLeagueTeams.fulfilled, (state, action) => {
        state.teams = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const {} = sundayLeagueTeamsSlice.actions;

export default sundayLeagueTeamsSlice.reducer;
