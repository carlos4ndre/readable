import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import HomePage from 'containers/HomePage'
import PostPage from 'containers/PostPage'
import CategoryPage from 'containers/CategoryPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/categories/:categoryId" component={CategoryPage}/>
          <Route path="/posts/:postId" component={PostPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
