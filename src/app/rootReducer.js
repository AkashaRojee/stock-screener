import { combineReducers } from 'redux';
import marketReducer from 'features/home/marketSlice';
// @ts-ignore
import symbolsReducer from 'features/details/symbolsSlice';

export default combineReducers({
  market: marketReducer,
  symbols: symbolsReducer,
});
