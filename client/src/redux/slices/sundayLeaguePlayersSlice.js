import { createSlice } from '@reduxjs/toolkit';
import { fetchSundayLeaguePlayers } from '../thunks/sundayLeaguePlayersThunks';

const initialState = {
  players: [],
  status: 'loading',
};

const sundayLeaguePlayersSlice = createSlice({
  name: 'sundayLeaguePlayers',
  initialState,
  reducers: {
    // updateSundayLeagues(state, action) {
    //   return { ...state, leagues: action.payload };
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSundayLeaguePlayers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSundayLeaguePlayers.fulfilled, (state, action) => {
        state.players = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const {} = sundayLeaguePlayersSlice.actions;

export default sundayLeaguePlayersSlice.reducer;
