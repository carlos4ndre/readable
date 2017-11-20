import * as selectors from 'selectors'
import * as data from 'data/tests'

describe('categories selector', () => {
  const initialState = data.initialState
  const comment = data.comment
  const comments = [comment]
  const commentId = comment.id
  const post = {...data.post, commentCount: 1, commentIds: [commentId]}
  const posts = [post]
  const postId = post.id

  const stateWithComment = {
    ...initialState,
    posts: {
      ...initialState.posts,
      byId: {
        [postId]: {
          ...post,
          commentCount: 1,
          commentIds: [comment.id]
        }
      }
    },
    comments: {
      ...initialState.comments,
      allIds: [commentId],
      byId: {
        [commentId]: comment
      }
    }
  }

  it('should retrieve posts', () => {
    const state = stateWithComment
    expect(selectors.getPosts(state)).toEqual(posts)
  })

  it('should retrieve post', () => {
    const state = stateWithComment
    expect(selectors.getPost(state, postId)).toEqual(post)
  })

  it('should retrieve isFetchingPosts', () => {
    const state = stateWithComment
    expect(selectors.isFetchingPosts(state)).toEqual(false)
  })

  it('should retrieve isFetchingPost', () => {
    const state = stateWithComment
    expect(selectors.isFetchingPost(state)).toEqual(false)
  })

  it('should retrieve post comments', () => {
    const state = stateWithComment
    expect(selectors.getPostComments(state, postId)).toEqual(comments)
  })
})
