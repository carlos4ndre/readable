import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export const mountWithStore = (container, initialState={}) => {
  const mockStore = configureStore()
  const store = mockStore(initialState)

  return mount(
    <Provider store={store}>
      <MemoryRouter>
        {container}
      </MemoryRouter>
    </Provider>
  )
}

export const shallowWithStore = (container, initialState={}) => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const options = {
    context: { store }
  }

  return shallow(container, options)
}
