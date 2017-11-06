import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import posts from 'reducers/posts'
import categories from 'reducers/categories'

export default combineReducers({
  posts,
  categories,
  form: formReducer
})
