import CategoriesSagas from 'sagas/categories'
import PostsSagas from 'sagas/posts'
import CommentsSagas from 'sagas/comments'

export default [
  CategoriesSagas(),
  PostsSagas(),
  CommentsSagas()
]
