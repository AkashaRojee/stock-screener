import { combineReducers } from 'redux';
import marketReducer from 'features/home/marketSlice';

export default combineReducers({
  market: marketReducer
});
