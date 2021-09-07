import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSymbolsList = createAsyncThunk('/stock/list/get', async () => {
  const { data } = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=7c1ec8628463b42568e264b7e2fac67d');
  return data;
});

export const marketSlice = createSlice({
  name: 'markets',
  initialState: {},
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getSymbolsList.fulfilled, (state, action) => {
      action.payload.forEach(({
        symbol, name, price, exchange,
      }) => {
        if (state[exchange] === undefined) state[exchange] = {};
        state[exchange][symbol] = { name, price };
      });
    });
  },

});

export default marketSlice.reducer;
