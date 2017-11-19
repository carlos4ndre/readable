export const post = {
  id: 'f2972514-6d01-45fe-a76c-c5b544766b89',
  timestamp: 1467166872634,
  title: 'Buckethead Tour',
  body: 'Buckethead is back with great style!',
  author: 'Mr. Robot',
  category: 'music',
  voteScore: 100,
  commentCount: 20,
  commentIds: []
}

export const category = {
  name: 'music',
  path: 'music'
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
