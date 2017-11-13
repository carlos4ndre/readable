import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getCategories } from 'actions/categories'
import Header from 'components/Header'
import NotFound from 'components/NotFound'
import HomePage from 'containers/HomePage'
import PostPage from 'containers/PostPage'
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
            <Route path='/posts/:postId' component={PostPage}/>
            <Route path='/:categoryId' component={CategoryPage}/>
            <Route component={NotFound}/>
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
