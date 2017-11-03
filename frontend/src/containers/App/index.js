import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { getCategories } from 'actions/categories'
import { Divider } from 'semantic-ui-react'
import Header from 'components/Header'
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
            <Route exact path="/" component={HomePage}/>
            <Route path="/categories/:categoryId" component={CategoryPage}/>
            <Route path="/posts/:postId" component={PostPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

App.PropTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  categories: state.categories.toArray()
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(getCategories(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
