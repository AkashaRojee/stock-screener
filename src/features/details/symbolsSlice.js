/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanyQuote = createAsyncThunk('/quote/get', async (symbol) => {
  const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=7c1ec8628463b42568e264b7e2fac67d`);
  return data;
});

export const symbolsSlice = createSlice({
  name: 'symbols',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanyQuote.fulfilled, (state, action) => {
      const { symbol, name, price, open, previousClose } = action.payload[0];
      if (state.find((symbolObj) => symbolObj.symbol === symbol) === undefined) {
        state.push({ symbol: symbol, data: { name, price, open, previousClose }})
      } else {
        state.find((symbolObj) => symbolObj.symbol === symbol).data = { name, price, open, previousClose };
      }

    });

  },

});

export default symbolsSlice.reducer;
