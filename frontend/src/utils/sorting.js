export const TOP = 'Top'
export const LATEST = 'Latest'
export const COMMENTS = 'Comments'

export const OPTIONS = [
  { key: 1, text: TOP, value: TOP  },
  { key: 2, text: LATEST, value: LATEST },
  { key: 3, text: COMMENTS, value: COMMENTS }
]

export const sortByTimestamp = (obj1, obj2) => (
  obj2.timestamp - obj1.timestamp
)

export const sortByScore = (obj1, obj2) => (
  obj2.voteScore - obj1.voteScore
)

export const sortByComments = (obj1, obj2) => (
  obj2.commentCount - obj1.commentCount
)
