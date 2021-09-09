// @ts-ignore
import { combineReducers } from 'redux';
import marketReducer from 'features/home/marketSlice';
import symbolsReducer from 'features/details/symbolsSlice';

export default combineReducers({
  market: marketReducer,
  symbols: symbolsReducer,
});
