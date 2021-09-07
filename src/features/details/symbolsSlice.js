import { createSlice } from '@reduxjs/toolkit';
// import { getSymbolsList } from 'features/home/marketSlice';

export const symbolSlice = createSlice({
  name: 'symbols',
  initialState: {},
  reducers: {
    // add: (state, action) => {
    //   console.log('add');
    //   const { symbol, name, price } = action.payload;
    //   state[symbol] = { name, price };
    //   console.log(state[symbol]);
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getSymbolsList.fulfilled, (state, action) => {
  //     action.payload.forEach((symbolObject) => {
  //       const { symbol, name, price } = symbolObject;
  //       state[symbol] = { name, price };
  //     });
  //   });
  // },

});

// export const { add } = symbolSlice.actions;

export default symbolSlice.reducer;
