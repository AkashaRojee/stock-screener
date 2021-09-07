import { combineReducers } from 'redux';
import marketReducer from 'features/home/marketSlice';
import symbolReducer from 'features/details/symbolsSlice';

export default combineReducers({
  market: marketReducer,
  symbol: symbolReducer,
});
