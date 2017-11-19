import * as actions from 'actions'
import * as types from 'actionTypes'
import * as data from 'data/tests'

describe('actions', () => {
  const post = data.post
  const posts = [ post ]
  const categoryId = post.category
  const postId = post.id
  const callbacks = {
    resolve: () => 'good stuff',
    reject: () => 'ups, an error'
  }
  const error = 'Evil error detected!'

  it('should create an action to get posts [REQUEST]', () => {
    const expectedAction = {
      type: types.GET_POSTS_REQUEST,
    }
    expect(actions.getPosts()).toEqual(expectedAction)
  })

  it('should create an action to get posts [SUCCESS]', () => {
    const expectedAction = {
      type: types.GET_POSTS_SUCCESS,
      posts
    }
    expect(actions.getPostsSuccess(posts)).toEqual(expectedAction)
  })

  it('should create an action to get posts [FAILURE]', () => {
    const expectedAction = {
      type: types.GET_POSTS_FAILURE,
      error
    }
    expect(actions.getPostsFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to a get post [REQUEST]', () => {
    const expectedAction = {
      type: types.GET_POST_REQUEST,
      postId
    }
    expect(actions.getPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to a get post [SUCCESS]', () => {
    const expectedAction = {
      type: types.GET_POST_SUCCESS,
      post
    }
    expect(actions.getPostSuccess(post)).toEqual(expectedAction)
  })

  it('should create an action to a get post [FAILURE]', () => {
    const expectedAction = {
      type: types.GET_POST_FAILURE,
      error
    }
    expect(actions.getPostFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to get posts for a particular category [REQUEST]', () => {
    const expectedAction = {
      type: types.GET_CATEGORY_POSTS_REQUEST,
      categoryId
    }
    expect(actions.getCategoryPosts(categoryId)).toEqual(expectedAction)
  })

  it('should create an action to get posts for a particular category [SUCCESS]', () => {
    const expectedAction = {
      type: types.GET_CATEGORY_POSTS_SUCCESS,
      categoryId,
      posts
    }
    expect(actions.getCategoryPostsSuccess(categoryId, posts)).toEqual(expectedAction)
  })

  it('should create an action to get posts for a particular category [FAILURE]', () => {
    const expectedAction = {
      type: types.GET_CATEGORY_POSTS_FAILURE,
      error
    }
    expect(actions.getCategoryPostsFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to create a post [REQUEST]', () => {
    const expectedAction = {
      type: types.CREATE_POST_REQUEST,
      post,
      callbacks
    }
    expect(actions.createPost(post, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to create a post [SUCCESS]', () => {
    const expectedAction = {
      type: types.CREATE_POST_SUCCESS,
      post
    }
    expect(actions.createPostSuccess(post)).toEqual(expectedAction)
  })

  it('should create an action to create a post [FAILURE]', () => {
    const expectedAction = {
      type: types.CREATE_POST_FAILURE,
      error
    }
    expect(actions.createPostFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to vote a post [REQUEST]', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_POST_REQUEST,
      postId,
      value
    }
    expect(actions.votePost(postId, value)).toEqual(expectedAction)
  })

  it('should create an action to vote a post [SUCCESS]', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_POST_SUCCESS,
      postId,
      value
    }
    expect(actions.votePostSuccess(postId, value)).toEqual(expectedAction)
  })

  it('should create an action to vote a post [FAILURE]', () => {
    const expectedAction = {
      type: types.VOTE_POST_FAILURE,
      error
    }
    expect(actions.votePostFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to update a post [REQUEST]', () => {
    const expectedAction = {
      type: types.UPDATE_POST_REQUEST,
      post,
      callbacks
    }
    expect(actions.updatePost(post, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to update a post [SUCCESS]', () => {
    const expectedAction = {
      type: types.UPDATE_POST_SUCCESS,
      post
    }
    expect(actions.updatePostSuccess(post)).toEqual(expectedAction)
  })

  it('should create an action to update a post [FAILURE]', () => {
    const expectedAction = {
      type: types.UPDATE_POST_FAILURE,
      error
    }
    expect(actions.updatePostFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to delete a post [REQUEST]', () => {
    const expectedAction = {
      type: types.DELETE_POST_REQUEST,
      post
    }
    expect(actions.deletePost(post)).toEqual(expectedAction)
  })

  it('should create an action to delete a post [SUCCESS]', () => {
    const expectedAction = {
      type: types.DELETE_POST_SUCCESS,
      post
    }
    expect(actions.deletePostSuccess(post)).toEqual(expectedAction)
  })

  it('should create an action to delete a post [FAILURE]', () => {
    const expectedAction = {
      type: types.DELETE_POST_FAILURE,
      error
    }
    expect(actions.deletePostFailure(error)).toEqual(expectedAction)
  })
})
