import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import posts from 'reducers/posts'
import categories from 'reducers/categories'
import comments from 'reducers/comments'

export default combineReducers({
  posts,
  categories,
  comments,
  form: formReducer
})
