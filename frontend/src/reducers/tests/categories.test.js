import reducer from 'reducers'
import * as actions from 'actions'
import * as data from 'data/tests'

describe('categories reducer', () => {
  const post = data.post
  const posts = [ post ]
  const categoryId = data.category.name
  const categories = [ data.category ]
  const initialState = data.initialState

  const stateWithCategory = {
    ...initialState,
    categories: {
      allIds: ['music'],
      byId: {
        music: {name: 'music', path: 'music', postIds: []}
      }
    }
  }

  const stateWithCategoryPostId = {
    ...initialState,
    categories: {
      allIds: ['music'],
      byId: {
        music: {name: 'music', path: 'music', postIds: [post.id]}
      }
    },
    posts: {
      ...initialState.posts,
      byId: {
        [post.id]: { ...post }
      },
      allIds: [post.id]
    }
  }

  it('should return the initial state', () => {
    const action = {}
    const state = initialState
    const nextState = initialState

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_CATEGORIES_SUCCESS', () => {
    const action = actions.getCategoriesSuccess(categories)
    const state = initialState
    const nextState = stateWithCategory

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_CATEGORY_POSTS_SUCCESS', () => {
    const action = actions.getCategoryPostsSuccess(categoryId, posts)
    const state = stateWithCategory
    const nextState = stateWithCategoryPostId

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle CREATE_POST_SUCCESS', () => {
    const action = actions.createPostSuccess(post)
    const state = stateWithCategory
    const nextState = stateWithCategoryPostId

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle DELETE_POST_SUCCESS', () => {
    const action = actions.deletePostSuccess(post)
    const state = stateWithCategoryPostId
    const nextState = stateWithCategory

    expect(reducer(state, action)).toEqual(nextState)
  })
})
