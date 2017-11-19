import * as selectors from 'selectors'
import * as data from 'data/tests'

describe('comments selector', () => {
  it('should retrieve isFetchingComments', () => {
    const state = data.initialState
    expect(selectors.isFetchingComments(state)).toEqual(false)
  })
})
