import { createSlice } from '@reduxjs/toolkit';
import { fetchMeetingsByCategory } from '../thunks/MeetingsThunks'

const initialState = {
  meetings: [],
  status: 'loading',
};


const MeetingsSlice = createSlice({
  name: 'Meetings',
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.status = 'loading'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetingsByCategory.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMeetingsByCategory.fulfilled, (state, action) => {
        state.meetings = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const { resetStatus } = MeetingsSlice.actions;

export default MeetingsSlice.reducer;
