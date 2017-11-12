export const sortByTimestamp = (obj1, obj2) => (
  obj2.timestamp - obj1.timestamp
)

export const sortByScore = (obj1, obj2) => (
  obj2.voteScore - obj1.voteScore
)


