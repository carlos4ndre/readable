import * as types from 'actionTypes'
import { UP_VOTE } from 'utils/vote'

const initialState = {
  byId: {},
  allIds: [],
  isFetchingPosts: false,
  isFetchingPost: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // manage posts and category posts
    case types.GET_POSTS_REQUEST:
    case types.GET_CATEGORY_POSTS_REQUEST:
      return { ...state, isFetchingPosts: true }
    case types.GET_POSTS_SUCCESS:
    case types.GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...addPosts(state, action.posts),
        isFetchingPosts: false
      }
    case types.GET_POSTS_FAILURE:
    case types.GET_CATEGORY_POSTS_FAILURE:
      return { ...state, isFetchingPosts: false }

    // manage single post
    case types.GET_POST_REQUEST:
      return { ...state, isFetchingPost: true }
    case types.GET_POST_SUCCESS:
      return {
        ...addPost(state, action.post),
        isFetchingPost: false
      }
    case types.GET_POST_FAILURE:
      return { ...state, isFetchingPost: false }
    case types.CREATE_POST_SUCCESS:
      return addPost(state, action.post)
    case types.VOTE_POST_SUCCESS:
      return updatePostScore(state, action.postId, action.value)
    case types.UPDATE_POST_SUCCESS:
      return updatePost(state, action.post)
    case types.DELETE_POST_SUCCESS:
      return deletePost(state, action.post)
    case types.GET_COMMENTS_SUCCESS:
      return addPostComments(state, action.postId, action.comments)
    case types.CREATE_COMMENT_SUCCESS:
      return addPostComment(state, action.comment.parentId, action.comment)
    case types.DELETE_COMMENT_SUCCESS:
      return deletePostCommentIds(state, action.comment)
    default:
      return state
  }
}

const addPosts = (state, posts = []) => (
  posts.reduce((obj, post) => addPost(obj, post), state)
)

const addPost = (state, post) => ({
  ...state,
  byId: {
    ...state.byId,
    [post.id]: {
      ...post,
      commentIds: post.commentIds || []
    }
  },
  allIds: state.allIds.concat(post.id)
})

const updatePostScore = (state, postId, value) => {
  const post = state.byId[postId]
  const points = value === UP_VOTE ? 1 : -1

  return {
    ...state,
    byId :{
      ...state.byId,
      [postId]: {
        ...post,
        voteScore: post.voteScore + points
      }
    }
  }
}

const updatePost = (state, post) => ({
  ...state,
  byId :{
    ...state.byId,
    [post.id]: {
      ...post
    }
  }
})

const addPostComments = (state, postId, comments) => {
  const post = state.byId[postId]
  const commentIds = comments.map(comment => comment.id)

  return {
    ...state,
    byId : {
      ...state.byId,
      [postId]: {
        ...post,
        commentIds
      }
    }
  }
}

const addPostComment = (state, postId, comment) => {
  const post = state.byId[postId]
  const commentId = comment.id

  return {
    ...state,
    byId : {
      ...state.byId,
      [postId]: {
        ...post,
        commentCount: post.commentCount + 1,
        commentIds: post.commentIds.concat(commentId)
      }
    }
  }
}

const deletePost = (state, post) => {
  const postId = post.id
  const oldById = state.byId
  const newById = Object.keys(oldById).reduce((obj, key) => {
    if (key !== postId) {
      return { ...obj, [key]: oldById[key] }
    }
    return obj
  }, {})

  return {
    ...state,
    byId: newById,
    allIds: state.allIds.filter(id => id !== postId)
  }
}

const deletePostCommentIds = (state, comment) => {
  const commentId = comment.id
  const postId = comment.parentId
  const post = state.byId[postId]
  const updatedCommentIds = post.commentIds.filter(id => id !== commentId)

  return {
    ...state,
    byId: {
      ...state.byId,
      [postId]: {
        ...post,
        commentCount: updatedCommentIds.length,
        commentIds: updatedCommentIds
      }
    }
  }
}

export default reducer
