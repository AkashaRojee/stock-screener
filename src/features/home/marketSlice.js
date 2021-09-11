import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { findObjInArr } from 'common/utils/helpers';

export const getSymbolsList = createAsyncThunk('/stock/list/get', async () => {
  const { data } = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=94d238a41487fee05de69bf52aa5deec');
  return data;
});

export const marketSlice = createSlice({
  name: 'market',
  initialState: { entities: [], selectedMarket: 'New York Stock Exchange', loading: true },
  reducers: {
    selectMarket: (state, action) => {
      state.selectedMarket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSymbolsList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSymbolsList.fulfilled, (state, action) => {
      state.loading = false;

      action.payload.forEach(({
        symbol, name, price, exchange,
      }) => {
        let marketObj = findObjInArr(state.entities, 'market', exchange);

        if (marketObj) marketObj = marketObj.symbols.push({ symbol, name, price });

        else {
          state.entities.push({
            market: exchange,
            symbols: [{ symbol, name, price }],
          });
        }
      });
    });
  },

});

export const { selectMarket } = marketSlice.actions;

export default marketSlice.reducer;
