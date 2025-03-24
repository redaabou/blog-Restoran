import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRepas = createAsyncThunk('repas/fetchRepas', async () => {
  const response = await axios.get('http://localhost:4000/repas');
  return response.data;
});

const repasSlice = createSlice({
  name: 'repas',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRepas.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default repasSlice.reducer;