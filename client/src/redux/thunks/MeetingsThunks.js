import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchMeetingsByCategory = createAsyncThunk(
  'meetings/fetchMeetingsByCategory',
  async ({ category, therapistId }) => {
    const response = await api.request({
      method: 'get',
      path: `/meeting/${therapistId}/${category}`
    });

    console.log('here', response);

    return response;
  }
);
