import React, { Component } from 'react'
import Header from 'components/Header'
import CategoryList from 'components/CategoryList'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CategoryList />
      </div>
    )
  }
}

export default HomePage
