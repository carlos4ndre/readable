import { combineReducers } from 'redux';
import posts from 'reducers/posts'
import comments from 'reducers/comments'
import categories from 'reducers/categories'

export default combineReducers({
  posts,
  comments,
  categories,
});
