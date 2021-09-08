/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSymbolsList = createAsyncThunk('/stock/list/get', async () => {
  const { data } = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=94d238a41487fee05de69bf52aa5deec');
  return data;
});


export const marketSlice = createSlice({
  name: 'market',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getSymbolsList.fulfilled, (state, action) => {
      action.payload.forEach(({
        symbol, name, price, exchange,
      }) => {
      
        if (state.find((marketObj) => marketObj.market === exchange) === undefined) {
          // console.log(exchange);
          state.push({ market: exchange, symbols: [{ symbol, name, price }]})
        } else {
          state.find((marketObj) => marketObj.market === exchange).symbols.push( { symbol, name, price });
        }

      });
    });
  },

});

export default marketSlice.reducer;
