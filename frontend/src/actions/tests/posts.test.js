import * as actions from 'actions'
import * as types from 'actionTypes'

describe('actions', () => {
  const post = {
    id: 'f2972514-6d01-45fe-a76c-c5b544766b89',
    timestamp: 1467166872634,
    title: 'Buckethead Tour',
    body: 'Buckethead is back with great style!',
    author: 'Mr. Robot',
    category: 'music',
    voteScore: 100,
    commentCount: 20
  }
  const callbacks = {
    resolve: () => 'good stuff',
    reject: () => 'ups, an error'
  }

  it('should create an action to get posts', () => {
    const expectedAction = {
      type: types.GET_POSTS_REQUEST,
    }
    expect(actions.getPosts()).toEqual(expectedAction)
  })

  it('should create an action to a get post', () => {
    const postId = post.id
    const expectedAction = {
      type: types.GET_POST_REQUEST,
      postId
    }
    expect(actions.getPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to get posts for a particular category', () => {
    const categoryId = post.category
    const expectedAction = {
      type: types.GET_CATEGORY_POSTS_REQUEST,
      categoryId
    }
    expect(actions.getCategoryPosts(categoryId)).toEqual(expectedAction)
  })

  it('should create an action to create a post', () => {
    const expectedAction = {
      type: types.CREATE_POST_REQUEST,
      post,
      callbacks
    }
    expect(actions.createPost(post, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to vote a post', () => {
    const postId = post.id
    const value = 1
    const expectedAction = {
      type: types.VOTE_POST_REQUEST,
      postId,
      value
    }
    expect(actions.votePost(postId, value)).toEqual(expectedAction)
  })

  it('should create an action to update a post', () => {
    const expectedAction = {
      type: types.UPDATE_POST_REQUEST,
      post,
      callbacks
    }
    expect(actions.updatePost(post, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to delete a post', () => {
    const expectedAction = {
      type: types.DELETE_POST_REQUEST,
      post
    }
    expect(actions.deletePost(post)).toEqual(expectedAction)
  })
})
