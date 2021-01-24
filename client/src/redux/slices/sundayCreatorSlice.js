import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leagueCreated: false,
  teamsAdded: false,
};

const sundayCreatorSlice = createSlice({
  name: 'sundayCreator',
  initialState,
  reducers: {
    setLeagueCreated(state, action) {
      state.leagueCreated = action.payload;
    },
    setTeamsAdded(state, action) {
      state.leagueCreated = action.payload;
    },
  },
});

export const { setLeagueCreated, setTeamsAdded } = sundayCreatorSlice.actions;

export default sundayCreatorSlice.reducer;
