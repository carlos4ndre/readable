import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getCategories } from 'actions/categories'
import HomePage from 'containers/HomePage'
import PostPage from 'containers/PostPage'
import Header from 'components/Header'
import CategoryPage from 'containers/CategoryPage'

class App extends Component {
  componentWillMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <BrowserRouter>
        <div>
          <Header categories={categories}/>
          <Divider hidden/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/categories/:categoryId' component={CategoryPage}/>
            <Route path='/posts/:postId' component={PostPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

App.PropTypes = {
  categories: PropTypes.array.required
}

const mapStateToProps = (state) => ({
  categories: selectors.getCategories(state)
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(getCategories(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
