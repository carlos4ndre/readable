export const category = {
  name: 'music',
  path: 'music'
}

export const post = {
  id: 'f2972514-6d01-45fe-a76c-c5b544766b89',
  timestamp: 1467166872634,
  title: 'Buckethead Tour',
  body: 'Buckethead is back with great style!',
  author: 'Mr. Robot',
  category: category.name,
  voteScore: 100,
  commentCount: 0,
  commentIds: []
}

export const comment = {
  id: 'f348798d-cd0a-42d7-8e34-846f345421c1',
  parentId: post.id,
  timestamp: 1510788064,
  body: 'trust me, this is great comment!',
  author: 'gandalf',
  voteScore: 5
}

export const initialState  = {
  categories: {
    allIds: [],
    byId: {},
  },
  comments: {
    allIds: [],
    byId: {},
    isFetchingComments: false,
  },
  posts: {
    allIds: [],
    byId: {},
    isFetchingPost: false,
    isFetchingPosts: false
  },
  form: {}
}
