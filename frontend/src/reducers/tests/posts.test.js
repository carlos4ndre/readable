import reducer from 'reducers'
import * as actions from 'actions'
import * as data from 'data/tests'

describe('posts reducer', () => {
  const initialState = data.initialState
  const categoryId = data.category.name
  const post = data.post
  const posts = [ post ]
  const postId = post.id

  const stateWithoutPost = {
    ...initialState,
    categories: {
      byId: {
        [categoryId]: {
          name: categoryId,
          label: categoryId,
          postIds: []
        }
      },
      allIds: [categoryId]
    }
  }

  const stateFetchingPosts = {
    ...stateWithoutPost,
    posts: {
      ...stateWithoutPost.posts,
      isFetchingPosts: true
    }
  }

  const stateFetchingPost = {
    ...stateWithoutPost,
    posts: {
      ...stateWithoutPost.posts,
      isFetchingPost: true
    }
  }

  const stateWithPost = (post) => ({
    ...stateWithoutPost,
    categories: {
      byId: {
        [categoryId]: {
          name: categoryId,
          label: categoryId,
          postIds: [postId]
        }
      },
      allIds: [categoryId]
    },
    posts: {
      ...stateWithoutPost.posts,
      byId: {
        [postId]: { ...post }
      },
      allIds: [postId]
    }
  })

  it('should handle GET_POSTS_REQUEST', () => {
    const action = actions.getPosts()
    const state = stateWithoutPost
    const nextState = stateFetchingPosts

    expect(reducer(state, action)).toEqual(nextState)

  })

  it('should handle GET_CATEGORY_POSTS_REQUEST', () => {
    const action = actions.getCategoryPosts(categoryId)
    const state = stateWithoutPost
    const nextState = stateFetchingPosts

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_POSTS_SUCCESS', () => {
    const action = actions.getPostsSuccess(posts)
    const state = stateFetchingPosts
    const nextState = stateWithPost(post)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_POSTS_FAILURE', () => {
    const action = actions.getPostsFailure()
    const state = stateFetchingPosts
    const nextState = stateWithoutPost

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_CATEGORY_POSTS_FAILURE', () => {
    const action = actions.getCategoryPostsFailure()
    const state = stateFetchingPosts
    const nextState = stateWithoutPost

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_POST_REQUEST', () => {
    const action = actions.getPost()
    const state = stateWithoutPost
    const nextState = stateFetchingPost

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_POST_SUCCESS', () => {
    const action = actions.getPostSuccess(post)
    const state = stateFetchingPost
    const nextState = stateWithPost(post)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_POST_FAILURE', () => {
    const action = actions.getPostFailure()
    const state = stateFetchingPost
    const nextState = stateWithoutPost

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle CREATE_POST_SUCCESS', () => {
    const action = actions.createPostSuccess(post)
    const state = stateWithoutPost
    const nextState = stateWithPost(post)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle VOTE_POST_SUCCESS when upVote', () => {
    const voteScore = post.voteScore + 1
    const postVoted = { ...post, voteScore }

    const action = actions.votePostSuccess(postId, 'upVote')
    const state = stateWithPost(post)
    const nextState = stateWithPost(postVoted)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle VOTE_POST_SUCCESS when downVote', () => {
    const voteScore = post.voteScore - 1
    const postVoted = { ...post, voteScore }

    const action = actions.votePostSuccess(postId, 'downVote')
    const state = stateWithPost(post)
    const nextState = stateWithPost(postVoted)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle DELETE_POST_SUCCESS', () => {
    const action = actions.deletePostSuccess(post)
    const state = stateWithPost(post)
    const nextState = stateWithoutPost

    expect(reducer(state, action)).toEqual(nextState)
  })
})
