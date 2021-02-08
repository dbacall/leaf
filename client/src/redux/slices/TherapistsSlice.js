import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTherapistsForCategory } from '../thunks/TherapistsThunks'

const initialState = {
  // currentLeague: {},
  therapists: [],
  status: 'loading',
};


const TherapistsSlice = createSlice({
  name: 'Therapists',
  initialState,
  reducers: {
    // updateCurrentLeague(state, action) {
    //   state.currentLeague = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTherapistsForCategory.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTherapistsForCategory.fulfilled, (state, action) => {
        state.therapists = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const { } = TherapistsSlice.actions;

export default TherapistsSlice.reducer;
