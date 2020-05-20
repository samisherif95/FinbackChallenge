import { RECEIVE_POSTS, RECEIVE_NEW_POST, DELETE_POST, INCREMENT_LIKES } from '../actions/post_action';
import { set } from 'mongoose';
  
const PostsReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_POSTS:
      for (const post of action.posts.data) {
        newState[post._id] = post;
      }
      return newState;
    case RECEIVE_NEW_POST:
      newState[action.post.data._id] = action.post.data
      return newState;
    case DELETE_POST:
      delete newState[action.post.data._id]
      return newState
    case INCREMENT_LIKES:
      newState[action.post.data._id].likes = action.post.data.likes
      return newState
    default:
      return state;
  }
};

export default PostsReducer;