import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchTherapistsForCategory = createAsyncThunk(
  'therapists/fetchTherapistsForCategory',
  async (category) => {

    const response = await api.request({
      method: 'get',
      path: `/therapist/category/${category}`
    });

    console.log('here', response);
    return response;
  }
);

export const fetchTherapist = createAsyncThunk(
  'therapists/fetchTherapist',
  async (id) => {

    const response = await api.request({
      method: 'get',
      path: `/therapist/${id}`
    });

    return response;
  }
);
