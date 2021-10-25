import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ListReducer from './ListReducer';

const Reducers = combineReducers({
  UserReducer,
  ListReducer
});

export default Reducers;
