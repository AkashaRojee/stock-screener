// @ts-nocheck
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import marketReducer from 'features/home/marketSlice';
import symbolsReducer from 'features/details/symbolsSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore(
      {
        reducer: { market: marketReducer, symbols: symbolsReducer },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
          serializableCheck: false,
        }),
        preloadedState,
      },
    ),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
