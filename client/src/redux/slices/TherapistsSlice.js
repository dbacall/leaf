import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTherapistsForCategory, fetchTherapist } from '../thunks/TherapistsThunks'

const initialState = {
  selectedTherapist: {},
  therapists: [],
  status: 'loading',
};


const TherapistsSlice = createSlice({
  name: 'Therapists',
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.status = 'loading'
    },
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

    builder
      .addCase(fetchTherapist, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTherapist.fulfilled, (state, action) => {
        state.selectedTherapist = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const { resetStatus } = TherapistsSlice.actions;

export default TherapistsSlice.reducer;
