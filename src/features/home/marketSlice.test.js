// @ts-nocheck
import reducer, { selectMarket } from './marketSlice';

test('Initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      entities: [],
      selectedMarket: 'New York Stock Exchange',
      loading: true,
    },
  );
});

test('Set selected market', () => {
  const previousState = {
    entities: [],
    selectedMarket: 'New York Stock Exchange',
    loading: false,
  };
  expect(reducer(previousState, selectMarket('NASDAQ Global Market'))).toEqual(
    {
      entities: [],
      selectedMarket: 'NASDAQ Global Market',
      loading: false,
    },
  );
});
