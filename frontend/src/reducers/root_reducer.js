
import { combineReducers } from 'redux';
import posts from './posts_reducer';

const RootReducer = combineReducers({
  posts
});

export default RootReducer;